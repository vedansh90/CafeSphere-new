import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

const CafeDetails = () => {

  const navigate = useNavigate();

  const {id} = useParams();
  let [cafe, setCafe] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCafeDetails = async () => {
      try {
        const response = await axios.get(`http://192.168.1.2:4000/cafe/${id}`);
        setCafe(response.data);
      } catch (error) {
        console.error("Error fetching cafe details:", error);
      }
    };

    fetchCafeDetails();
  }, [id]);

  const menu = cafe?.menu || [];
  const drink = cafe?.drink || [];

  while (menu.length < 4) {
    menu.push({itemName: "Coming soon", price: "XXX"});
  }

  while(drink.length < 4){
    drink.push({itemName: "Coming soon", price: "XXX"});
  }

  return (
    <div>
      {/* image section */}
        <div style={{ backgroundImage: `url(${cafe?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-[45vh] bg-black text-white flex justify-between '>
            {/* left */}
            <div className='flex flex-col justify-end p-4 pl-6'>
              <span style={{backgroundColor: '#D97707'}} className='bg-white rounded-full text-white p-2 w-1/2 pl-3 text-sm font-medium'>Featured</span>
              <span className='text-3xl font-bold'>{cafe.name}</span>
              <span>(28 reviews)</span>
            </div>
            {/* right */}
            <div className='flex flex-col justify-end'>
                <div className=''>
                </div>
                 <button onClick={()=> navigate(`/cafe/${id}/book`)} style={{backgroundColor: '#FD8403'}} className='px-10 py-2 font-medium text-white rounded-2xl cursor-pointer text-xl m-4 bg-white'>Book Now</button>
            </div>
        </div>
        {/* main section */}
        <div style={{backgroundColor: '#F4E7DD'}} className='flex'>
          {/* left */}
           <div className='w-2/3 px-7'>
            {/* location, hours, etx */}
              <div className='flex justify-between py-3 gap-4'>
                <div className='flex gap-2 items-center border border-b-black p-2 bg-white rounded-2xl w-1/3'>
                <div style={{backgroundColor: '#FBBE24D9', color: '#FD8403'}} className=' w-7 h-7 rounded-full text-center text-sm pt-1'>
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className='text-sm'>Location</p>
                  <p className='text-sm font-medium'>{cafe.location}, {cafe.city}</p>
                </div>
                </div>
                <div className='flex gap-2 items-center border border-b-black p-2 bg-white rounded-2xl w-1/3'>
                <div style={{backgroundColor: '#FBBE24D9', color: '#FD8403'}} className=' w-7 h-7 rounded-full text-center text-sm pt-1'>
                <i class="fa-solid fa-clock"></i>
                </div>
                <div>
                  <p className='text-sm'>Hours</p>
                  <p className='text-sm font-medium'>8:00 AM - 8:00PM</p>
                </div>
                </div>
                <div className='flex gap-2 items-center border border-b-black p-2 bg-white rounded-2xl w-1/3'>
                <div style={{backgroundColor: '#FBBE24D9', color: '#FD8403'}} className=' w-7 h-7 rounded-full text-center text-sm pt-1'>
                <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className='text-sm'>Contact</p>
                  <p className='text-sm font-medium'>{cafe.contactNo}</p>
                </div>
                </div>
              </div>
              {/* about */}
              <div>
                <p className='text-3xl font-medium'>About</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsam voluptate aliquam doloribus vel non fuga corporis odio nisi mollitia? Ratione deleniti ea saepe. At quis rem praesentium laboriosam quod?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit esse sit, eligendi eum praesentium officia soluta nihil adipisci magnam non laborum corporis alias odio doloremque mollitia in illo et ad!
                </p>
                <div className='flex justify-evenly border border-b-black w-3/4 py-4 mt-3 rounded'>
                  <div className='text-center'>
                  <div style={{backgroundColor: '#E79C1A'}} className='w-16 h-16 rounded-full items-center flex justify-center'>
                  <i style={{fontSize: '30px', opacity: '0.7'}} class="fa-solid fa-wifi"></i>
                    </div>
                  <p className='text-sm'>Wifi</p>
                  </div>
                  <div className='text-center'>
                    <div  style={{backgroundColor: '#E79C1A'}} className='w-16 h-16 rounded-full items-center flex justify-center'>
                  <i style={{fontSize: '30px', opacity: '0.7'}} class="fa-solid fa-square-parking"></i>
                    </div>
                    <p className='text-sm'>Parking</p>
                  </div>
                  <div className='text-center'>
                    <div  style={{backgroundColor: '#E79C1A'}} className='w-16 h-16 rounded-full items-center flex justify-center'>
                  <i style={{fontSize: '30px', opacity: '0.7'}} class="fa-solid fa-music"></i>
                    </div>
                    <p className='text-sm'>Music</p>
                  </div>
                  <div className='text-center'>
                    <div  style={{backgroundColor: '#E79C1A'}} className='w-16 h-16 rounded-full items-center flex justify-center'>
                  <i style={{fontSize: '30px', opacity: '0.7'}} class="fa-solid fa-chair"></i>
                    </div>
                    <p className='text-sm'>Outdoor Seating</p>
                  </div>
                </div>
              </div>
              {/* slider */}
              <div style={{backgroundColor: '#E7E0E0'}} className='flex py-2 p-1 px-2 rounded my-2 justify-between gap-3'>
                <div className='w-1/4 bg-white p-1 rounded-xl text-center font-medium'>
                  <p className='cursor-pointer'>Menu</p>
                </div>
                <div className='w-1/4 bg-white p-1 rounded-xl text-center font-medium'>
                  <p className='cursor-pointer'>Photos</p>
                </div>
                <div className='w-1/4 bg-white p-1 rounded-xl text-center font-medium'>
                  <p className='cursor-pointer'>Reviews</p>
                </div>
              </div>
              {/* foods */}
              <div className='flex flex-col py-3'>
                <div className='flex gap-2 items-center py-1'>
                <i class="fa-solid fa-utensils"></i>
                  <p className='text-2xl font-medium'><i>Food</i></p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                {menu?.slice(0, 4).map((item, index) => (
                  <div className='flex justify-between border border-black rounded px-2 py-2'>
                    <div className='flex flex-col gap-2 w-3/4'>
                      <p className='font-medium'><i>{item.itemName}</i></p>
                      <p className='text-sm'>All kind of pizza’s with extra toppings</p>
                    </div>
                    <div>
                      <p style={{color: '#FD8403'}} className='font-medium text-sm'>Rs. {item.price}</p>
                    </div>
                  </div>
                   ))}
                </div>
              </div>
              {/* Drinks */}
              <div className='flex flex-col py-3'>
                <div className='flex gap-2 items-center py-1'>
                <i class="fa-solid fa-utensils"></i>
                  <p className='text-2xl font-medium'><i>Drinks</i></p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                {drink?.slice(0, 4).map((item, index) => (
                  <div className='flex justify-between border border-black rounded px-2 py-2'>
                    <div className='flex flex-col gap-2 w-3/4'>
                      <p className='font-medium'><i>{item.itemName}</i></p>
                      <p className='text-sm'>All kind of pizza’s with extra toppings</p>
                    </div>
                    <div>
                      <p style={{color: '#FD8403'}} className='font-medium text-sm'>Rs. {item.price}</p>
                    </div>
                  </div>
                   ))}
                </div>
              </div>
           </div>
           {/* right */}
           <div className='w-1/3 px-2 py-0.5'>
            {/* direction */}
            <div className='h-[20vh] border border-black rounded'>
              <div className='bg-black h-[30vh]'>
                <img className='w-full h-full' src={cafe.image} alt="" />
              </div>
              <div className='bg-white px-2 h-2/3 rounded'>
                <p className='font-medium'>{cafe.name}</p>
                <p className='text-sm'>{cafe.location}, {cafe.city}</p>
                <button className='w-full text-lg my-1 bg-black text-white font-medium rounded py-0.5 cursor-pointer'>Get Directions</button>
              </div>
            </div>

            {/* hours of operation */}
            <div className='flex flex-col justify-between p-4 text-sm h-[40vh] border border-black rounded mt-38'>
              <p className='text-2xl font-medium'>Hours of Operation</p>
              <div className='flex justify-between'>
                <p>Monday</p>
                <p>8:00AM - 8:00PM</p>
              </div>
              <div className='flex justify-between'>
              <p>Tuesday</p>
              <p>8:00AM - 8:00PM</p>
              </div>
              <div className='flex justify-between'>
              <p>Wednesday</p>
              <p>8:00AM - 8:00PM</p>
              </div>
              <div className='flex justify-between'>
              <p>Thrusday</p>
              <p>8:00AM - 8:00PM</p>
              </div>
              <div className='flex justify-between'>
              <p>Friday</p>
              <p>8:00AM - 8:00PM</p>
              </div>
              <div className='flex justify-between'>
              <p>Saturday</p>
              <p>8:00AM - 8:00PM</p>
              </div>
              <div className='flex justify-between'>
              <p>Sunday</p>
              <p>8:00AM - 8:00PM</p>
              </div>
            </div>

            {/* follow us on */}
            <div className='flex flex-col items-center py-2 my-2 rounded border border-black'>
              <p className='text-xl font-medium'>Follow us on</p>
              <div className='flex w-2/3 justify-evenly text-xl pt-2'>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-x-twitter"></i>
              </div>
            </div>

            {/* speacial offer */}
            <div style={{backgroundColor: '#FEFBEB'}} className='flex flex-col p-2 rounded border border-black my-2'>
              <p className='text-xl font-medium'>Special Offer</p>
              <p className='text-sm'>Join our loyalty program and get discount on your meals! Get membership now.</p>
              <button style={{backgroundColor: '#FD8403ED'}} className='w-full text-white font-medium my-1 rounded py-1'>Join Now</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default CafeDetails