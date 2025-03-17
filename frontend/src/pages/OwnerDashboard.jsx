import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OwnerDashboard = () => {

    let {id} = useParams()
    let [owner, setOwner] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/owner/get-cafeowner/${id}`)
        .then(response => {
            console.log(response.data)
            setOwner(response.data)
        })
        .catch(err => {
            console.log("Error Fetching data")
        })
    }, [])

  return (
    <div className='flex h-[100vh]'>
        {/* left side */}
        <div style={{backgroundColor: "#994812"}} className='w-1/4'>
            <div className='h-2/4 flex flex-col justify-between'>
            <div className='flex justify-start pt-2 ps-4 pb-2 shadow-[0_4px_10px_rgba(255,255,255,0.2)]'>
                <p className='font-medium text-3xl text-[#F5E1C8]'>CafeSphere</p>
            </div>

            <ul className='flex flex-col justify-evenly h-2/3'>
                <li className='ps-15 pt-2 text-gray-200/80 text-xl border-b border-b-gray-400 cursor-pointer'>Dashboard</li>
                <li className='ps-15 pt-2 text-gray-200/80 text-xl border-b border-b-gray-400 cursor-pointer'>Bookings</li>
                <li className='ps-15 pt-2 text-gray-200/80 text-xl border-b border-b-gray-400 cursor-pointer'>Menu items</li>
                <li className='ps-15 pt-2 text-gray-200/80 text-xl border-b border-b-gray-400 cursor-pointer'>Customer Details</li>
                <li className='ps-15 pt-2 text-gray-200/80 text-xl border-b border-b-gray-400 cursor-pointer'>Settings</li>
            </ul>
            </div>
        </div>

        {/* right side */}
        <div style={{backgroundColor: "#2D1E19"}} className='flex-col w-full text-white h-100vw'>
            <div className='flex justify-between pt-3 ps-4 pb-3 shadow-[0_4px_10px_rgba(255,255,255,0.2)]'>
                <p className='text-lg'>Welcome, <span className='text-amber-500'>{owner.name}</span></p>
                <div>
                    <p className='pr-10'>{owner.name}</p>
                </div>
            </div>
            <div className='flex flex-col h-2/3'>
                <div className='flex flex-col h-4/4 justify-evenly pb-6'>
                <div className='flex flex-col py-8 px-13 gap-1'>
                    <p className='text-4xl'>Dashboard</p>
                    <p className='text-gray-200/70'>3 December, 2024 | 2:55:33</p>
                </div>
                <div className='flex w-full justify-evenly'>
                    <div className='h-[23vh] w-[15vw] p-2 flex flex-col justify-between rounded-xl pt-3 ps-4 pb-4' style={{backgroundColor: "#4f352c"}}>
                        <p className='text-gray-200/90'>Total Bookings</p>
                        <p><span className='text-6xl text'>6</span> bookings</p>
                    </div>
                    <div className='h-[23vh] w-[15vw] p-2 flex flex-col justify-between rounded-xl pt-3 ps-4 pb-4' style={{backgroundColor: "#4f352c"}}>
                    <p className='text-gray-200/90'>Menu</p>
                    <p><span className='text-6xl text'>43</span> items</p>
                    </div>
                    <div className='h-[23vh] w-[15vw] p-2 flex flex-col justify-between rounded-xl pt-3 ps-4 pb-4' style={{backgroundColor: "#4f352c"}}>
                        <p className='text-gray-200/90'>Total Revenue (In Rs)</p>
                        <p className='text-6xl text'>6258</p>
                    </div>
                    <div className='h-[23vh] w-[15vw] p-2 flex flex-col justify-between rounded-xl pt-3 ps-4 pb-4' style={{backgroundColor: "#4f352c"}}>
                    <p className='text-gray-200/90'>Total Customers</p>
                    <p><span className='text-6xl text'>89</span> customers</p>
                    </div>
                </div>
                </div>
                <hr className='border-gray-200/50' />

                <div className='h-3/3 flex p-2 m-2 justify-evenly gap-3'>
                    <div style={{backgroundColor: "#4f352c"}} className='w-[37vw] h-[38vh] rounded-xl'></div>
                    <div style={{backgroundColor: "#4f352c"}} className='w-[37vw] h-[38vh] rounded-xl'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OwnerDashboard