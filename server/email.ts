import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const TO_EMAIL = "contact@infiniterankers.com";
const FROM_EMAIL = process.env.SMTP_USER || "noreply@infiniterankers.com";

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
}) {
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

  await transporter.sendMail({
    from: `"Infinite Rankers Website" <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: data.email,
    subject: `New Contact: ${data.name}${data.company ? ` from ${data.company}` : ""}`,
    html,
  });
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

  await transporter.sendMail({
    from: `"Infinite Rankers Website" <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: data.email,
    subject: `New Demo Booking: ${data.name}${data.service ? ` - ${data.service}` : ""}`,
    html,
  });
}
