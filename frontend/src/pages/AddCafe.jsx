import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCafe = () => {
    const [state, setState] = useState("Signup");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        ownerName: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: "",
        city: "",
        contactNo: "",
        bio: "",
        image: "",
        categories: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (state === "Signup") {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    alert("Please login to add a cafe");
                    return;
                }

                const response = await axios.post('http://localhost:4000/owner/add-cafe', formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (response.data.success) {
                    alert("Cafe Added Successfully");
                    setFormData({
                        name: "",
                        ownerName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        location: "",
                        city: "",
                        contactNo: "",
                        bio: "",
                        image: "",
                        categories: "",
                    });
                    navigate("/");
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("Error adding cafe:", error);
                alert("Failed to add cafe. Please try again later.");
            }
        } else {
            // Login functionality
            try {
                const response = await axios.post('http://localhost:4000/owner/login', {
                    email: formData.email,
                    password: formData.password,
                });

                if (response.data.success) {
                    localStorage.setItem("token", response.data.token);
                    alert("Login Successful");
                    navigate(`/owner-dashboard/${response.data.userId}`);
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("Login Error:", error);
                alert("Invalid email or password");
            }
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='w-full flex justify-center py-5 bg-[#F4E7DD]'>
            {state === "Signup" ? 
            <div className='bg-[#D6CACB] w-[90vw] rounded-2xl px-8 py-8 flex'>
                {/* Left Section */}
                <div className='w-full flex flex-col gap-y-4'>
                    <p className='font-bold text-3xl'>Register your cafe now</p>
                    <p className='text-sm font-medium'>
                        <span>Already have an account? </span>
                        <span onClick={() => setState("Login")} className='cursor-pointer text-red-600'>
                            Login
                        </span>
                    </p>
                    
                    
                            <input type='text' name='name' onChange={handleChange} placeholder='Cafe Name' className='input-field' required />
                            <input type='text' name='ownerName' onChange={handleChange} placeholder='Owner Name' className='input-field' required />
                            <textarea name='bio' onChange={handleChange} placeholder='Bio' className='input-field' required />
                            <input type='email' name='email' onChange={handleChange} placeholder='Email' className='input-field' required />
                            <input type='password' name='password' onChange={handleChange} placeholder='Password' className='input-field' required />
                            <input type='password' name='confirmPassword' onChange={handleChange} placeholder='Confirm Password' className='input-field' required />
                            <input type='text' name='location' onChange={handleChange} placeholder='Location' className='input-field' required />
                            <input type='text' name='city' onChange={handleChange} placeholder='City' className='input-field' required />
                            <input type='text' name='categories' onChange={handleChange} placeholder='Categories (comma separated)' className='input-field' required />
                            <textarea name='image' onChange={handleChange} placeholder='Cafe Image URL' className='input-field' required />
                            <input type='tel' name='contactNo' onChange={handleChange} placeholder='Contact Number' className='input-field' required />
                        
                    
                    <button type='submit' className='bg-[#FD8403] w-1/3 text-white font-medium text-lg my-5 p-2 rounded-2xl'>
                        Register
                    </button>
                </div>
            </div>
            :
            <div className='w-[90vw] rounded-2xl px-4 py-2 flex'>
              {/* content */}
              <div className='w-2/4 bg-white px-8 py-8 flex flex-col items-center gap-9 justify-center rounded-l-2xl'>
                <p className='font-medium text-2xl'>Login to your Cafe account</p>
                <div className='flex flex-col gap-2 text-end w-2/3'>
                <div className='text-start'>
                  <p>Email</p>
                  <input className='px-2 py-2 w-full' style={{backgroundColor: "#D9D9D9"}} placeholder='Enter your E-mail' type="email" onChange={handleChange} name='email' />
                </div>
                <div className='text-start'>
                  <p>Password</p>
                  <input className='px-2 py-2 w-full' style={{backgroundColor: "#D9D9D9"}} placeholder='Enter your password' type="password" onChange={handleChange} name="password" />
                </div>
                <span className='text-sm cursor-pointer'>Forgot Password?</span>
                </div>
                 <div className='flex flex-col gap-2'>
                  <button style={{backgroundColor: "#764B36"}} className='text-white py-2 rounded-xl text-xl'>Log in</button>
                  <span className='text-sm'>Don't have an account? <span onClick={()=> {setState("Signup")}} style={{color: "#764B36"}} className='font-medium cursor-pointer'>Click here</span></span>
                 </div>
              </div>
              {/* image */}
              <div style={{backgroundColor: "#CDA58B"}} className='w-2/4 rounded-r-2xl'>
                 <img className='w-full max-h-[82vh] object-contain' src="./src/assets/login.png" alt="" />
              </div>
            </div>
            }
        </form>
    );
};

export default AddCafe;
