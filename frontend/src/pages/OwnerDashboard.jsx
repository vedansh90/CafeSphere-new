import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RevenueChart from "../components/RevenueChart";

const OwnerDashboard = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let {id} = useParams();
    let [owner, setOwner] = useState({});
    let [totalGuests, setTotalGuests] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [revenueData, setRevenueData] = useState([]);
    
      useEffect(() => {
        setRevenueData([
            { "month": "Jan", "revenue": 5000 },
            { "month": "Feb", "revenue": 7000 },
            { "month": "Mar", "revenue": 6500 },
            { "month": "Apr", "revenue": 8000 },
            { "month": "May", "revenue": 9000 },
            { "month": "Jun", "revenue": 7500 }
          ])
      }, []);

    useEffect(() => {
        axios.get(`http://localhost:4000/owner/owner-dashboard/${id}`)
        .then(response => {
            console.log(response.data);
            console.log(response.data.bookings);
            console.log("done");
            setOwner(response.data);

            const total = response.data.bookings?.reduce((sum, booking) => sum + booking.guests, 0) || 0;
            setTotalGuests(total);
        })
        .catch(err => {
            console.log("Error Fetching data")
        })
    }, [id]);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    const isActive = (path) => location.pathname === path ? "text-white font-semibold" : "text-gray-200/80";

  return (
    <div className='flex h-[100vh]'>
        {/* left side */}
        <div style={{backgroundColor: "#994812"}} className='w-1/4'>
            <div className='h-2/4 flex flex-col justify-between'>
            <div className='flex justify-start pt-3 ps-4 pb-3 shadow-[0_4px_10px_rgba(255,255,255,0.2)]'>
                <p className='font-medium text-2xl text-[#F5E1C8]'>CafeSphere</p>
            </div>

            <ul className='flex flex-col justify-evenly h-2/3'>
                <li onClick={()=> navigate(`/owner-dashboard/${id}`)} className={`ps-15 pt-2 text-xl border-b border-white-800 cursor-pointer ${isActive(`/owner-dashboard/${id}`)}`}>Dashboard</li>
                <li onClick={()=> navigate(`/owner-dashboard/${id}/bookings`)} className={`ps-15 pt-2 text-xl border-b border-white-800 cursor-pointer ${isActive(`/owner-dashboard/${id}/bookings`)}`}>Bookings</li>
                <li className='ps-15 pt-2 text-gray-200/80 text-xl border-b border-b-gray-400 cursor-pointer'>Menu items</li>
                <li className='ps-15 pt-2 text-gray-200/80 text-xl border-b border-b-gray-400 cursor-pointer'>Customer Details</li>
                <li className='ps-15 pt-2 text-gray-200/80 text-xl border-b border-b-gray-400 cursor-pointer'>Settings</li>
            </ul>
            </div>
        </div>

        {/* right side */}
        <div style={{backgroundColor: "#2D1E19"}} className='flex-col w-full text-white h-100vw'>
            <div className='flex justify-between pt-3 ps-4 pb-3 shadow-[0_4px_10px_rgba(255,255,255,0.2)]'>
                <p className='text-lg'>Welcome, <span className='text-amber-500 text-2xl'>{owner.ownerName}</span></p>
                <div>
                    <p className='pr-10'>{owner.name}</p>
                </div>
            </div>
            <div className='flex flex-col h-2/3'>
                <div className='flex flex-col h-4/4 justify-evenly pb-6'>
                <div className='flex flex-col py-8 px-13 gap-1'>
                    <p className='text-4xl'>Dashboard</p>
                    <p className='text-gray-200/70'>
                        {currentTime.toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        })}{" "}
                        |{" "}
                        {currentTime.toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                        })}
                    </p>
                </div>
                <div className='flex w-full justify-evenly'>
                    <div className='h-[23vh] w-[15vw] p-2 flex flex-col justify-between rounded-xl pt-3 ps-4 pb-4' style={{backgroundColor: "#4f352c"}}>
                        <p className='text-gray-200/90'>Total Bookings</p>
                        <p><span className='text-6xl text'>{owner.bookings?.length || 0}</span> bookings</p>
                    </div>
                    <div className='h-[23vh] w-[15vw] p-2 flex flex-col justify-between rounded-xl pt-3 ps-4 pb-4' style={{backgroundColor: "#4f352c"}}>
                    <p className='text-gray-200/90'>Menu</p>
                    <p><span className='text-6xl text'>{owner.menu?.length || 0}</span> items</p>
                    </div>
                    <div className='h-[23vh] w-[15vw] p-2 flex flex-col justify-between rounded-xl pt-3 ps-4 pb-4' style={{backgroundColor: "#4f352c"}}>
                        <p className='text-gray-200/90'>Total Revenue (In Rs)</p>
                        <p className='text-6xl text'>6258</p>
                    </div>
                    <div className='h-[23vh] w-[15vw] p-2 flex flex-col justify-between rounded-xl pt-3 ps-4 pb-4' style={{backgroundColor: "#4f352c"}}>
                    <p className='text-gray-200/90'>Total Customers</p>
                    <p><span className='text-6xl text'>{totalGuests}</span> customers</p>
                    </div>
                </div>
                </div>
                <hr className='border-gray-200/50' />

                <div className='h-3/3 flex p-2 m-2 justify-evenly gap-3'>
                    <div style={{backgroundColor: "#4f352c"}} className='w-[37vw] h-[38vh] rounded-xl'></div>
                    <div style={{backgroundColor: "#4f352c"}} className='w-[37vw] h-[38vh] rounded-xl flex items-center'>
                    <RevenueChart data={revenueData} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OwnerDashboard