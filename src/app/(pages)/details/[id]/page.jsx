"use client";

import Item from "@/app/Components/Item";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

export default function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetch("/api/restaurants")

        .then((response) => response.json())
        .then((data) => {
          const item = data.find((item) => item.id === parseInt(id));
          setDetails(item);
        });
    }
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="p-6 max-w-4xl mx-auto">
      <div className="relative">
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#00B047] text-white p-2  shadow-md">
          <IoIosArrowBack size={24} />
        </button>
        <img
          src={details.image}
          alt={details.name}
          className="w-full h-96 object-cover rounded-lg border-4 border-[#00B047]"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#00B047]  p-2 text-white shadow-md">
          <IoIosArrowForward size={24} />
        </button>
      </div>
      <h1 className="text-3xl font-bold  ">{details.name}</h1>
      <hr className="my-4" />
      <div className="flex">
  <div className="flex-1">
    <p >{details.location}</p>
    <div className="flex text-2xl my-2">
    <p className="text-[#FF7D29]"><TiStarFullOutline /></p>
    <p className="text-[#FF7D29]"><TiStarFullOutline /></p>
    <p className="text-[#FF7D29]"><TiStarFullOutline /></p>
    <p className="text-[#FF7D29]"><TiStarFullOutline /></p>
    <p className="text-[#FF7D29]"><TiStarHalfOutline /></p>
    <p>({details.rating})</p>
    </div>
  </div>
  <div className="flex-1">
    <p>{details.description}</p>
  </div>
</div>
    </div>



<Item/>
    </>
  );
}
