// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'

const rejectBooking = async (userEmail, userName) => {
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
            subject: "Update on Your CafeSphere Booking Request",
            html: `<h2>Dear ${userName},</h2>
                   <p>We regret to inform you that your booking has been rejected due to some internal issues at the cafe. However, you are welcome to rebook at your convenience. We apologize for the inconvenience and appreciate your understanding.</p>
                   <p>Thank you for your understanding and continued support.</p>
                   <br>
                   <p>Best Regards,</p>
                   <p>The Cafesphere Team</p>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log("Reject booking email sent successfully!");
    } catch (error) {
        console.error("Error sending welcome email:", error);
    }
};

export default rejectBooking;
