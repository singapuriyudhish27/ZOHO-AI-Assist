import { NextResponse } from "next/server";
import { updateOnboardingData, createInvitation } from "@/lib/db";
import { sendInvitationEmail } from "@/lib/email";
import { getAuthContext } from "@/lib/auth";

export async function POST(req) {
  try {
    const context = await getAuthContext();
    const { type, data } = await req.json();

    if (!context || !context.businessId) {
       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const businessId = context.businessId;

    if (!type || !data) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await updateOnboardingData(businessId, type, data);

    // If team members are added, generate invitations and send emails
    if (type === "team" && data.members && data.members.length > 0) {
      for (const member of data.members) {
        try {
          // Check if invitation already exists (basic idempotency for dev)
          const token = await createInvitation(businessId, member.email);
          const inviteLink = `${process.env.NEXT_PUBLIC_BASE_URL}/invitation/${token}`;
          
          await sendInvitationEmail(member.email, inviteLink);
        } catch (inviteError) {
          console.error(`Invitation failed for ${member.email}:`, inviteError);
          // Continue with other members even if one fails
        }
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `${type} data saved successfully`
    });
    
  } catch (error) {
    console.error("Onboarding Persistence API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
