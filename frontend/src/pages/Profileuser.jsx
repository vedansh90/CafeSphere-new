import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Profileuser = () => {

    const {id} = useParams();

    useEffect(()=> {

        const fetchUser = async () => {
            const response = axios.get(`http://localhost:4000/user/profile${id}`);
            console.log(response.data)
        }
    })

  return (
    <div className='flex' style={{backgroundColor: "#F4E7DD"}}>
        {/* left */}
        <div className='w-1/4 px-2 py-4'>
            <div className='bg-white min-h-[85vh] rounded-2xl px-4 py-2 flex flex-col'>
                {/* profile photo */}
                <div className='flex flex-col gap-2 py-6'>
                    <div className='flex justify-center'>
                        <img className='w-2/3' src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1743453051~exp=1743456651~hmac=3b9bcae9dacd79256bdfb1f431be87fc3b7cecfa1ac9b7b9438773935008e1be&w=900" alt="" />
                    </div>
                     <div className='flex flex-col items-center relative -top-6'>
                     <p className='text-lg font-semibold truncate'>jdbjede</p>
                     <p className=''>Member since march 28</p>
                     </div>
                </div>
                {/* sidebar */}
                <div className='w-full px-1'>
                    <ul className='flex flex-col gap-2'>
                        <li style={{backgroundColor:"#754F32"}} className='text-white pl-4 py-1 rounded'>Profile</li>
                        <li className='pl-4 py-1 rounded'>My Bookings</li>
                        <li className='pl-4 py-1 rounded'>Saved Cafe's</li>
                        <li className='pl-4 py-1 rounded'>Settings</li>
                        <li className='pl-4 py-1 rounded'>Sign out</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* right */}
        <div className='w-3/4  flex flex-col py-4 px-2 gap-2'>
            <p style={{color: "#563C24"}} className='text-2xl font-semibold'>Profile</p>
            <div className='flex flex-col py-4 px-2 gap-5 bg-white rounded'>
                <div className='flex w-full justify-between px-2'>
                    <p style={{color: "#563C24"}} className='text-xl font-medium'>Personal Information</p>
                    <button style={{backgroundColor:"#F4E7DD"}} className='px-4 py-1 rounded cursor-pointer'>Edit</button>
                </div>
                <div className='flex flex-col gap-4 pl-12'>
                <div className='flex w-2/4 justify-between'>
                    <div className='py-1 px-4 rounded w-[160px]'>
                        <p style={{color: "#9948127D"}} className='text-lg'>Full Name</p>
                        <p className='font-medium truncate'>John doe</p>
                    </div>
                    <div className='py-1 px-4 rounded w-[160px]'>
                        <p style={{color: "#9948127D"}} className='text-lg'>Email</p>
                        <p className='font-medium truncate'>john@gmail.com</p>
                    </div>
                </div>
                <div className='flex w-2/4 justify-between'>
                    <div className='py-1 px-4 rounded w-[160px]'>
                        <p style={{color: "#9948127D"}} className='text-lg'>Phone</p>
                        <p className='font-medium'>+91 7878980222</p>
                    </div>
                    <div className='py-1 px-4 rounded w-[160px]'>
                        <p style={{color: "#9948127D"}} className='text-lg'>Address</p>
                        <p className='font-medium truncate'>Uday chowk, Mandla</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profileuser