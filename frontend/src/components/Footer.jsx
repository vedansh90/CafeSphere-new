import React from 'react'

const Footer = () => {
  return (
    <div className='' style={{backgroundColor: '#764b36'}}>
        <div className='flex'>
            <img className='w-1/3 h-1/3' src="https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmV8ZW58MHx8MHx8fDA%3D" alt="" />
            <img className='w-1/3 h-1/3' src="https://img.freepik.com/free-photo/close-up-barista-making-cappuccino-bartender-preparing-coffee-drink_1150-14699.jpg?ga=GA1.1.1351037294.1729501139" alt="" />
            <img className='w-1/3 h-1/3' src="https://images.unsplash.com/photo-1545731939-9c302d5d27ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZSUyMGNhZmV8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className='flex-col text-center' style={{color: "#ffd5ad"}}>
            <p className='mt-4 font-mono'>CAFESPHERE</p>
            <p className='mt-4 font-medium text-xl'>"Create Unforgettable Moments in the Perfect Café—Book Your Next Event Today!"</p>
            <p className='mt-2.5 font-medium text-xl'>Contact Us - cafesphere@gmail.com</p>
            <p className='mt-4 pb-5 text-sm'>© 2024 CafeSphere. All rights reserved. Terms of Service | Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer