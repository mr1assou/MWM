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
      from: 'MWMOFFICIEL SUPPORT contact@mwmofficiel.com',
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
    const clientMailOptions = {
      from: 'MWMOFFICIEL SUPPORT contact@mwmofficiel.com',
      to: email,
      subject: 'Thank You for Contacting Us',
      html: `
        <div style="background-color:#f4f4f4; padding: 30px 0; font-family: Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 2px solid #0d6efd;">
    
    <!-- Logo Header -->
    <div style="text-align: center; padding: 10px;">
      <img src="https://mwmofficiel.com/images/logo/logo.png" alt="MWM Logo" style="max-width: 150px; height: auto;">
    </div>
    
    <!-- Main Content -->
    <div style="padding: 30px; text-align: center;">
      <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Thank You, ${firstName}!</h1>
      <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        We truly appreciate you reaching out to MWM. Your message has been received, and our team is already reviewing your request.  
      </p>
      <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
        Expect a personalized response within 24–48 hours. We’re excited to connect and help bring your vision to life.
      </p>
      
      <!-- Thanks Image -->
      <img src="https://mwmofficiel.com/images/hero/email_image.png" alt="Thank You" style="max-width: 100%; border-radius: 6px; margin-bottom: 25px;">
      
      <p style="color: #333; font-size: 16px; margin-top: 10px;">
        <strong>We’re here to build something amazing together!</strong>
      </p>
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