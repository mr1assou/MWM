import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phone_number, message, id } = body;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // Use STARTTLS
      auth: {
        user: "contact@mwmofficiel.com",
        pass: "@Marwane2003"
      }
    });

    // Email to your team
    const teamMailOptions = {
      from: '"MWMTECH SUPPORT" <contact@mwmofficiel.com>',
      //, 'marouaneboussalem1@gmail.com'
      to: ['marwane.assoupf@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `
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
            <td style="padding: 12px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Phone</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone_number}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Message</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${message}</td>
          </tr>
        </table>
        <p style="color: #666; margin-top: 20px;">
          This email was sent from the contact form on your website.
        </p>
      `
    };

    // Confirmation email to client
    // ✅ Confirmation email to client
    const clientMailOptions = {
      from: '"MWMTECH SUPPORT" <contact@mwmofficiel.com>',
      to: email,
      subject: 'Thank You for Contacting Us',
      text: `
Thank you, ${firstName}!

We truly appreciate you reaching out to MWM. 
Your message has been received, and our team is already reviewing your request.

Expect a personalized response within 24–48 hours.

📅 Book Appointment Now:
https://calendar.app.google/DjDLJYJz2drca9a38

Best regards,
The MWM Team
      `,
      html: `
        <div style="background-color:#f4f4f4; padding: 30px 0; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">

            <!-- Logo Header -->
            <div style="text-align: center; padding: 10px;">
              <img src="https://mwmofficiel.com/images/logo/logo.png" alt="MWM Logo" style="max-width: 150px; height: auto;">
            </div>

            <!-- Main Content -->
            <div style="padding: 10px; text-align: center;">
              <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Thank You, ${firstName}!</h1>
              <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                We truly appreciate you reaching out to MWM. Your message has been received, and our team is already reviewing your request.  
              </p>

              <!-- Thanks Image -->
              <img src="https://mwmofficiel.com/images/hero/email_image.png" 
                alt="Thank You" 
                style="max-width: 100%; height: 250px; object-fit: cover; border-radius: 6px; margin-bottom: 25px;">
              <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                Expect a personalized response within 24–48 hours. We’re excited to connect and help bring your vision to life.
              </p>

              <!-- Book Appointment Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://calendar.app.google/DjDLJYJz2drca9a38" 
                  target="_blank" 
                  style="background-color: #007bff; color: #ffffff; padding: 14px 28px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: inline-block;">
                  📅 Book Appointment Now
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8f8f8; text-align: center; padding: 15px;">
              <p style="color: #888; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong>The MWM Team</strong>
              </p>
            </div>

          </div>
        </div>
      `
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