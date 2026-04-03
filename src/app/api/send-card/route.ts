import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, orderNumber, notes, imageBase64 } = await req.json();

    if (!name || !email || !imageBase64) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure nodemailer transporter
    // For local development or production, these must be set in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "user@example.com",
        pass: process.env.SMTP_PASS || "password",
      },
    });

    // Remove the data URL prefix to get raw base64 string
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const mailOptions = {
      from: `"Rooted Canada" <info@rootedcanada.com>`,
      to: "support@rootedcanada.com",
      subject: `New Custom Card Design from ${name}`,
      replyTo: email,
      text: `
A new custom card design has been submitted.

Name: ${name}
Email: ${email}
Order Number: ${orderNumber || "Not provided"}
Notes:
${notes || "None"}

Please find the high-resolution design attached.
      `,
      html: `
        <h2>New Custom Card Design Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Order Number:</strong> ${orderNumber || "Not provided"}</p>
        <p><strong>Notes:</strong><br/> ${notes ? notes.replace(/\n/g, '<br/>') : "None"}</p>
        <p>Please find the high-resolution design attached as a PNG.</p>
      `,
      attachments: [
        {
          filename: `custom-card-${name.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`,
          content: buffer,
          contentType: "image/png",
        },
      ],
    };

    // If SMTP credentials aren't configured, we just log the action and return success
    // This allows the user to test the UI flow without immediately configuring an SMTP server.
    if (!process.env.SMTP_USER || process.env.SMTP_USER === "user@example.com") {
      console.log("Mock sending email (SMTP not configured):", {
        to: mailOptions.to,
        subject: mailOptions.subject,
        attachmentLength: buffer.length,
      });
      return NextResponse.json({ success: true, mock: true });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
