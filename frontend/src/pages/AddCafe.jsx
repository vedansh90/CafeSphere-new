import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddCafe = () => {

    let [state, setState] = useState("Signup");
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
        categories: [],
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try{
          const token = localStorage.getItem("token");
          if(!token){
            alert("Please login to add a cafe");
            return ;
          }

          const response = await axios.post('http://localhost:4000/owner/add-cafe', {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            ownerName: formData.ownerName,
            location: formData.location,
            city: formData.city,
            contactNo: formData.contactNo
          }, 
          {
            headers: {
                Authorization: `Bearer ${token}`, // Send JWT token for authentication
                "Content-Type": "application/json",
            },
        });

        if(response.data.success){
          console.log("Cafe Added Successfully")
          setFormData({
            name: "",
            email: "",
            password: "",
            location: "",
            city: "",
            contactNo: "",
            ownerName: ""
          })
          navigate("/");
        }
        else{
          console.log(response.data.message)
        }

        }catch(err){
          console.error("Error adding cafe:", error);
        }
    }

  return (
    <form onSubmit={onSubmitHandler} className=''>
    <div style={{backgroundColor: "#F4E7DD"}} className='w-full flex justify-center py-5 ' >
        <div style={{backgroundColor: "#D6CACB"}} className='bg-red w-[90vw] rounded-2xl px-4 py-2 pl-8 pt-8 flex'>
            {/* left section */}
            <div className='w-full flex flex-col gap-y-4 pl-4 pt-2'>
                <div className='  '>
                <p className='font-bold text-3xl'>Register your cafe now </p>
                <div className='flex gap-2 text-sm font-medium'><p>Already have an account? <span onClick={() => setState("Login")} className='cursor-pointer' style={{color: "#FF0000"}}>Login</span></p></div>
                </div>
                <p style={{color: "#C1272D"}} className='text-2xl font-medium'>Fill Every Seat – Let Party Lovers Find Your Cafe!</p>
                <div className='flex flex-col gap-y-1 w-full'>
                  <div className='flex gap-4'>
                    <div className='w-1/2'>
                    <p className='text-sm'>Cafe Name</p>
                    <input onChange={handleChange} name='name' className='bg-white w-full pl-2 rounded' type="text" placeholder='Cafe Name' />
                  </div>
                  <div className='w-1/2'>
                    <p className='text-sm'>Owner Name</p>
                    <input onChange={handleChange} name='ownerName' className='bg-white w-full pl-2 rounded' type="text" placeholder='Owner Name' />
                  </div>
                  </div>
                  <div className='flex flex-col gap-y-1'>
                    <p className='text-sm'>Cafe Bio</p>
                  {/* <input onChange={(e) => setBio(e.target.value)} value={bio} className='bg-white w-2/2 pl-2 rounded' type="text" placeholder='Enter Location' /> */}
                  <textarea placeholder='Bio' className='bg-white w-full pl-2 rounded' onChange={handleChange} name="bio" id=""></textarea>
                  </div>
                  <div className='flex flex-col gap-y-1'>
                  <p className='text-sm'>E-mail</p>
                  <input onChange={handleChange} name='email' className='bg-white w-2/2 pl-2 rounded' type="email" placeholder='Enter your Email' />
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex flex-col w-1/2'>
                    <p className='text-sm'>Password</p>
                    <input onChange={handleChange} name='password' className='bg-white w-full pl-2 rounded' type="password" placeholder='Password' />
                  </div>
                  <div className='w-1/2'>
                    <p className='text-sm'>Confirm password</p>
                    <input onChange={handleChange} name='confirmPassword' className='bg-white w-full pl-2 rounded' type="password" placeholder='Confirm Password' />
                  </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex flex-col w-1/2'>
                    <p className='text-sm'>Location</p>
                    <input onChange={handleChange} name='location' className='bg-white w-full pl-2 rounded' type="text" placeholder='Cafe Name' />
                  </div>
                  <div className='w-1/2'>
                    <p className='text-sm'>City</p>
                    <input onChange={handleChange} name='city' className='bg-white w-full pl-2 rounded' type="text" placeholder='Owner Name' />
                  </div>
                  </div>
                  <div className='flex flex-col gap-y-1'>
                  <p className='text-sm'>Add Categories</p>
                  <input onChange={handleChange} name='categories' className='bg-white w-2/2 pl-2 rounded' type="number" placeholder='Phone Number' />
                  </div>
                  <div className='flex flex-col gap-y-1'>
                  <p className='text-sm'>Cafe images</p>
                  {/* <input onChange={(e) => setContactNo(e.target.value)} value={contactNo} className='bg-white w-2/2 h-20 pl-2 rounded' type="number" placeholder='' /> */}
                  <textarea placeholder='Copy the url' className='bg-white w-2/2 pl-2 rounded' onChange={handleChange} name="image" id=""></textarea>
                  </div>
                  <div className='flex flex-col gap-y-1'>
                  <p className='text-sm'>Contact Number</p>
                  <input onChange={handleChange} name='contactNo' className='bg-white w-2/2 pl-2 rounded' type="number" placeholder='Phone Number' />
                  </div>
                  <button type='submit' className='bg-[#FD8403] cursor-pointer w-1/4 text-white font-medium text-lg my-5 p-2 rounded-2xl relative left-60'>Register</button>
                </div>
            </div>
            {/* right section */}
            <div className='w-2/3 flex justify-end'>
              <div style={{backgroundColor: "#4F352C"}} className='w-96 h-96 rounded-full'>
                  <div className=''>
                    <img className='w-2/3'  src="https://s3-alpha-sig.figma.com/img/8150/24c3/73adb3c93be9afb523fc7ab9c658788c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oQCngjTW1AFIe9yRaltdqcaHJqfUOhqgTE~18KtunfEonmqgKvXkHn3Tb7iMyBQwaeXxiONrC~XxmLN6I0RbCdsKXY5-3NelKzIFjxijrM1KfT4vcmGctMPgPTAcuZXkQIXzE4lc7yCAuNd89zI23g0rY0KCWuo0Wqvhj~Jvf48nPeYpq9T6VqQdbkH2gUV8gR8FXmkQUPkxFAlxiAud2OOHPlnKIp~V-F5ceuPfMntXAWcfxAWTxxTG8JPy8pxuiL-KfIgJBl6Akpcl4W16JFsVJeJsRDxyTXOxFUNXmaz0ZMNmYmQH84wwj8-plYEOxLHl-96ppJeJ1HFhVv7hsw__" alt="" />
                  </div>
              </div>
            </div>
        </div>
    </div>
</form>

  )
}

export default AddCafe