import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendInvitationEmail(email, inviteLink) {
  const mailOptions = {
    from: `"Zoho AI Assistant" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Workspace Invitation - Zoho AI Assistant",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #1e293b; margin-top: 0;">You've been invited!</h2>
        <p style="color: #475569; line-height: 1.6;">A Business Admin has invited you to join their Zoho AI Assistant workspace. Click the button below to set up your account and start collaborating.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${inviteLink}" style="background-color: #b8842a; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">Set Up Account</a>
        </div>
        
        <p style="color: #64748b; font-size: 14px;">If the button above doesn't work, copy and paste this link into your browser:</p>
        <p style="color: #64748b; font-size: 14px; word-break: break-all;">${inviteLink}</p>
        
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #94a3b8; font-size: 12px; text-align: center;">This is an automated message. Please do not reply.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Invitation email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Failed to send invitation email:", error);
    // Log the link so the user can still use it during development if SMTP is not set up
    console.log(`[DEV ONLY] Invitation Link: ${inviteLink}`);
    return false;
  }
}
