"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from "../Images/Frame 1597881882.png";
import logo2 from "../Images/Frame 1597881882 (1).png";
import logo3 from "../Images/Frame 1597881883 (2).png";
import logo4 from "../Images/Frame 1597881883 (1).png";
import logo5 from "../Images/Book.png";
import logo6 from "../Images/Frame 1597881883 (3).png";
import logo7 from "../Images/Frame 1597881882 (2).png";
import logo8 from "../Images/Items.png";
import Link from 'next/link';

const cards = [
  { name: 'Milk', image: logo1 },
  { name: 'Milk', image: logo2 },
  { name: 'Milk', image: logo3 },
  { name: 'T Shirt', image: logo4 },
  { name: 'Dessert', image: logo5 },
  { name: 'Toy', image: logo6 },
  { name: 'Book', image: logo7 },
  { name: 'Dessert', image: logo6 },
  { name: 'Noodles', image: logo1 },
  { name: 'Milk', image: logo2 },
  { name: 'Noodles', image: logo3 },
];

const All = () => {
     const [items, setItems] = useState([]);
    
      useEffect(() => {
        fetch('/item.json')
          .then((response) => response.json())
          .then((data) => setItems(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    
      
    
    return (
        <>
        
  
        {/* Cards Section */}
        <div className="flex justify-center mx-32 my-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-2">
              {cards.map((card, index) => (
                <div key={index} className="shadow-xl border rounded-lg flex flex-col items-center justify-center p-4">
                  <Image src={card.image} alt={card.name} width={30} height={30} className="mb-2" />
                  
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Items Section */}
        < div className='container mx-auto my-10'>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {items.length > 0 ? (
      items.map((item) => (
        <div key={item.id} className="shadow-2xl rounded-xl">
          <figure>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
          </figure>
          <div className="">
            <div className='flex justify-between p-4 '>
            <div className=''>
            <h2 className="card-title">{item.name}</h2>
            <p className='text-sm'>{item.description}</p>
            </div>
           <div className=''>
           <p className="text-lg font-bold">${item.price}</p>
           </div>
            
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">Loading items...</p>
    )}
  </div>
  </div>
      </>
    );
  };

export default All;