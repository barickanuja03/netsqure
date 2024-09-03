import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
function Chooseus() {
  return (
    <>
    <div>
       <div className=' bg-black mt-11 '>
        <img src="https://montco.today/wp-content/uploads/sites/2/2016/12/photodune-3414091-group-of-business-people-working-at-office-m-1-1.jpg"
        className='chhoseus-img w-full max-h-max opacity-60 relative ' />  
      </div> 
      <div className="flex justify-center">
        <div className="lg:container">
           <div className='choose-us text-white'>
            <FaStarOfLife className='text-blue-800 text-2xl'/>
            <div className='heading text-base font-bold break-all uppercase'>
             Why Choose Us
            </div>
            <h2 className='text-4xl py-5 font-bold space-x-5 '>Delivering High-Quality Software Solutions</h2>
            <p className='w-96 pt-5 pb-7'>From development to delivery and maintenance, our comprehensive software services ensure your projects are completed to the highest standards, on time, and within scope.</p>
            <div>
              <div className='flex flex-row justify-between gap-x-7 mt-24'>
                 <div className='bg-black opacity-60 py-7 px-20 rounded-lg'>
                      <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_10.png'
                      className='w-14 aspect-square text-start' />
                    <h3 className='text-2xl font-extrabold pt-4 pb-3'>
                    Years Experience
                    </h3>
                    <p className='w-52 text-base font-semibold'>
                    With years of industry experience, Netsqure brings deep expertise and innovative solutions to every project.
                    </p>
                 </div>
                 <div className='bg-black opacity-60 py-7 px-20 rounded-lg'>
                      <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_10.png'
                      className='w-14 aspect-square text-start' />
                    <h3 className='text-2xl font-extrabold pt-4 pb-3'>
                    Years Experience
                    </h3>
                    <p className='w-52 text-base font-semibold'>
                    With years of industry experience, Netsqure brings deep expertise and innovative solutions to every project.
                    </p>
                 </div>
                 <div className='bg-black opacity-60 py-7 px-20 rounded-lg'>
                      <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_10.png'
                      className='w-14 aspect-square text-start' />
                    <h3 className='text-2xl font-extrabold pt-4 pb-3'>
                    Years Experience
                    </h3>
                    <p className='w-52 text-base font-semibold'>
                    With years of industry experience, Netsqure brings deep expertise and innovative solutions to every project.
                    </p>
                 </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      </div>
    </>
  )
}

export default Chooseus
