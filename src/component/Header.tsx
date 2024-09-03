import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function Header() {
  return (
    <div>
      <div className="flex justify-center">
       <div className="lg:container">
            <div className='flex flex-row justify-between mt-8'>
                <div className='logo'>
                   <img src='https://netsqure.com/wp-content/uploads/2024/06/netsqure-logo.svg' 
                   className='w-32 object-cover'/>
                </div>
                <div>
                    <ul className='flex flex-row justify-start gap-x-10 '>
                        <li className='font-bold'>Home</li>
                        <li className='text-gray-500 capitalized hover:text-blue-800'>About</li>
                        <li className='text-gray-500 capitalized hover:text-blue-800'>Services</li>
                        <li className='text-gray-500 capitalized hover:text-blue-800'>Product</li>
                        <li className='text-gray-500 capitalized hover:text-blue-800'>Blogs</li>
                        <li className='text-gray-500 capitalized hover:text-blue-800'>Contact</li>
                    </ul>
                </div>
                <div className='search flex flex-row gap-x-6'>
                    <div><IoSearchSharp  className='inline-block text-2xl'/></div>
                    <button className=' text-lg font-medium bg-black  hover:bg-blue-900'>Contact us</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
