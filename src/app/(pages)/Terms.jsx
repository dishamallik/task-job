import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import image from "../Images/image (12).png"
import Image from 'next/image';
const Terms = () => {
    return (
        <>
        <div>
            <Image
               src={image} alt="img"
            />
        </div>
        <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <h1 className="text-4xl font-semibold mt-6 mb-4 flex items-center">Terms of Use.</h1>
        <p className="text-gray-700 mb-6">
          Welcome to [Your Company Name]. Before using our logo design service, please carefully review the following Terms and Conditions, as they govern the contractual relationship between you (the "Client") and [Your Company Name] (the "Service Provider"). By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.
        </p>
  
        <h2 className="text-3xl font-semibold mt-6 mb-4 flex items-center">
          <FaArrowRight className="mr-2" /> Scope of Service
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">[Your Company Name] will provide custom logo design services to the Client based on the specifications provided by the Client.</li>
          <li>The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee.</li>
        </ul>
  
        <h2 className="text-3xl font-semibold mt-6 mb-4 flex items-center">
          <FaArrowRight className="mr-2" /> Copyright and Ownership
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider.</li>
          <li className="mb-2">Final payment ensures that only the agreed design becomes the client's property. Any previous ideas/concepts remain the property of The Service Provider, unless any prior agreement has been made.</li>
          <li>The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials.</li>
        </ul>
      </div>
      </>
    );
};

export default Terms;