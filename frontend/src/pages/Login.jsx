import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let [state, setState] = useState('Signup');
  const navigate = useNavigate();

  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmPassword, setconfirmPassword] = useState();
  let [name, setName] = useState();
  let [location, setLocation] = useState();
  let [contactNo, setContactNo] = useState();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    try{
      if(state === 'Signup'){
        // for signup
        const response = await axios.post('http://localhost:4000/user/signup', {
          name,
          email,
          password,
          location,
          contactNo
        });
  
        if(response.data.success){
          localStorage.setItem('token', response.data.token);
          setState('Login') 
        }
        else {
          console.log(response.data.message);
          // alert(response.data.message); 
      }
      }
      else{
        // login 
        const response = await axios.post('http://localhost:4000/user/login', {
          email, 
          password
        });
  
        if(response.data.success){
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("userName", response.data.userName);
          console.log(response.data)
          console.log("User Logged In:", response.data.userName);
          window.location.href = "/"
        }
        else{
          console.log(response.data.message)
        }
  
      }
    }
    catch(err){
      console.log(err.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className=''>

        <div style={{backgroundColor: "#F4E7DD"}} className='w-full flex justify-center py-5 ' >
          {state === 'Signup' ? 
            <div style={{backgroundColor: "#D6CACB"}} className='w-[90vw] rounded-2xl px-4 py-2 flex'>
                {/* left section */}
                <div className='w-full flex flex-col gap-y-4 pl-4 pt-2'>
                    <div className=''>
                    <p className='font-bold text-3xl'>Sign up</p>
                    <div className='flex gap-2 text-sm font-medium'><p>Already have an account? <span onClick={() => setState("Login")} className='cursor-pointer' style={{color: "#FF0000"}}>Login</span></p></div>
                    </div>
                    <p style={{color: "#C1272D"}} className='text-3xl font-medium'>Try to plan a party?</p>
                    <div className='flex flex-col gap-y-1 w-full'>
                      <div className='flex flex-col gap-y-1'>
                        <p className='text-sm'>Full Name</p>
                        <div className='flex gap-3'>
                        <input onChange={(e) => setName(e.target.value)} value={name} className='bg-white w-2/2 pl-2 rounded' type="text" placeholder='Name' />
                      </div>
                      </div>
                      <div className='flex flex-col gap-y-1'>
                        <p className='text-sm'>Location</p>
                      <input onChange={(e) => setLocation(e.target.value)} value={location} className='bg-white w-2/2 pl-2 rounded' type="text" placeholder='Enter Location' />
                      </div>
                      <div className='flex flex-col gap-y-1'>
                      <p className='text-sm'>E-mail</p>
                      <input onChange={(e) => setEmail(e.target.value)} value={email} className='bg-white w-2/2 pl-2 rounded' type="email" placeholder='Enter your Email' />
                      </div>
                      <div className='flex flex-col gap-y-1'>
                      <p className='text-sm'>Password</p>
                      <input onChange={(e) => setPassword(e.target.value)} value={password} className='bg-white w-2/2 pl-2 rounded' type="password" placeholder='Enter Password' />
                      </div>
                      <div className='flex flex-col gap-y-1'>
                      <p className='text-sm'>Confirm Password</p>
                      <input onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} className='bg-white w-2/2 pl-2 rounded' type="password" placeholder='Enter Confirm Password'/>
                      </div>
                      <div className='flex flex-col gap-y-1'>
                      <p className='text-sm'>Contact Number</p>
                      <input onChange={(e) => setContactNo(e.target.value)} value={contactNo} className='bg-white w-2/2 pl-2 rounded' type="number" placeholder='Phone Number' />
                      </div> 
                      <button className='bg-[#FD8403] cursor-pointer w-1/4 text-white font-medium text-lg my-5 p-2 rounded-2xl relative left-60'>Signup</button>
                    </div>
                </div>
                {/* right section */}
                <div className='w-2/3'>
                  <div style={{backgroundColor: "#4F352C"}} className='w-96 h-96 rounded-full'>
                      <div className=''>
                        <img className='w-2/3'  src="https://s3-alpha-sig.figma.com/img/8150/24c3/73adb3c93be9afb523fc7ab9c658788c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oQCngjTW1AFIe9yRaltdqcaHJqfUOhqgTE~18KtunfEonmqgKvXkHn3Tb7iMyBQwaeXxiONrC~XxmLN6I0RbCdsKXY5-3NelKzIFjxijrM1KfT4vcmGctMPgPTAcuZXkQIXzE4lc7yCAuNd89zI23g0rY0KCWuo0Wqvhj~Jvf48nPeYpq9T6VqQdbkH2gUV8gR8FXmkQUPkxFAlxiAud2OOHPlnKIp~V-F5ceuPfMntXAWcfxAWTxxTG8JPy8pxuiL-KfIgJBl6Akpcl4W16JFsVJeJsRDxyTXOxFUNXmaz0ZMNmYmQH84wwj8-plYEOxLHl-96ppJeJ1HFhVv7hsw__" alt="" />
                      </div>
                  </div>
                </div>
            </div>
            : 
            <div className='w-[90vw] rounded-2xl px-4 py-2 flex'>
              {/* content */}
              <div className='w-2/4 bg-white px-8 py-8 flex flex-col items-center gap-9 justify-center rounded-l-2xl'>
                <p className='font-medium text-2xl'>Login to your account</p>
                <div className='flex flex-col gap-2 text-end w-2/3'>
                <div className='text-start'>
                  <p>Email</p>
                  <input className='px-2 py-2 w-full' style={{backgroundColor: "#D9D9D9"}} placeholder='Enter your E-mail' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='text-start'>
                  <p>Password</p>
                  <input className='px-2 py-2 w-full' style={{backgroundColor: "#D9D9D9"}} placeholder='Enter your password' type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <span onClick={()=> navigate("/login/forgot-password")} className='text-sm cursor-pointer'>Forgot Password?</span>
                </div>
                 <div className='flex flex-col gap-2'>
                  <button style={{backgroundColor: "#764B36"}} className='text-white py-2 rounded-xl text-xl cursor-pointer'>Log in</button>
                  <span className='text-sm'>Don't have an account? <span onClick={()=> {setState("Signup")}} style={{color: "#764B36"}} className='font-medium cursor-pointer'>Click here</span></span>
                 </div>
              </div>
              {/* image */}
              <div style={{backgroundColor: "#CDA58B"}} className='w-2/4 rounded-r-2xl'>
                 <img className='w-full max-h-[82vh] object-contain' src="./src/assets/login.png" alt="" />
              </div>
            </div>
            }
        </div>
    </form>
  )
}

export default Login