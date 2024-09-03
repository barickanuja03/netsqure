import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className='bg-black text-white'>
       <div className="flex justify-center">
          <div className="lg:container">
            <div className='flex flex-row justify-around pt-11 pb-11'>
              <div className=''>
                <div className='logo'>
                   <img src='https://netsqure.com/wp-content/uploads/2024/06/netsqure-white.svg' 
                   className='w-32 object-cover'/>
                
                 <p className='w-52 pt-5'>
                 Transform your business with Netsqure. We are your trusted partner in navigating the digital landscape, offering expert guidance and exceptional services to help you succeed.
                 </p>
                </div>
                </div>
              <div className=''>
                <h3 className='font-bold text-2xl pb-5'>Quick Links</h3>
                <ul>
                    <li className='capitalized hover:text-blue-800'>Home</li>
                    <li  className=' capitalized hover:text-blue-800'>About</li>
                    <li  className=' capitalized hover:text-blue-800'>Services</li>
                    <li  className=' capitalized hover:text-blue-800'>Products</li>
                    <li  className=' capitalized hover:text-blue-800'>Blogs</li>
                    <li  className=' capitalized hover:text-blue-800'>Contact</li>
                </ul>
              </div>
              <div className=''>
                <h3 className='font-bold text-2xl pb-5'>Support</h3>
                <ul>
                    <li className='capitalized hover:text-blue-800'>
                      Privacy Policy
                    </li>
                    <li className='capitalized hover:text-blue-800'>
                      Terms and conditions
                    </li>
                </ul>
              </div>
              <div>
                <h3 className='font-bold text-2xl pb-5'>
                    Follows us
                    </h3>
                    <div className='flex flex-row gap-x-3 text-2xl'>
                       <a href='#'><FaLinkedinIn className='hover:text-blue-800'/></a>
                       <a href='#'><FaTwitter className='hover:text-blue-800'/></a>
                       <a href='#'><FaInstagramSquare className='hover:text-blue-800' /></a>
                    </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Footer
