import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  let [isstate, setIsState] = useState(false);
  let [username, setUsername] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsState(!!token); // Convert token to boolean (true if exists, false if not)
    const storedName = localStorage.getItem("userName");
        if (storedName) {
            setUsername(storedName);
        }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsState(false);
    window.location.reload();
  }

  return (
    <div className='flex justify-between p-4' style={{backgroundColor: "#f9f3e9", boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)"}}>
        <NavLink to={"/"}>
        <div style={{color: '#764B36'}} className='font-bold text-2xl cursor-pointer'>CafeSphere</div>
        </NavLink>
        <ul className='flex gap-10 mr-8'>
           {
            isstate ? <span style={{color: '#1F5CD5'}}>Welcome, <span className='font-medium'>{username.toUpperCase()}</span></span> : 
            ''
           }
            <NavLink to={"/add-cafe"}>
            <li style={{color: '#764B36'}}  className='cursor-pointer text-m font-medium'>Add Cafe</li>
            </NavLink>
            <NavLink to={"/about"}>
            <li style={{color: '#764B36'}} className='cursor-pointer text-m font-medium'>About Us</li>
            </NavLink>
            <NavLink to={"/contact"}>
            <li style={{color: '#764B36'}} className='cursor-pointer text-m font-medium'>Contact</li>
            </NavLink>
            {
              isstate ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-[30px] rounded-full' src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?uid=R188202810&ga=GA1.1.1482550023.1722440995&semt=ais_hybrid" alt="" />
              {/* <i className='' class="fa-solid fa-chevron-down"></i> */}
              <div className='absolute top-0 right-0 pt-14 hidden group-hover:block'>
                <div className='bg-gray-100 flex-col p-5 w-32 rounded-3xl'>
                <NavLink >My profile</NavLink><br />
                <span onClick={handleLogout}>Logout</span>
                </div>
              </div>
            </div> : <>
            <NavLink to={"/login"}>
            <li className='cursor-pointer text-m font-medium'>Register</li>
            </NavLink>
            <NavLink to={"/login"}>
            <li className='cursor-pointer text-m font-medium'>Sign in</li>
            </NavLink>
            </>
            }
            
        </ul>
    </div>
  )
}

export default Navbar