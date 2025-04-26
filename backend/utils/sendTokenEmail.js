// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'

const sendTokenEmail = async (userEmail, userName, generatedToken, date, timeSlot) => {
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
            subject: "Regarding your Booking Token Number!",
            html: `<h2>Hello ${userName},</h2>
                   <p>Booking Date: ${date}</p>
                   <p>Time: ${timeSlot}</p>
                   <h4>Your booking token is: <strong>${generatedToken}</strong></h4>
                   <p>Important:
                   To approve your booking when you arrive at the cafe, please provide the token number to our staff. This will help us verify and confirm your reservation.</p>

                   <p>Please ensure you have the token number with you upon arrival.</p>
                   <br>
                   <p>Best Regards,</p>
                   <p>Cafesphere Team</p>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log("token email sent successfully!");
    } catch (error) {
        console.error("Error sending token email:", error);
    }
};

export default sendTokenEmail;
