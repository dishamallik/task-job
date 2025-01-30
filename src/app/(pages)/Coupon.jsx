import React from "react";
import logo from "../Images/Subtract.png";
import logo1 from "../Images/Vector 1.png";
import Image from "next/image";

export default function Coupon() {
  return ( 
    <div className="  my-20 ">
    <div className="flex justify-center items-center  shadow-4xl  relative">
    <div className="relative">
      <Image src={logo} alt="logo" className="w-[850px] " />
      
      {/* Text Container with Flex */}
      <div className="absolute top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 
                      flex flex-row items-center justify-between gap-6">
           <div>             
        <p className=" lg:text-4xl   lg:py-2 font-semi-bold text-[#00B047] ">
        Price
        
        </p>
        <p className=" lg:text-4xl  lg:py-2 font-bold text-[#FF7D29]">
    
        $10.99
        
        </p>
        </div>
        <Image src={logo1} alt="l"  className=" lg:w-[6px] w-[2px] shadow-2xl  "
          
        />
        <div>
        <p className=" lg:text-3xl text-xs  lg:py-2 font-bold ">
        Single Discount
        </p>
        <p className=" lg:text-2xl text-xs lg:py-2  font-semi-bold ">
        Customer takes 6 discount
        </p>
        </div>
      </div>
    </div>
 </div>




 <div className="flex justify-center items-center  shadow-4xl  relative">
    <div className="relative">
      <Image src={logo} alt="logo" className="w-[850px]" />
      
      {/* Text Container with Flex */}
      <div className="absolute top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 
                      flex flex-row items-center justify-between gap-6">
           <div>             
        <p className=" lg:text-4xl   lg:py-2 font-semi-bold text-[#00B047] ">
        Price
        
        </p>
        <p className=" lg:text-4xl  lg:py-2 font-bold text-[#FF7D29]">
    
        $10.99
        
        </p>
        </div>
        <Image src={logo1} alt="l"  className=" lg:w-[6px] w-[2px] shadow-2xl  "
          
        />
        <div>
        <p className=" lg:text-3xl text-xs  lg:py-2 font-bold ">
        Single Discount
        </p>
        <p className=" lg:text-2xl text-xs lg:py-2  font-semi-bold ">
        Customer takes 6 discount
        </p>
        </div>
      </div>
    </div>
 </div>

</div>
  );
}
