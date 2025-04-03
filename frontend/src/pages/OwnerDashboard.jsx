 import { useState, useEffect } from "react";
 import {  useParams } from 'react-router-dom'

const Dashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [activeSection, setActiveSection] = useState("Bookings"); // State to track active section
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    };
    updateDateTime();
    
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetch(`http://192.168.1.3:4000/owner/owner-dashboard/${id}`)
      .then((response) => {response.json()})
      
      .then((data) => {
        setBookings(data.bookings || []);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
      
  }, []);

   
  const stats = [
    { title: "Total Bookings", value: "123", subtitle: "All-time booking count", icon: "📅" },
    { title: "This Month", value: "25", subtitle: "Bookings this month", icon: "📅" },
    { title: "Revenue", value: "$5280", subtitle: "From bookings and events", icon: "🔒" },
    { title: "Average party size", value: "8.3", subtitle: "Guests per booking", icon: "👥" },
  ];

  
  
  
  
  

  const reviews = [
    {
      id: 1,
      name: "Roy Keene",
      rating: 4.2,
      review: "I enjoyed the place as well as the environment. The staff was amazing and also took care of our orders.",
    },
    {
      id: 2,
      name: "Samuel Eto",
      rating: 4.5,
      review: "Great ambiance! Will visit again for sure.",
    },
    {
      id: 3,
      name: "Wayne Rooney",
      rating: 3.8,
      review: "The food was good, but the service could be improved.",
    },  
  ];

  return (
    <div className="bg-[#EDE0D4] min-h-screen">
      {/* Navbar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-[#5A3E2B]">CafeSphere</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 text-lg">🔔</button>
          <button className="bg-[#B03030] text-white px-4 py-2 rounded">Log out</button>
        </div>
      </div>

      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-[#5A3E2B]">The Cozy Bean</h1>
        <h6 className="text-gray-600">Owner Dashboard</h6>
        <p className="text-sm text-gray-500">{currentDateTime}</p>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-lg">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-[#5A3E2B]">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-[#5A3E2B]">{stat.title}</h3>
              <span className="text-lg">{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold text-[#5A3E2B] mt-2">{stat.value}</p>
            <p className="text-xs text-[#5A3E2B]">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-[#5A3E2B] my-6 w-full" />

      {/* Dashboard Navigation */}
      <div className="flex max-w-7xl mx-auto space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeSection === "Bookings" ? "bg-[#D2B48C] text-white" : "bg-[#F5EDE6] text-gray-700"}`}
          onClick={() => setActiveSection("Bookings")}
        >
          Bookings
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === "Menu" ? "bg-[#D2B48C] text-white" : "bg-[#F5EDE6] text-gray-700"}`}
          onClick={() => setActiveSection("Menu")}
        >
          Menu
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === "Reviews" ? "bg-[#D2B48C] text-white" : "bg-[#F5EDE6] text-gray-700"}`}
          onClick={() => setActiveSection("Reviews")}
        >
          Reviews
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === "Settings" ? "bg-[#D2B48C] text-white" : "bg-[#F5EDE6] text-gray-700"}`}
          onClick={() => setActiveSection("Settings")}
        >
          Settings
        </button>
      </div>

      {/* Conditional Sections */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {activeSection === "Bookings" && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-[#5A3E2B]">Recent Bookings</h2>
            <div className="space-y-4">
              {bookings.map((booking, index) => (
                <div key={index} className="p-4 border border-[#5A3E2B] shadow rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{booking.name}</h3>
                      <p className="text-sm text-gray-600">{booking.date}</p>
                      <p className="text-sm">Occasion: <strong>{booking.occasion}</strong></p>
                      <p className="text-sm">Guests: <strong>{booking.guests} people</strong></p>
                      <p className="text-sm">Table: <strong>{booking.table}</strong></p>
                    </div>
                    <div>
                      {booking.status === "Pending" && (
                        <span className="text-yellow-600 px-2 py-1 rounded bg-yellow-100">Pending</span>
                      )}
                      {booking.status === "Confirmed" && (
                        <span className="text-green-600 px-2 py-1 rounded bg-green-100">Confirmed</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
   {booking.status === "Pending" && (
     <>
       <button className="bg-green-500 text-white px-4 py-2 rounded">Confirm</button>
       <button className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
     </>
   )}
   <button className="bg-gray-500 text-white px-4 py-2 rounded">Message</button>
   <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
 </div>
                </div>
                
              ))}
            </div>
          </>
        )}

        {activeSection === "Reviews" && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-[#5A3E2B]">Customer Reviews</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="p-4 border border-[#5A3E2B] shadow rounded-lg">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-yellow-500">⭐ {review.rating}</p>
                  <p className="text-gray-600 mt-1">{review.review}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
