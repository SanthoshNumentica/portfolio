import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'sadaiyappancse@gmail.com',
      pass: process.env.SMTP_PASS || 'afbsigmjoncofndv',
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Portfolio Contact" <sadaiyappancse@gmail.com>',
      to: process.env.MAIL_TO || 'developer.santhosh@outlook.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Message from Portfolio Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; padding: 10px; background-color: #f5f5f5; border-left: 3px solid #00ffaa;">${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('SMTP Email sending error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email via SMTP' });
  }
}
