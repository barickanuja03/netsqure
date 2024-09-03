import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
function Services() {
  return (
    <>
      <div className="flex justify-center">
        <div className="lg:container">
        <div className='flex justify-center mt-11'>
         <FaStarOfLife className='text-blue-800 text-2xl mr-28'/>
         </div>
         <div className=' heading text-base font-bold break-all text-center'>
            Our Services
         </div>
         <div className='flex justify-center align-middle flex-col'>
               <h1 className='py-7 text-4xl font-bold font-sans w-full flex justify-center'>On-Time, On-Scope, On-Point</h1>
               <p className='text-base text-gray-500 text-center lg:w-[60%] ml-60  py-2'>
                We understand the importance of deadlines and budgets. Netsqure is committed to delivering projects on time and within scope, ensuring your satisfaction with every outcome.
               </p>
               <div className='flex flex-row justify-center gap-x-2 w-full '>
               <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_1.png'
                 className=' w-10 aspect-square' />
                  <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_2.png'
                 className='w-10 aspect-square' />
                  <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_6.png'
                 className='w-10 aspect-square' />
                  <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_9.png'
                 className='w-10 aspect-square' />
               </div>
         </div>
         <div className='flex flex-row justify-center gap-x-7 mt-11'>
               <div className='w-full ml-2'>
                <div className='images'>
                 <img src='https://tse4.mm.bing.net/th?id=OIP.67YfkqyW6-_N9_WkIhNglgHaE8&pid=Api&P=0&h=180' className='service-img rounded-md w-full bg-blue-200' />
                 <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_1.png'
                 className='center-img w-14 aspect-square' />
                 </div>
                 <h3 className='uppercase text-start text-blue-800 py-2'>services 1</h3>
                  <h3 className='font-bold text-xl py-2'>SEO <br/> optimization</h3>
                 <p className='text-normal text-gray-400 py-2'>
                 Improve your website’s visibility on search engines and attract more organic traffic with our SEO services.
                 </p>
                 <span className='text-base text-blue-600 inline-block uppercase py-2'>learn more</span>
                <span><IoMdArrowDroprightCircle className='text-blue-600 inline-block ml-4 '/></span>
               </div>
               <div className='w-full ml-2'>
               <div className='images'>
                 <img src='https://tse1.mm.bing.net/th?id=OIP.rliFufBwlMSOO5teafKFRgHaE8&pid=Api&P=0&h=180' className='service-img rounded-md w-full' />
                 <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_2.png'
                 className='center-img w-14 aspect-square' />
                 </div>
                 <h3 className='uppercase text-start text-blue-800 py-2'>services 2</h3>
                 <h3 className='font-bold text-xl py-2'>WEB <br/> Development</h3>
                 <p className='text-normal text-gray-400 py-2'>
                    Develop responsive, user-friendly websites that reflect your brand and meet your business needs.
                 </p>
                 <span className='text-base text-blue-600 inline-block uppercase py-2'>learn more</span>
                <span><IoMdArrowDroprightCircle className='text-blue-600 inline-block ml-4 '/></span>
             
               </div>
               <div className='w-full ml-2'>
               <div className='images'>
                 <img src='https://tse3.mm.bing.net/th?id=OIP.2FuYaQHnVJ1d7v1RXxHJNgHaE8&pid=Api&P=0&h=180' className='service-img rounded-md w-full' />
                 <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_6.png'
                 className='center-img w-14 aspect-square' />
                 </div>
                 <h3 className='uppercase text-start text-blue-800 py-2'>services 3</h3>
                 <h3 className='font-bold text-xl py-2'>Mobile App <br/> Development</h3>
                 <p className='text-normal text-gray-400 pt-2 pb-8'>
                 Create engaging and functional mobile apps tailored to your business objectives.
                 </p>
                 <span className='text-base text-blue-600 inline-block uppercase py-2'>learn more</span>
                <span><IoMdArrowDroprightCircle className='text-blue-600 inline-block ml-4 '/></span>
             
               </div>
               <div className='w-full'>
               <div className='images'>
                 <img src='https://tse2.mm.bing.net/th?id=OIP.n7-6B9vAugjT7ZkKsixJMQHaE8&pid=Api&P=0&h=180' className='service-img rounded-md w-full' />
                 <img src='https://netsqure.com/wp-content/uploads/2024/06/icons_9.png'
                 className='center-img w-14 aspect-square' />
                 </div>
                 <h3 className='uppercase text-start text-blue-800 py-2'>services 4</h3>
                 <h3 className='font-bold text-xl py-2'>E-commerce <br/> Solution</h3>
                 <p className='text-normal text-gray-400 py-2'>
                 Develop and optimize e-commerce platforms to boost your online sales and customer satisfaction.
                 </p>
                 <span className='text-base text-blue-600 inline-block uppercase py-2'>learn more</span>
                <span><IoMdArrowDroprightCircle className='text-blue-600 inline-block ml-4 '/></span>
               </div>
         </div>
       </div>
      </div>
  </>
  )
}

export default Services
