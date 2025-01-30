import React from 'react';
import Link from 'next/link';
import image from "../Images/image (14).png";
import Image from 'next/image';

const Forget = () => {
    return (
        <div>
              <div>
                                <Image src={image} alt="img" />
                            </div>
            <div className="my-20 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot password</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div> 
        </div>
    );
};

export default Forget;