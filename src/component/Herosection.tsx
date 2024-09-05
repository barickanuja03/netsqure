import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
function Herosection() {
  return (
    <>
      <div className="flex justify-center">
         <div className="lg:container">
              <div className='flex flex-row justify-between  mt-11'>
               <div className='texts w-full h-96 align-middle mt-32'>
                    <div>
                    <FaStarOfLife className='text-blue-800 text-2xl'/>
                    <div className=' heading text-base font-bold break-all '>Building Software, Fostering Communities
                        </div>
                        <div className='fpara text-5xl font-extrabold font-mono  mt-11'>Building  Scalable <br/>Digital Experience for<br /> Brands that Stands Out!
                        </div>
                        <p className='text-normal text-gray-400 pt-7 w-96'>
                            Transform your business with Netsqure. We are your trusted partner in navigating the digital landscape, offering expert guidance and exceptional services to help you succeed.
                        </p>
                        <div className='flex flex-row gap-x-6'>
                        <button className='text-base font-bold bg-blue-800 mt-6 uppercase '>free consultation</button>
                        </div>
                    </div>
               </div>
               <div>
                   <img src='https://netsqure.com/wp-content/uploads/2024/06/woman-with-tablet-sitting-on-chair-working-online3-WVXKH5Z-1.png'
                   className='w-full min-h-min object-inherit mt-11 bg-blue-800' />
               </div>
              </div>
         </div>
       </div>
    </>
  )
}

export default Herosection
