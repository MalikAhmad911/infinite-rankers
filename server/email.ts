import nodemailer from "nodemailer";

const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "contact@infiniterankers.io",
    pass: process.env.SMTP_PASS || "",
  },
};

console.log("SMTP Config:", { host: SMTP_CONFIG.host, port: SMTP_CONFIG.port, user: SMTP_CONFIG.auth.user, passSet: !!SMTP_CONFIG.auth.pass });

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport(SMTP_CONFIG);
  }
  return transporter;
}

const TO_EMAIL = "contact@infiniterankers.io";
const FROM_EMAIL = SMTP_CONFIG.auth.user;

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
}) {
  if (!SMTP_CONFIG.auth.pass) {
    console.error("SMTP_PASS not set - cannot send email. Set SMTP_PASS environment variable.");
    return;
  }

  const html = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      ${data.phone ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone}</td></tr>` : ""}
      ${data.company ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.company}</td></tr>` : ""}
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.message}</td></tr>
    </table>
  `;

  try {
    const info = await getTransporter().sendMail({
      from: `"Infinite Rankers Website" <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New Contact: ${data.name}${data.company ? ` from ${data.company}` : ""}`,
      html,
    });
    console.log("Contact email sent:", info.messageId, info.response);
  } catch (err: any) {
    console.error("Contact email FAILED:", err.message);
    throw err;
  }
}

export async function sendDemoBookingEmail(data: {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  website?: string | null;
  revenue?: string | null;
  service?: string | null;
  date?: string | null;
  time?: string | null;
  message?: string | null;
}) {
  if (!SMTP_CONFIG.auth.pass) {
    console.error("SMTP_PASS not set - cannot send email. Set SMTP_PASS environment variable.");
    return;
  }

  const html = `
    <h2>New Demo Booking Request</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      ${data.phone ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone}</td></tr>` : ""}
      ${data.company ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.company}</td></tr>` : ""}
      ${data.website ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Website</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.website}</td></tr>` : ""}
      ${data.revenue ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Revenue</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.revenue}</td></tr>` : ""}
      ${data.service ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.service}</td></tr>` : ""}
      ${data.date ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Preferred Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.date}</td></tr>` : ""}
      ${data.time ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Preferred Time</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.time}</td></tr>` : ""}
      ${data.message ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.message}</td></tr>` : ""}
    </table>
  `;

  try {
    const info = await getTransporter().sendMail({
      from: `"Infinite Rankers Website" <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New Demo Booking: ${data.name}${data.service ? ` - ${data.service}` : ""}`,
      html,
    });
    console.log("Demo booking email sent:", info.messageId, info.response);
  } catch (err: any) {
    console.error("Demo booking email FAILED:", err.message);
    throw err;
  }
}
