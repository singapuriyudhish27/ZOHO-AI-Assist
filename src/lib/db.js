import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "zoho_ai",
  port: parseInt(process.env.DB_PORT || "3306"),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Initialize Database Schema
export async function initDB() {
  const connection = await pool.getConnection();
  try {
    // Users Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Businesses Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS businesses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        name VARCHAR(255) NOT NULL,
        plan VARCHAR(50) DEFAULT 'Basic',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Team Members Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS team_members (
        id INT AUTO_INCREMENT PRIMARY KEY,
        business_id INT,
        email VARCHAR(255) NOT NULL,
        permissions JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (business_id) REFERENCES businesses(id) ON DELETE CASCADE
      )
    `);

    // Connected Apps Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS connected_apps (
        id INT AUTO_INCREMENT PRIMARY KEY,
        business_id INT,
        app_name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (business_id) REFERENCES businesses(id) ON DELETE CASCADE
      )
    `);

    // Invitations Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS invitations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        business_id INT,
        email VARCHAR(255) NOT NULL,
        token VARCHAR(255) UNIQUE NOT NULL,
        status ENUM('pending', 'accepted') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (business_id) REFERENCES businesses(id) ON DELETE CASCADE
      )
    `);

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  } finally {
    connection.release();
  }
}

// Helper: Query wrapper
export async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}

// User Registration Logic
export async function registerBusinessAdmin(data) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // Insert User
    const [userResult] = await connection.execute(
      "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)",
      [data.fullName, data.email, data.password]
    );
    const userId = userResult.insertId;

    // Insert Business
    const [businessResult] = await connection.execute(
      "INSERT INTO businesses (user_id, name) VALUES (?, ?)",
      [userId, data.businessName]
    );
    const businessId = businessResult.insertId;

    await connection.commit();
    return { userId, businessId };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

// User Login Logic
export async function verifyUser(email, password) {
  const users = await query(
    `SELECT u.*, 
            b.id as admin_business_id, b.name as admin_business_name,
            tm.business_id as member_business_id, b2.name as member_business_name
     FROM users u 
     LEFT JOIN businesses b ON u.id = b.user_id 
     LEFT JOIN team_members tm ON u.email = tm.email
     LEFT JOIN businesses b2 ON tm.business_id = b2.id
     WHERE u.email = ? AND u.password = ?`,
    [email, password]
  );
  
  if (users.length === 0) return null;
  
  const user = users[0];
  let role = "user";
  let businessId = null;
  let businessName = null;

  if (user.admin_business_id) {
    role = "admin";
    businessId = user.admin_business_id;
    businessName = user.admin_business_name;
  } else if (user.member_business_id) {
    role = "member";
    businessId = user.member_business_id;
    businessName = user.member_business_name;
  }

  return {
    userId: user.id,
    fullName: user.full_name,
    email: user.email,
    businessId,
    businessName,
    role
  };
}

// Onboarding Data Persistence
export async function updateOnboardingData(businessId, type, data) {
  switch (type) {
    case "apps":
      // Clear existing and add new
      await query("DELETE FROM connected_apps WHERE business_id = ?", [businessId]);
      if (data.apps && data.apps.length > 0) {
        const values = data.apps.map(app => [businessId, app]);
        await pool.query("INSERT INTO connected_apps (business_id, app_name) VALUES ?", [values]);
      }
      break;
    
    case "team":
      // Add team members
      if (data.members && data.members.length > 0) {
        const values = data.members.map(m => [businessId, m.email, JSON.stringify(m.permissions)]);
        await pool.query("INSERT INTO team_members (business_id, email, permissions) VALUES ?", [values]);
      }
      break;

    case "plan":
      await query("UPDATE businesses SET plan = ? WHERE id = ?", [data.plan, businessId]);
      break;
    
    default:
      throw new Error(`Invalid update type: ${type}`);
  }
}

// Invitation Helpers
export async function createInvitation(businessId, email) {
  // Check if a pending invitation already exists
  const existing = await query(
    "SELECT token FROM invitations WHERE business_id = ? AND email = ? AND status = 'pending'",
    [businessId, email]
  );
  
  if (existing.length > 0) {
    return existing[0].token;
  }

  const token = require("crypto").randomBytes(32).toString("hex");
  await query(
    "INSERT INTO invitations (business_id, email, token) VALUES (?, ?, ?)",
    [businessId, email, token]
  );
  return token;
}

export async function getInvitationByToken(token) {
  const invites = await query(
    "SELECT * FROM invitations WHERE token = ? AND status = 'pending'",
    [token]
  );
  return invites[0] || null;
}

export async function completeInvitation(token, fullName, password) {
  const invite = await getInvitationByToken(token);
  if (!invite) throw new Error("Invalid or expired token");

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // Create User
    const [userResult] = await connection.execute(
      "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)",
      [fullName, invite.email, password]
    );

    // Update Invitation Status
    await connection.execute(
      "UPDATE invitations SET status = 'accepted' WHERE id = ?",
      [invite.id]
    );

    await connection.commit();
    return { userId: userResult.insertId, businessId: invite.business_id };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

export default pool;
