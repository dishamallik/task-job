import React from 'react';
import dp from "../Images/Ellipse 5.png"
import Image from 'next/image';


import image from "../Images/image (15).png";
const Profile = () => {
    return (
        <>
                        <div>
                            <Image src={image} alt="img" />
                        </div>
        <div className="min-h-screen bg-gray-100 p-10">
            <div className=" ">
                {/* Navigation */}
                <div className='lg:flex  mx-auto gap-10 justify-center items-center'>
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-4 ">Navigation</h1>
                    <div className="bg-white px-14 py-10 rounded-lg shadow">
                        <ul className="space-y-4">
                            <li><a href="#" className="text-blue-900 hover:bg-blue-600  px-2 py-1 rounded">Dashboard</a></li>
                            <li><a href="#" className="text-blue-900 hover:bg-blue-600">Order History</a></li>
                            <li><a href="#" className="text-blue-900 hover:bg-blue-600">Shopping Cart</a></li>
                            <li><a href="#" className="text-blue-900 hover:bg-blue-600">Settings</a></li>
                            <li><a href="#" className="text-blue-900 hover:bg-blue-600">Log-out</a></li>
                        </ul>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="mb-8 ">
                    <div className="bg-white px-24 py-16 rounded-lg shadow items-center justify-center ">
                        <Image src={dp} alt="Profile" className="w-20 h-20 rounded-full mr-4 " />
                        <div>
                            <h2 className="text-xl font-bold mb-2">Dianne Russell</h2>
                            <div className="flex ">
                                <span>Customer</span>
                                <button className="text-blue-900 hover:bg-blue-600">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Billing Address */}
                <div className="mb-8">
                    <div className="bg-white p-12 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-2">BILLING ADDRESS</h2>
                        <div className="space-y-2">
                            <p><strong>Dianne Russell</strong></p>
                            <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                            <p>dainne.russell@gmail.com</p>
                            <p>(671) 555-0110</p>
                            <button className="text-blue-900 hover:bg-blue-600">Edit Address</button>
                        </div>
                    </div>
                </div>
                </div>
                {/* Order History */}
                <div className="mb-8 max-w-3xl mx-auto px-4 lg:ml-96">
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Order History</h2>
      <a href="#" className="text-blue-900 hover:bg-blue-600">View All</a>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left px-2 md:px-4 py-2 text-sm md:text-base">ORDER ID</th>
            <th className="text-left px-2 md:px-4 py-2 text-sm md:text-base">DATE</th>
            <th className="text-left px-2 md:px-4 py-2 text-sm md:text-base">TOTAL</th>
            <th className="text-left px-2 md:px-4 py-2 text-sm md:text-base">STATUS</th>
            <th className="text-left px-2 md:px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: "#738", date: "9 Sep, 2020", total: "$135.00 (5 Products)", status: "Processing" },
            { id: "#703", date: "24 May, 2020", total: "$25.00 (1 Product)", status: "On the way" },
            { id: "#130", date: "22 Oct, 2020", total: "$250.00 (4 Products)", status: "Completed" },
            { id: "#561", date: "1 Feb, 2020", total: "$35.00 (1 Product)", status: "Completed" },
            { id: "#539", date: "21 Sep, 2020", total: "$578.00 (13 Products)", status: "Cancelled" },
            { id: "#462", date: "22 Oct, 2020", total: "$345.00 (7 Products)", status: "Completed" }
          ].map((order, index) => (
            <tr key={index} className="border-b">
              <td className="px-2 md:px-4 py-2 text-sm md:text-base">{order.id}</td>
              <td className="px-2 md:px-4 py-2 text-sm md:text-base">{order.date}</td>
              <td className="px-2 md:px-4 py-2 text-sm md:text-base">{order.total}</td>
              <td className="px-2 md:px-4 py-2 text-sm md:text-base">{order.status}</td>
              <td className="px-2 md:px-4 py-2">
                <a href="#" className="text-blue-900 hover:bg-blue-600 text-sm md:text-base">View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

            </div>
        </div>
        </>
    );
};

export default Profile;