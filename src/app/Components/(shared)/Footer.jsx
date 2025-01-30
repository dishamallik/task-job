import React from 'react';
import logo from "../../Images/Group (3).png"
import logo1 from "../../Images/AppStore.png"
import logo2 from "../../Images/Qrcode 1.png"
import logo3 from "../../Images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="footer bg-black text-white p-10">
  <aside>
     <div className="">
             <Image src={logo}  alt="Logo" className="w-40" />
           </div>
    <p className='my-2'>
    Ecommerce is a free UI Kit from Paperpillar<br/> that you can use for your personal or <br/>commercial project.
    </p>
    <div className='gap-3 flex'>
    <input
              type="text"
              placeholder="Type your email address"
              className="  px-3 py-3 rounded-3xl border-t border-l border-b bg-black focus:outline-none focus:ring-2 focus:ring-[#FF7D29]"
    />
<button className='btn bg-white rounded-3xl px-5'>Submit</button>
</div>
  </aside>
  
  <nav>
    <h6 className="footer-title">Account</h6>
    <a className="link link-hover">My Account</a>
    <a className="link link-hover">Login/Register</a>
    <a className="link link-hover">Cart</a>
    <a className="link link-hover">Wishlist</a>
    <a className="link link-hover">Shop</a>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Link</h6>
     <Link
                  href="/privacy " className="link link-hover">
    Privacy Policy
    </Link>
     <Link
                  href="/terms " className="link link-hover">
    Terms of Use
    </Link>
    
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Contact</a>
  </nav>
 
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">exclusive@gmail.com</a>
    <a className="link link-hover">+88015-88888-9999</a>
  
  </nav>
  <nav>
  <h6 className="footer-title">Download App</h6>
  <div className='flex gap-4'>
    <div>

<Image src={logo2}  alt="Logo" className="w-20" />

    </div>

  <div className=''>
  <Image src={logo1}  alt="Logo" className="w-20" />

<Image src={logo3}  alt="Logo" className="w-20 my-2" />

 </div>
  </div>

  </nav>
</footer>
    );
};

export default Footer;