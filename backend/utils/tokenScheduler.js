import cron from 'node-cron'
import bookingModel from '../models/bookingModel.js'
import sendTokenEmail from './sendTokenEmail.js'
import moment  from 'moment'

import crypto from 'crypto'

console.log("📅 Token scheduler loaded...");

cron.schedule("*/1 * * * *", async () => {
    console.log("Cron job running-----------------📅");
   try{
    const now = moment(); // current time
    const bookings = await bookingModel.find({ tokenSent: false }).populate("user");
    console.log(bookings);
    console.log("after booking");
    for (let booking of bookings) {
      const bookingDate = moment(booking.date).format("YYYY-MM-DD");
      const bookingTime = moment(`${bookingDate} ${booking.timeSlot}`, "YYYY-MM-DD HH:mm");
  
      const fourHoursBefore = bookingTime.clone().subtract(4, "hours");
  
      // Logs for debugging
      console.log("Now:", now.format("YYYY-MM-DD HH:mm"));
      console.log("Booking Time:", bookingTime.format("YYYY-MM-DD HH:mm"));
      console.log("4 Hours Before:", fourHoursBefore.format("YYYY-MM-DD HH:mm"));
  
      // If it's between (4 hours before) and the booking time
      if (now.isSameOrAfter(fourHoursBefore) && now.isBefore(bookingTime)) {
        const token = generateToken(); // 6-digit token or whatever you want
        // booking is confirmed
        if(booking.status != "Pending"){
        booking.token = token;
        booking.tokenSent = true;
        await booking.save();
  
        await sendTokenEmail(booking.email, booking.bookingName, token, bookingDate, booking.timeSlot);
        console.log(`Token sent to ${booking.user.email}: ${token}`);
        }
        else{
          console.log("Booking  not confirmed");
        }
      }
    }
   }
   catch(err){
    console.log(err.message);
   }
  });
  
  function generateToken() {
    return Math.floor(100000 + Math.random() * 900000); // 6-digit number
  }