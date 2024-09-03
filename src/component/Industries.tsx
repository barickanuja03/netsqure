import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
function Industries() {
  return (
    <>
       <div className="flex justify-center">
       <div className="lg:container">
        <div className='mt-36 flex flex-row justify-around align-middle max-h-max'>
          <div>
            <FaStarOfLife className='text-blue-800 text-2xl'/>
            <div className=' heading text-base font-bold break-all uppercase pb-5'> Industries
            </div>
             <h1 className='industry text-4xl font-bold capitalize'>Industries we explore</h1>
            </div>
        </div>
        </div>
        </div> 
    </>
  )
}

export default Industries
