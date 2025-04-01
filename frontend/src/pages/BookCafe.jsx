import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const BookCafe = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    console.log("Frontend")
    console.log(id)

    const [formData, setFormData] = useState({
        bookingName: "",
        email: "",
        contactNo: "",
        guests: 1,
        date: "",
        timeSlot : "",
        partyType : "",
        specialRequests: "",
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBooking = async (e) => {
        e.preventDefault();

        // if (!cafeId) {
        //     alert("Invalid Cafe ID!");
        //     return;
        // }


        try{
           const token = localStorage.getItem("token");

           if (!token) {
            alert("User not authenticated!");
            return;
            }

           const response = await axios.post(
            `http://localhost:4000/cafe/${id}/book`,
            formData,
            { headers: { Authorization: `Bearer ${token}` } }
           );

           if (response.data.success) {
            alert(response.data.message);
            navigate("/");  
            } 
            else {
                alert(response.data.message);
            }
        }
        catch(err){
            console.log("Booking error", err.message);
        }
    }

  return (
    <form onSubmit={handleBooking} style={{backgroundColor: '#F4E7DD'}} className='flex justify-center py-10'>
        <div className='w-3/4'>
            {/* top */}
            <div style={{backgroundColor: '#F0BB92'}} className='px-4 py-3 rounded-t text-white'>
                <p style={{color: '#764B36'}} className='font-medium text-2xl'>Book your cafe experience now </p>
                <p style={{color: '#764B36'}} className='text-sm'>Fill out the form below to reserve your spot. </p>
            </div>
            {/* bottom */}
            <div className='bg-gray-100 px-4 py-4 rounded-b'>
                {/* booking name, etc */}
                <div className='grid grid-cols-2 py-2'>
                    <div className='flex flex-col gap-1 py-1'>
                        <p className='font-medium'><i>Booking Name</i></p>
                        <input onChange={handleChange} name='bookingName' type="text" className='border border-black w-2/3 rounded px-1' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>E-mail</i></p>
                        <input onChange={handleChange} name='email' type="email" className='border border-black w-2/3 rounded px-1' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>Phone Number</i></p>
                        <input onChange={handleChange} name='contactNo' type="number" className='border border-black w-2/3 rounded px-1' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>Number of guests</i></p>
                        <input onChange={handleChange} name='guests' type="number" className='border border-black w-2/3 rounded px-1' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>Date</i></p>
                        <input onChange={handleChange} name='date' type="date" className='border border-black w-2/3 rounded px-1 py-3' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>Time Slot</i></p>
                        <input onChange={handleChange} name='timeSlot' type="time" className='border border-black w-2/3 rounded px-1 py-3' />
                    </div>
                </div>
                {/* party type. etc */}
                <div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium'><i>Party Type</i></p>
                        <input onChange={handleChange} type="text" className='border border-black w-2/4 py-1 px-1 rounded ' />
                    </div>
                    <div className='flex flex-col gap-2 py-2'>
                        <p className='font-medium'><i>Special Requests</i></p>
                        <div className='flex gap-4 justify-center'>
                        <i class="fa-solid fa-message"></i>
                        <textarea onChange={handleChange} placeholder='Any dietary requirements, seating preferences, or special arrangements...' className='border border-black w-full rounded px-2 py-1' rows={4} name="" id=""></textarea>
                        </div>
                    </div>
                    <p className='text-sm text-gray-500'>Let us know if you have any special requirements for your event.</p>
                    <button style={{backgroundColor: '#764B36'}} className='text-white py-2 px-2 flex justify-self-end font-medium rounded cursor-pointer'>Confirm Booking</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default BookCafe