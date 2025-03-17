import React from 'react'

const BookCafe = () => {
  return (
    <form style={{backgroundColor: '#F4E7DD'}} className='flex justify-center py-10'>
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
                        <input type="text" className='border border-black w-2/3 rounded px-1' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>E-mail</i></p>
                        <input type="email" className='border border-black w-2/3 rounded px-1' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>Phone Number</i></p>
                        <input type="number" className='border border-black w-2/3 rounded px-1' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>Number of guests</i></p>
                        <input type="number" className='border border-black w-2/3 rounded px-1' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>Date</i></p>
                        <input type="date" className='border border-black w-2/3 rounded px-1 py-3' />
                    </div>
                    <div className='flex flex-col gap-1 py-1'>
                    <p className='font-medium'><i>Time Slot</i></p>
                        <input type="time" className='border border-black w-2/3 rounded px-1 py-3' />
                    </div>
                </div>
                {/* party type. etc */}
                <div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium'><i>Party Type</i></p>
                        <input type="text" className='border border-black w-2/4 py-1 px-1 rounded ' />
                    </div>
                    <div className='flex flex-col gap-2 py-2'>
                        <p className='font-medium'><i>Special Requests</i></p>
                        <div className='flex gap-4 justify-center'>
                        <i class="fa-solid fa-message"></i>
                        <textarea placeholder='Any dietary requirements, seating preferences, or special arrangements...' className='border border-black w-full rounded px-2 py-1' rows={4} name="" id=""></textarea>
                        </div>
                    </div>
                    <p className='text-sm text-gray-500'>Let us know if you have any special requirements for your event.</p>
                    <button style={{backgroundColor: '#764B36'}} className='text-white py-2 px-2 flex justify-self-end font-medium rounded'>Confirm Booking</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default BookCafe