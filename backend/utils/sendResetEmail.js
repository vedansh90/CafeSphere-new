import nodemailer from 'nodemailer'
import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config();

const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
}

const sendResetEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset OTP - Cafesphere",
        html: `<h2>Your OTP for password reset is: <b>${otp}</b></h2>
               <p>This OTP is valid for 10 minutes. Do not share it with anyone.</p>`,
    };

    await transporter.sendMail(mailOptions);
}

export {generateOTP, sendResetEmail}