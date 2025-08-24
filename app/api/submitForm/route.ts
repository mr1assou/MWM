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
      to: ['marwane.assoupf@gmail.com'],
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
      text: `
Thank you, ${firstName}!

We truly appreciate you reaching out to MWMTECH.
Your message has been received, and our team is already reviewing your request.

Expect a personalized response within 24–48 hours.

Book Appointment :
https://calendar.app.google/jaYqRDByx9pUrK1X8

Best regards,
The MWMTECH Team
`,
      html: `
  <div style="background-color:#f4f4f4;padding:30px 0;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.08);">

      <!-- Logo -->
      <div style="text-align:center;padding:10px;">
        <img src="cid:mwm-logo" alt="MWMTECH Logo" style="max-width:150px;height:auto;">
      </div>

      <!-- Main Content -->
      <div style="padding:10px;text-align:center;">
        <h1 style="color:#333;font-size:24px;margin:0 0 10px;">
          Thank You, ${firstName}!
        </h1>
        
        <p style="color:#555;font-size:16px;line-height:1.6;margin:0 0 20px;">
          We truly appreciate you reaching out to MWMTECH. Your message has been received, and our team is already reviewing your request.
        </p>

        <p style="color:#555;font-size:16px;line-height:1.6;margin:0 0 18px;">
          To help us prepare the best proposal, could you tell us a little about your business and what you need from us?
          Please include:
        </p>

        <ul style="color:#555;font-size:16px;line-height:1.6;margin:0 0 24px 18px;padding:0;text-align:left;display:inline-block;">
          <li style="margin-bottom:8px;color:#555;">What type of business you run (or plan to launch)</li>
          <li style="margin-bottom:8px;color:#555;">Your main goals for the website</li>
          <li style="margin-bottom:8px;color:#555;">Budget range</li>
        </ul>

        

            <p style="color:#555;font-size:16px;line-height:1.6;margin:0 0 18px;">If you don’t book an appointment, one of our team members may reach out to follow up. Otherwise, choose a time that fits your schedule and we’ll meet to discuss your project: 
            <a href="https://calendar.app.google/jaYqRDByx9pUrK1X8">Book Appointment </a></p>
      </div>

      <!-- Footer -->
      <div style="background-color:#f8f8f8;text-align:center;padding:15px;">
        <p style="color:#888;font-size:14px;margin:0;">
          Best regards,<br>
          <strong>MWMTECH Team</strong>
        </p>
      </div>

    </div>
  </div>
`,
      attachments: [
        {
          filename: 'logo.png',
          path: logoPath,
          cid: 'mwm-logo',
          contentDisposition: 'inline' as const
        },
        {
          filename: 'email_image.png',
          path: path.join(process.cwd(), 'public', 'images', 'hero', 'email_image.png'),
          cid: 'email-banner',
          contentDisposition: 'inline' as const
        }
      ]

    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(clientMailOptions)
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