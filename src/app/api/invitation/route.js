import { NextResponse } from "next/server";
import { getInvitationByToken, completeInvitation } from "@/lib/db";
import { setAuthCookie } from "@/lib/auth";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token is required" }, { status: 400 });
  }

  try {
    const invite = await getInvitationByToken(token);
    
    if (!invite) {
      return NextResponse.json({ error: "Invalid or expired invitation" }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      email: invite.email 
    });
    
  } catch (error) {
    console.error("Invitation Verification Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { token, fullName, password } = await req.json();

    if (!token || !fullName || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await completeInvitation(token, fullName, password);

    // Set JWT Cookie
    await setAuthCookie({
      userId: result.userId,
      businessId: result.businessId,
      adminName: fullName, // Team Member name
      email: "" // We don't have the email in the result currently, but it can be retrieved if needed
    });

    return NextResponse.json({ 
      success: true, 
      message: "Account setup successful",
      userId: result.userId,
      businessId: result.businessId
    });
    
  } catch (error) {
    console.error("Invitation Completion Error:", error);
    if (error.message === "Invalid or expired token") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
