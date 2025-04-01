// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'

const sendWelcomeEmail = async (userEmail, userName) => {
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
            subject: "Welcome to Cafesphere!",
            html: `<h2>Hello ${userName},</h2>
                   <p>Thank you for signing up for Cafesphere. We're excited to have you onboard! ☕🎉</p>
                   <p>Enjoy your experience with us!</p>
                   <br>
                   <p>Best Regards,</p>
                   <p>Cafesphere Team</p>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log("Welcome email sent successfully!");
    } catch (error) {
        console.error("Error sending welcome email:", error);
    }
};

export default sendWelcomeEmail;
