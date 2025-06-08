import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phone_number, message ,id} = body;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: "75a2ad002@smtp-brevo.com", 
        pass: "kMhwZ2DHTE4qIn6J"         
      }
    });
    const mailOptions = {
      from: 'contact@mwmofficiel.com', 
      // ,wahab.hammoud2002@gmail.com,marouaneboussalem1@gmail.com
      to: 'marwane.assoupf@gmail.com',  
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
            <td style="padding: 12px; border: 1px solid #ddd;" className="bg-blue-600">${message}</td>
          </tr>
        </table>
    <p style="color: #666; margin-top: 20px;">
      This email was sent from the contact form on your website.
    </p>
  `};
    const info = await transporter.sendMail(mailOptions);
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