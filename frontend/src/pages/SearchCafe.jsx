import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const SearchCafe = () => {

    const [cafes, setCafes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const searchQuery = searchParams.get('q') || '';

    useEffect(() => {
        const fetchCafes = async () => {
          setLoading(true);
          try {
            const res = await fetch(`http://192.168.1.2:4000/cafe/?search=${searchQuery}`);
            const data = await res.json();
            setCafes(data);
          } catch (err) {
            console.error("Search failed:", err);
          } finally {
            setLoading(false);
          }
        };
    
        if (searchQuery) fetchCafes();
      }, [searchQuery]);

      

  return (
    <div style={{backgroundColor: "#f9f3e9", "display": "grid",
        "grid-template-columns": "repeat(auto-fill, minmax(280px, 1fr))" ,
        "gap": "20px", 
        "padding": "20px"}} className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 p-3'>
        {
              cafes.map((cafe, index) => (
                <div onClick={()=> navigate(`/cafe/${cafe._id}`)} key={index} className='w-full bg-white p-3 rounded-xl flex-col px-5 cursor-pointer mt-20'>
                  <img className='h-[70%] w-full rounded' src={cafe.image} alt="" />
                  <p className='pt-2 font-medium text-xl text-zinc-800'>{cafe.name}</p>
                  <p className='text-gray-500'>{cafe.location}, {cafe.city}</p>
                </div>
              ))
        }
    </div>
  )
}

export default SearchCafe