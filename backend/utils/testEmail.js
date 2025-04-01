import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your App Password
    },
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "yatendrabarve84@gmail.com", // Replace with a test recipient email
    subject: "Test Email from Cafesphere ☕",
    text: "Hello! This is a test email from Cafesphere. If you receive this, your email setup is working perfectly!",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("❌ Error sending email:", error);
    } else {
        console.log("✅ Email sent successfully! Message ID:", info.messageId);
    }
});
