"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from "../Images/image (14).png";


import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
      
    return (
        <>
            <div>
                <Image src={image} alt="img" />
            </div>
            <div className="my-20 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-4 relative">
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                      placeholder="Password"
                                    />
                                    <span
                                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                      onClick={() => setShowPassword(!showPassword)}
                                    >
                                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                    </span>
                                  </div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <Link href="/forget" className="text-sm text-black hover:text-orange-500">
                                Forgot Password
                            </Link>
                        </div>
                        <button
                            className="w-full bg-[#FF7D29] hover:bg-[#f17826] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-indigo-600 hover:text-orange-500">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
