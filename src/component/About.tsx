import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
function About() {
  return (
    <div>
       <div className="flex justify-center">
          <div className="lg:container">
             <div className='flex flex-row justify-center gap-x-11 mt-11'>
                <div className='flex flex-row'>
                    <div>
                    <img src='https://tse2.mm.bing.net/th?id=OIP.n7-6B9vAugjT7ZkKsixJMQHaE8&pid=Api&P=0&h=180' alt='image'
                    className='image w-80 rounded-full'/>
                     <img src='https://tse4.mm.bing.net/th?id=OIP.DbX7yJSK0xlsBIRA-4esmwHaEW&pid=Api&P=0&h=180' alt='image'
                    className='image w-64 rounded-full object-cover mt-9 ml-11 black' />
                    </div>
                    <div>
                    <img src='https://languagetraining.com/wp-content/uploads/2017/11/Business-etiquette.jpg' alt='image'
                    className='image w-72 mt-20 ml-2 rounded-full'/>
                     <img src='https://bornrealist.com/wp-content/uploads/2017/09/business-discussion.jpg' alt='image'
                    className=' image w-80 rounded-full mt-10' />
                    </div>
                </div>
                <div className='ml-7'>
                    <FaStarOfLife className='text-blue-800 text-2xl'/>
                    <div className=' heading text-base font-bold break-all uppercase'> about netsqure
                    </div>
                    <div className='fpara text-5xl font-extrabold font-mono  mt-5'>
                    Edge Technologies at <br />Your Service
                    </div>   
                    <p className='text-normal text-gray-400 pt-7 w-96 transition   duration-500'>
                       Future with Netsqure’s cutting-edge technological solutions. We utilize the latest advancements to provide you with innovative, effective, and reliable services.
                    </p> 
                    <button className='bg-blue-800 mt-5'>Contact Us</button>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default About
