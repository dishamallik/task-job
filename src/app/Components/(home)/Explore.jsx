"use client"

import React, { useState, useEffect } from 'react';
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { FaGreaterThan } from 'react-icons/fa';
import Link from 'next/link'; 

const Explore = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('/api/restaurants')
            .then((response) => response.json())
            .then((data) => setRestaurants(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);  
    const firstThreeRestaurants = restaurants.slice(0, 3);

    return (
        <div className="container my-20 mx-auto ">
           <div className='flex justify-between' >
           <h1 className="text-3xl font-bold mb-5">Explore Restaurants</h1>
           <div className='flex gap-2'>
               
               <Link href="/restaurants" passHref>
                   <h1 className='text-2xl'>See all</h1>
               </Link>
               <h1 className='py-2'><FaGreaterThan /></h1>
           </div>
           </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {firstThreeRestaurants.map((restaurant) => (
                    <div key={restaurant.id} className="">
                       <div className=" card border-2 border-gray-400">
  <figure className="px-5 pt-5">
    <img
      src={restaurant.image}
      width={500}
      height={500}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="mx-5 ">
   <div className='flex justify-between '>
    <p className='text-2xl font-bold py-2'>{restaurant.name}</p>
    <div className='flex gap-2 text-xl py-2'>
        <p className='text-yellow-300 py-1 '><FaStar /></p>
    <p>({restaurant.rating})</p>
    </div>
   </div>
     <div className='flex gap-2 py-2'>
        <p><FiMapPin/>  </p>
   <p>{restaurant.location}</p>
   </div>
   <p>
  {restaurant.description.length > 100
    ? (
        <>
          {restaurant.description.slice(0, 100)}  
          <span className="font-bold text-gray-700"> Read more.....</span>
        </>
      )
    : restaurant.description}
</p>

<Link href={`/details/${restaurant.id}`}>
                          <button className="btn lg:px-40 px-28 m-1 bg-[#00B047] text-lg">Visit</button>
                          </Link>
  </div>
</div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Explore;
