import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { User, CalendarCheck, Heart, Settings, LogOut, Star, MapPin } from "lucide-react";

const Profileuser = () => {
    const { id } = useParams();
    const token = localStorage.getItem("token");

    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]); // State for API bookings
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSection, setActiveSection] = useState("profile"); // State to track active section

 
 
 
 
 
 
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://192.168.1.3:4000/user/profile/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data.user);
            } catch (error) {
                setError("Failed to fetch user data");
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };
    
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://192.168.1.3:4000/user/booked-cafes`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setBookings(response.data.bookings);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };
    
        if (token && id) {
            fetchUser();
            fetchBookings(); // Call fetchBookings here
        } else {
            console.log("No token found or invalid ID.");
            setLoading(false);
        }
    }, [id, token]);
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="flex" style={{ backgroundColor: "#F4E7DD" }}>
            {/* Left Sidebar */}
            <div className="w-1/4 px-2 py-4">
                <div className="bg-white min-h-[85vh] rounded-2xl px-4 py-2 flex flex-col">
                    <div className="flex flex-col gap-2 py-6">
                        <div className="flex justify-center">
                            <img
                                className="w-2/3 rounded-full"
                                src={user.image || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"}
                                alt="Profile"
                            />
                        </div>
                        <div className="flex flex-col items-center relative -top-6">
                            <p className="text-lg font-semibold truncate">{user.name}</p>
                            <p>Member since March 28</p>
                        </div>
                    </div>
                    <div className="w-full px-1">
                        <ul className="flex flex-col gap-2">
                            <li
                                style={{ backgroundColor: activeSection === "profile" ? "#F0BB92" : "transparent" }}
                                className="flex items-center gap-2 pl-4 py-1 rounded cursor-pointer"
                                onClick={() => setActiveSection("profile")}
                            >
                                <User size={18} /> Profile
                            </li>
                            <li
                                style={{ backgroundColor: activeSection === "bookings" ? "#F0BB92" : "transparent" }}
                                className="flex items-center gap-2 pl-4 py-1 rounded cursor-pointer"
                                onClick={() => setActiveSection("bookings")}
                            >
                                <CalendarCheck size={18} /> My Bookings
                            </li>
                            <li
                                style={{ backgroundColor: activeSection === "saved" ? "#F0BB92" : "transparent" }}
                                className="flex items-center gap-2 pl-4 py-1 rounded cursor-pointer"
                                onClick={() => setActiveSection("saved")}
                            >
                                <Heart size={18} /> Saved Cafes
                            </li>
                            <li className={`flex items-center gap-2 pl-4 py-1 rounded cursor-pointer ${activeSection === "settings" && "bg-[#F0BB92]"}`} onClick={() => setActiveSection("settings")}>
                                <Settings size={18} /> Settings
                            </li>
                             
                             
                            <li className="flex items-center gap-2 pl-4 py-1 rounded cursor-pointer">
                                <LogOut size={18} /> Sign out
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-3/4 flex flex-col py-4 px-2 gap-2">
                {activeSection === "profile" && (
                   
                   <div>
                   <p style={{ color: "#563C24" }} className="text-2xl font-semibold mt-4 mb-4">Profile</p>
                   <div className="flex flex-col py-4 px-2 gap-5 bg-white rounded">
                       <div className="flex w-full justify-between px-2">
                           <p style={{ color: "#563C24" }} className="text-xl font-medium">Personal Information</p>
                           <button style={{ backgroundColor: "#F4E7DD" }} className="px-4 py-1 rounded cursor-pointer">
                               Edit
                           </button>
                       </div>
                       <div className="flex flex-col gap-4 pl-12">
                           <div className="flex w-2/4 justify-between">
                               <div className="py-1 px-4 rounded w-[160px]">
                                   <p style={{ color: "#9948127D" }} className="text-lg">Full Name</p>
                                   <p className="font-medium truncate">{user.name}</p>
                               </div>
                               <div className="py-1 px-4 rounded w-[160px]">
                                   <p style={{ color: "#9948127D" }} className="text-lg">Email</p>
                                   <p className="font-medium truncate">{user.email}</p>
                               </div>
                           </div>
                           <div className="flex w-2/4 justify-between">
                               <div className="py-1 px-4 rounded w-[160px]">
                                   <p style={{ color: "#9948127D" }} className="text-lg">Phone</p>
                                   <p className="font-medium">+91 {user.contactNo}</p>
                               </div>
                               <div className="py-1 px-4 rounded w-[160px]">
                                   <p style={{ color: "#9948127D" }} className="text-lg">Address</p>
                                   <p className="font-medium truncate">{user.location}</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
                   
                   
                )}

                {activeSection === "bookings" && (
                                     <div>
                                     <h2 className="text-2xl font-semibold text-[#563C24] mb-4  mt-5">My Bookings</h2>
                                     <div className="bg-white p-6 rounded-xl shadow-lg w-full">
                                          
                                         <div className="flex justify-between items-center mb-4">
                                             <h3 className="text-2xl font-medium">Bookings</h3>
                                             <button className="bg-[#F4E7DD] px-4 py-2 rounded-lg text-sm">Find new cafés</button>
                                         </div>
                                         {bookings.map((booking) => (
                                             <div key={booking.id} className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
                                                 <div className="w-48 h-40 bg-gray-300 rounded-lg">
                                                 <img src="https://m.media-amazon.com/images/I/71PGOXjwL8L.jpg" alt="Cafe" className="w-48 h-40 rounded-lg" />
                                                 </div>
                                                 <div className="flex-1 ml-4">
                                                     <h4 className="text-lg font-semibold text-[#B35C34]">{booking.cafeName}</h4>
                                                     <p className="text-gray-600 text-sm">📅 {booking.date}</p>
                                                     <p className="text-gray-700 text-sm">Celebration: <span className="font-medium">{booking.celebration}</span></p>
                                                     <p className="text-gray-700 text-sm">Guests: <span className="font-medium">{booking.guests} people</span></p>
                                                     <p className="text-gray-700 text-sm">Amount: <span className="font-medium">{booking.amount}</span></p>
                                                       <div className="flex gap-2 mt-3">
                      <button className="px-4 py-1 border rounded-lg">View cafe</button>
                      {booking.status === "Upcoming" && (
                        <>
                          <button className="px-4 py-1 border rounded-lg">Modify</button>
                          <button className="px-4 py-1 border rounded-lg text-red-600 bg-red-100">Cancel</button>
                        </>
                      )}
                    </div>
                                                 </div>
                                                 <span className={`px-3 py-1 rounded-lg text-white text-xs font-medium ${booking.status === "Upcoming" ? "bg-green-500" : "bg-gray-500"}`}>{booking.status}</span>
                                             </div>
                                             
                                         ))}
                                     </div>
                                     </div>
                   
                   
                   
                )}

                {activeSection === "saved" && <CafeList />}
                {activeSection === "settings" && <AccountSettings />}
            </div>
        </div>
    );
};

// Cafe Card Component
const CafeCard = ({ name, location, rating }) => {
    return (
        <div className="border border-[#E6B99D] rounded-xl p-4 shadow-sm w-[280px]">
            <div className="relative w-full h-[180px] bg-gray-200 rounded-lg">
                <button className="absolute top-2 left-2 bg-gray-100 p-2 rounded-full shadow-md">
                    <Heart size={16} className="text-gray-500" />
                </button>
                <div className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs rounded-lg flex items-center gap-1">
                    <Star size={12} className="text-yellow-400" />
                    <span>{rating}</span>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#C07244]">{name}</h3>
                <p className="text-gray-600 flex items-center gap-1">
                    <MapPin size={14} /> {location}
                </p>
                <div className="flex justify-between mt-4">
                    <button className="px-4 py-2 border rounded-lg bg-[#F4E7DD]">View Details</button>
                    <button className="px-4 py-2 border rounded-lg bg-amber-900 text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

// Cafe List Component (Saved Cafes)
const CafeList = () => {
    const cafes = [
        { name: "The Cozy Bean", location: "Wright Town, Jabalpur", rating: 4.5 },
        { name: "Brew Haven", location: "Napier Town, Jabalpur", rating: 4.3 },
    ];

    return (
        <div className='xt-2xl font-semibold text-[#563C24] mb-4  mt-2'> 
              <h2 className="text-2xl  mb-4  mt-5 font-semibold italic ">Saved Cafes</h2>
             
        <div className="border border-[#E6B99D] p-6 rounded-xl bg-white">
            <div className='flex justify-between items-center mb-4'> 
        <h2 className="text-2xl  mb-4  mt-2 font-semibold italic "> Cafes</h2>
        <button className="bg-[#F4E7DD] px-4 py-2 rounded-lg ml-auto">Explore More Cafe</button>
        </div>
            <div className="flex gap-6">
                {cafes.map((cafe, index) => <CafeCard key={index} {...cafe} />)}
            </div>
        </div>
        </div>
        
    );
};
const AccountSettings = () => (
    <div >
      <h2 className='text-2xl font-semibold text-[#563C24] mb-4  mt-5'>Setting</h2> 
    <div className="bg-white p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-[#563C24]">Account Settings</h2>
        <div className="mt-4">
            <h3 className="font-semibold">Notification Preferences</h3>
            <div className="flex items-center justify-between  pb-2">
                <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive booking confirmations and updates</p>
                </div>
                <input type="checkbox" className="form-checkbox text-[#F0BB92]" defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2">
                <div>
                    <p className="font-medium">Promotional Emails</p>
                    <p className="text-sm text-gray-600">Special offers and discounts</p>
                </div>
                <input type="checkbox" className="form-checkbox text-[#F0BB92]" defaultChecked />
            </div>
        </div>
        <div className="mt-4 border-t pt-4">
            <h3 className="font-semibold">Password & Security</h3>
            <button className="mt-2 px-4 py-2 bg-[#F0BB92] text-white rounded">Change Password</button>
        </div>
        <div className="mt-4 border-t pt-4">
            <h3 className="font-semibold text-red-600">Danger Zone</h3>
            <p className="text-sm text-gray-600">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="mt-2 px-4 py-2 bg-[#F4E7DD] text-red-600 rounded">Delete Account</button>
        </div>
    </div>
    </div>
    );

export default Profileuser;
