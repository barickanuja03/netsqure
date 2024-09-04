import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Contact() {
  return (
    <>
       <div className="flex justify-center bg-">
       <div className="lg:container">
        <div className='mt-36 mb-48 flex flex-row justify-around align-middle max-h-max'>
          <div>
            <FaStarOfLife className='text-blue-800 text-2xl'/>
            <div className=' heading text-base font-bold break-all uppercase pb-5'> our contact
            </div>
            <h1 className='font-bold text-3xl capitalize break-all py-4'>Get in touch</h1>
            <p className='font-normal text-base w-96 py-5'>
                In a fast-paced world, Netsqure offers flexible solutions that evolve with your business. We’re here to adapt and innovate, ensuring your success in an ever-changing landscape.
            </p>
            <button className='capitalize text-2xl bg-blue-800 hover:bg-black my-5'>Free Consultation</button>
            <div className='mt-9 text-base '>Follow us :</div>
            <div className='flex flex-row gap-x-3 text-xl mb-8'>
                       <a href='#'><FaLinkedinIn className='hover:text-blue-800'/></a>
                       <a href='#'><FaTwitter className='hover:text-blue-800'/></a>
                       <a href='#'><FaInstagramSquare className='hover:text-blue-800' /></a>
                    </div>
          </div>
          <div>
             <form>
              <div className='flex flex-row justify-between gap-x-3'>
                <div>
                 <h4>First Name</h4>
                  <input type='text' required/>
                </div>
                <div>
               <h4>Last Name</h4>
                  <input type='text' required/>
                </div>
              </div>
              <div className='flex flex-row justify-between gap-x-3 mt-3'>
                <div>
                 <h4>Email</h4>
                  <input type='text' required/>
                </div>
                <div>
                <h4 className='ml-1'>Phone Number</h4>
                  <input type='text' required/>
                </div>
              </div>
              <div>
                <h4>Do You have a website?</h4>
                <input type='text' required/>
              </div>
              <div>
                <h4>What is your budget Range?</h4>
                <select className='w-full border-spacing-5'>
                  <option>-select</option>
                  <option>Below 35000INR</option>
                  <option>Above 35000INR</option>
                  <option>50000 to 100000</option>
                  <option>Above 100000</option>
                </select>
              </div>
              <div>
                <h4>Any Query</h4>
                <input type='text' />
              </div>
              <button className='bg-blue-800 my-5'>Submit</button>
             </form>
          </div>
        </div>
       </div>
       </div>
    </>
  )
}

export default Contact
