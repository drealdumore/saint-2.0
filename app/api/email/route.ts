import InquiryEmail from "@/emails";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { username, email, organization, service, message } =
      await req.json();

    if (!username || !email || !service || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: `New Inquiry from ${username} (${email})`,
      react: InquiryEmail({ username, email, organization, service, message }),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        data,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ success: false, error: err }), {
      status: 500,
    });
  }
}
