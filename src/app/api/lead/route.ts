import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LEAD_EMAIL = "smarttradinghubofcl@gmail.com";

type LeadPayload = {
  name: string;
  mobile: string;
  email: string;
  topic: string;
  consent: boolean;
};

function isValidPayload(data: unknown): data is LeadPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.mobile === "string" &&
    d.mobile.trim().length > 0 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.topic === "string" &&
    d.topic.trim().length > 0 &&
    d.consent === true
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json({ success: false, error: "Invalid form data." }, { status: 400 });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailAppPassword = process.env.EMAIL_APP_PASSWORD;

  if (!emailUser || !emailAppPassword) {
    console.error("Lead form: EMAIL_USER / EMAIL_APP_PASSWORD are not configured.");
    return NextResponse.json(
      { success: false, error: "Email delivery is not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: emailUser, pass: emailAppPassword },
  });

  try {
    await transporter.sendMail({
      from: `Smart Traders Website <${emailUser}>`,
      to: LEAD_EMAIL,
      replyTo: body.email,
      subject: "New Lead from Smart Traders Website",
      text: [
        "New enquiry from the Start Your Learning Journey form:",
        "",
        `Full Name: ${body.name}`,
        `Mobile Number: ${body.mobile}`,
        `Email Address: ${body.email}`,
        `What Would You Like to Learn: ${body.topic}`,
        "Consent to be Contacted: Yes",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead form: failed to send email.", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 502 }
    );
  }
}
