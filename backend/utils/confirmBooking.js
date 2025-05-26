// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'

const confirmBooking = async (userEmail, userName) => {
    try {
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
        // Configure the email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // App password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: "Your Booking at CafeSphere is Confirmed! 🎉",
            html: `<h2>Dear ${userName},</h2>
                   <p>Great news! Your booking at CafeSphere has been successfully confirmed. We're excited to have you and look forward to serving you a wonderful experience.☕</p>
                   <p>If you need to make any changes or have questions, feel free to reach out to us.<p>
                   <p>Thank you for choosing CafeSphere!</p>
                   <br>
                   <p>Best Regards,</p>
                   <p>The Cafesphere Team</p>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log("Confirm booking email sent successfully!");
    } catch (error) {
        console.error("Error sending welcome email:", error);
    }
};

export default confirmBooking;
