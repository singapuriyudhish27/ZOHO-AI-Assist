import { NextResponse } from "next/server";
import { registerBusinessAdmin, initDB } from "@/lib/db";
import { setAuthCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.fullName || !data.email || !data.password || !data.businessName) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Initialize DB (creates tables if they don't exist)
    await initDB();

    // Register User & Business
    const result = await registerBusinessAdmin(data);

    // Set JWT Cookie
    await setAuthCookie({
      userId: result.userId,
      businessId: result.businessId,
      businessName: data.businessName,
      adminName: data.fullName,
      email: data.email
    });

    return NextResponse.json({ 
      success: true, 
      message: "Registration successful",
      userId: result.userId,
      businessId: result.businessId
    });
    
  } catch (error) {
    console.error("Registration API Error:", error);
    
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

