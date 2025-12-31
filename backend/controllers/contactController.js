const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Handle contact form submission
exports.submitContactForm = (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Create new contact instance
    const contact = new Contact(name, email, message);
    
    // Save to database
    contact.save(async (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Error saving message to database' });
      }
      
      // Send email notification
      try {
        await sendEmailNotification(name, email, message);
        res.status(201).json({ 
          message: 'Message sent successfully!', 
          success: true 
        });
      } catch (emailError) {
        console.error('Email error:', emailError);
        // Still return success since the message was saved to database
        res.status(201).json({ 
          message: 'Message saved successfully! (Email notification failed)', 
          success: true 
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing contact form', error: error.message });
  }
};

// Function to send email notification
async function sendEmailNotification(name, email, message) {
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-email-password'
    }
  });
  
  // Define email options
  const mailOptions = {
    from: process.env.EMAIL_USER || 'your-email@gmail.com',
    to: process.env.CONTACT_EMAIL || 'vinaysv@example.com',
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };
  
  // Send the email
  await transporter.sendMail(mailOptions);
}