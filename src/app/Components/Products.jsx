import React from 'react';
import img1 from "../Images/image (6).png"
import img2 from "../Images/Group 405.png"
import img3 from "../Images/Group 405 (1).png"
import img4 from "../Images/Card.png"
import img5 from "../Images/Card (1).png"
import img6 from "../Images/Card (2).png"

import banner3 from "../Images/Shape (2).png"
import banner4 from "../Images/Shape (3).png"
import banner6 from "../Images/Shape (4).png"
import banner5 from "../Images/Shape (5).png"
import Image from 'next/image';
const Products = () => {
    return (
<>
        <div className='container my-20 mx-auto '>
            <h1 className='my-5 font-bold text-3xl'>Products</h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div className="card   ">
  <figure>
    <Image
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="font-bold">Skateboard Shoe</h2>
    <h2 className="text-sm text-gray-500">$125</h2>
    
  </div>
</div>
        <div className="card   ">
  <figure>
    <Image
      src={img2}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="font-bold">Skateboard Shoe</h2>
    <h2 className="text-sm text-gray-500">$125</h2>
    
  </div>
</div>
        <div className="card   ">
  <figure>
    <Image
      src={img3}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="font-bold">Skateboard Shoe</h2>
    <h2 className="text-sm text-gray-500">$125</h2>
    
  </div>
</div>
        <div className="card   ">
  <figure>
    <Image
      src={img4}
      alt="Shoes" />
  </figure>
  <div className="">
    
    
  </div>
</div>
        <div className="card   ">
  <figure>
    <Image
      src={img5}
      alt="Shoes" />
  </figure>
  <div className="">
   
    
  </div>
</div>
        <div className="card   ">
  <figure>
    <Image
      src={img6}
      alt="Shoes" />
  </figure>
  <div className="">
    
    
  </div>
</div>
        <div className="card   ">
  <figure>
    <Image
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="font-bold">Skateboard Shoe</h2>
    <h2 className="text-sm text-gray-500">$125</h2>
    
  </div>
</div>
        <div className="card   ">
  <figure>
    <Image
      src={img2}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="font-bold">Skateboard Shoe</h2>
    <h2 className="text-sm text-gray-500">$125</h2>
    
  </div>
</div>
        <div className="card   ">
  <figure>
    <Image
      src={img3}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="font-bold">Skateboard Shoe</h2>
    <h2 className="text-sm text-gray-500">$125</h2>
    
  </div>
</div>
        </div>
        </div>



<div className='  container mx-auto lg:px-28 md:px-10'>
  <p className='text-3xl py-2'>Customer experience is <br/>important to us</p>
  <p className='text-red-600'>Sed dictum ipsum elementum diam dapibus, ut sodales orci monte <br/>consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.</p>
</div>

 <div className='flex lg:gap-32 gap-5 w-4/5   lg:py-10 py-5  container mx-auto   justify-center'>
  <div className="">
    <div>
      <Image
        src={banner3}
        alt="logo"
        className='bg-green-600  p-2'
    
      />
    </div>
    <div className='text-sm'>
     
      <p>Every week new sales</p>
    </div>
  </div>
  <div className="">
    <div>
      <Image
        src={banner4}
        alt="logo"
        className='bg-green-600  p-2'
       
      />
    </div>
    <div className='text-sm'>
      
      <p>100% Free for all orders</p>
    </div>
  </div>
  <div className="">
    <div>
      <Image
        src={banner5}
        alt="logo"
        className='bg-green-600  p-2'
       
      />
    </div>
    <div className='text-sm'>
      
      <p>We care about your experiences</p>
    </div>
  </div>
  <div className="">
    <div>
      <Image
        src={banner6}
        alt="logo"
        className='bg-green-600  p-2'
       
      />
    </div>
    <div className='text-sm'>
      
      <p>100% Secure Payment Method</p>
    </div>
  </div>
</div>

</>
    );
};

export default Products;