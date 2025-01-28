import React from 'react';
import banner1 from "../../Images/Coffee shop-amico 1.png"
import banner2 from "../../Images/Group 1000005937.png"
import banner3 from "../../Images/Vector (1).png"
import banner4 from "../../Images/Group 51.png"
import banner6 from "../../Images/Group (4).png"
import banner5 from "../../Images/24-hours.png"
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
const Banner = () => {
    return (
      <>
        <div className="hero  min-h-screen">
        <Image className='lg:max-w-sm mb-96 sm:hidden' src={banner2}
           alt='banner'></Image>
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <Image
            src={banner1}
            alt='banner'
            className="lg:max-w-lg " />
          <div>
            <h1 className="text-7xl font-bold">Good <span className='text-[#FF7D29]'>food</span>, great<br></br> memories</h1>
            <p className="py-6 text-xl">
            Enable diners to customize their<br></br> booking by requesting a specific table <br/>location or view.
            </p>
            <div className="relative w-full">
  <div className="flex w-full ">
    <button className="px-7 py-1 bg-[#00B047] text-white rounded-l-xl hover:bg-[#00B047] focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-600 border-y-2">
      Location
    </button>
    <input
      type="text"
      placeholder=""
      className="w-full px-2 py-2 rounded-r-xl border-t border-r border-b border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-14" 
    />

    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2  bg-[#00B047] rounded-full" /> 
  </div>
</div>

          </div>
        </div>
      </div>






      <div className='lg:flex flex-row   lg:gap-6 w-4/5 border-2 lg:py-5  shadow-lg container mx-auto   justify-center'>
  <div className="flex gap-5  py-2">
    <div>
      <Image
        src={banner3}
        alt="logo"
    
      />
    </div>
    <div className='text-sm'>
      <p>Discount</p>
      <p>Every week new sales</p>
    </div>
  </div>
  <div className="flex gap-4 py-2">
    <div>
      <Image
        src={banner4}
        alt="logo"
       
      />
    </div>
    <div className='text-sm'>
      <p>Free Delivery</p>
      <p>100% Free for all orders</p>
    </div>
  </div>
  <div className="flex gap-5 py-2">
    <div>
      <Image
        src={banner5}
        alt="logo"
       
      />
    </div>
    <div className='text-sm py-2'>
      <p>Great Support 24/7</p>
      <p>We care about your experiences</p>
    </div>
  </div>
  <div className="flex gap-5 ">
    <div>
      <Image
        src={banner6}
        alt="logo"
       
      />
    </div>
    <div className='text-sm'>
      <p>Secure Payment</p>
      <p>100% Secure Payment Method</p>
    </div>
  </div>
</div>

      </>
    );
};

export default Banner;