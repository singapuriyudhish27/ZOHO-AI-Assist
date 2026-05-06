import { NextResponse } from "next/server";
import { verifyUser } from "@/lib/db";
import { setAuthCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // 1. Check for Super Admin (Hardcoded in .env)
    if (email === process.env.SUPER_ADMIN_MAIL && password === process.env.SUPER_ADMIN_PASSWORD) {
      await setAuthCookie({
        userId: 0,
        businessId: null,
        businessName: "Super Admin",
        adminName: "Super Admin",
        email: email,
        role: "super_admin"
      });

      return NextResponse.json({ 
        success: true, 
        message: "Super Admin Login successful",
        userId: 0,
        role: "super_admin"
      });
    }

    // 2. Regular User Login
    const user = await verifyUser(email, password);

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 }); 
    }

    // Set JWT Cookie
    await setAuthCookie({
      userId: user.userId,
      businessId: user.businessId,
      businessName: user.businessName,
      adminName: user.fullName,
      email: user.email,
      role: user.role
    });

    return NextResponse.json({ 
      success: true, 
      message: "Login successful",
      userId: user.userId,
      businessId: user.businessId,
      role: user.role
    });
    
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
