import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, email, phone_number, id } = body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@mwmofficiel.com",
        pass: "@Marwane2003" // ⚠️ Move to ENV in production
      }
    });

    // Path to your logo file
    const logoPath = path.join(process.cwd(), 'public', 'images', 'logo', 'logo.png');

    // 📩 Email to your team
    const teamMailOptions = {
      from: '"MWMTECH SUPPORT" <contact@mwmofficiel.com>',
      // 
      to: ['marwane.assoupf@gmail.com','marouaneboussalem1@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `
             <!-- Logo Header (embedded with cid) -->
            <div style="text-align: center; padding: 10px;">
              <img src="cid:mwm-logo" alt="MWM Logo" style="max-width: 150px; height: auto;">
            </div>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-family: Arial, sans-serif;">
          <tr style="background-color: #f8f9fa;">
            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Field</th>
            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Details</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Pack</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${id}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Name</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${firstName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Phone</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone_number}</td>
          </tr>
        </table>
      `,
      attachments: [
        {
          filename: 'logo.png',
          path: logoPath,
          cid: 'mwm-logo',
          contentDisposition: 'inline' as const
        },
      ]
    };

    // 📩 Confirmation email to client
    const clientMailOptions = {
      from: '"MWMTECH SUPPORT" <contact@mwmofficiel.com>',
      to: email,
      replyTo: "contact@mwmofficiel.com",
      subject: 'Thank You for Contacting Us',
      html: `
  <div style="background-color:#f4f4f4;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.08);">
    
    <!-- Top accent -->
    <div style="height:6px;background:#4A6CF7;"></div>
    
    <!-- Main Content -->
    <div style="padding:24px 20px 10px;text-align:center;">
      <h1 style="color:#111827;font-size:24px;line-height:1.3;margin:0 0 10px;font-weight:bold;">
        Thank you, ${firstName}!
      </h1>
      <p style="color:#4b5563;font-size:16px;line-height:1.65;margin:0 0 18px;">
        We truly appreciate you reaching out to MWMTECH. Your message has been received, and our team is already reviewing your request.
      </p>

      <!-- Subtle “card” section to group the ask -->
      <div style="border:1px solid #e5e7eb;background:#fafafa;border-radius:10px;padding:16px 14px;margin:0 auto 16px;display:inline-block;text-align:left;max-width:520px;">
        <p style="color:#4b5563;font-size:16px;line-height:1.65;margin:0 0 8px;">
          To help us prepare the best proposal, could you share a few details?
        </p>
        <ul style="color:#4b5563;font-size:16px;line-height:1.65;margin:0 0 0 18px;padding:0;">
          <li style="margin-bottom:8px;">What type of business you run (or plan to launch)</li>
          <li style="margin-bottom:8px;">Your main goals for the website</li>
          <li style="margin-bottom:0;">Budget range</li>
        </ul>
      </div>

      <p style="color:#4b5563;font-size:16px;line-height:1.65;margin:0 0 18px;">
        Prefer to talk live? Choose a time that fits your schedule and we’ll meet to discuss your project.
      </p>

      <!-- CTA Button -->
      <div style="margin:8px 0 4px;">
        <a href="https://calendar.app.google/jaYqRDByx9pUrK1X8"
           target="_blank"
           style="background:#4A6CF7;color:#FFFFFF;text-decoration:none;display:inline-block;padding:14px 22px;border-radius:8px;font-weight:bold;font-size:16px;">
          📅 Book Appointment Now
        </a>
      </div>
    </div>

    <!-- Divider -->
    <div style="height:1px;background:#f1f5f9;margin:10px 20px 0;"></div>

    <!-- Footer -->
    <div style="background-color:#f9fafb;text-align:center;padding:16px 20px;">
      <p style="color:#6b7280;font-size:14px;line-height:1.6;margin:0;">
        Best regards,<br>
        <strong style="color:#111827;">MWMTECH Team</strong><br>
        <a href="mailto:contact@mwmofficiel.com" style="color:#2563eb;text-decoration:none;">contact@mwmofficiel.com</a>
      </p>
      <p style="color:#9ca3af;font-size:12px;line-height:1.6;margin:10px 0 0;">
        You’re receiving this because you contacted MWMTECH via our website.
      </p>
    </div>

  </div>
</div>

`,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(teamMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


// <img src="cid:email-banner" alt="Thank You"
//style="max-width:100%;height:250px;object-fit:cover;border-radius:6px;margin:0 0 25px;">

//         {
//   filename: 'email_image.png',
//   path: path.join(process.cwd(), 'public', 'images', 'hero', 'email_image.png'),
//   cid: 'email-banner',
//   contentDisposition: 'inline' as const
// }