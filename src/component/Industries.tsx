import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
function Industries() {
  return (
    <>
       <div className="flex justify-center">
       <div className="lg:container">
        <div className='mt-36 flex flex-row justify-center align-middle w-full'>
          <div>
            <FaStarOfLife className='text-blue-800 text-2xl'/>
            <div className=' heading text-base font-bold break-all uppercase pb-5'> Industries
            </div>
             <h1 className='industry text-4xl font-bold capitalize'>Industries we explore</h1>
          </div>
        </div>
        </div>
        </div> 
        <div className='flex flex-row justify-around gap-x-5 mt-11 ml-4 mb-4'>
          <div className='hover-img'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.a0u_ZT1a_bnEIuD4WrrhiQHaE8&pid=Api&P=0&h=180' 
            className='w-80 h-96'/>
            <div className='content'>
            <h1 className='hover-heading text-3xl font-extrabold py-5'>
              Travel
            </h1>
            <p className='hover-paragraph w-full px-3 text-base py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa obcaecati iste velit corrupti non optio dignissimos. Quos omnis hic doloribus excepturi repellat! Perferendis, delectus sunt? Est beatae ut debitis?
              </p>
              </div>
          </div>
          <div className='hover-img'>
            <img src='https://netsqure.com/wp-content/uploads/2024/07/real-estate.jpg' 
            className='w-80 h-96'/>
            <div className='content'>
            <h1 className='hover-heading text-3xl font-extrabold py-5 object-cover'>
             Real Estate
            </h1>
            <p className='hover-paragraph w-full px-3 text-base py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa obcaecati iste velit corrupti non optio dignissimos. Quos omnis hic doloribus excepturi repellat! Perferendis, delectus sunt? Est beatae ut debitis?
              </p>
              </div>
          </div>
          <div className='hover-img'>
            <img src='https://netsqure.com/wp-content/uploads/2024/07/medical.jpg' 
            className='w-80 h-96 object-cover'/>
            <div className='content'>
            <h1 className='hover-heading text-3xl font-extrabold py-5'>
              Health Care
            </h1>
            <p className='hover-paragraph w-full px-3 text-base py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa obcaecati iste velit corrupti non optio dignissimos. Quos omnis hic doloribus excepturi repellat! Perferendis, delectus sunt? Est beatae ut debitis?
              </p>
              </div>
          </div>
          <div className='hover-img'>
            <img src='https://netsqure.com/wp-content/uploads/2024/07/2150951383-1.jpg' 
            className='w-80 h-96 object-cover'/>
            <div className='content'>
            <h1 className='hover-heading text-3xl font-extrabold py-5'>
             Event
            </h1>
            <p className='hover-paragraph w-full px-3 text-base py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa obcaecati iste velit corrupti non optio dignissimos. Quos omnis hic doloribus excepturi repellat! Perferendis, delectus sunt? Est beatae ut debitis?
              </p>
              </div>
          </div>
          <div className='hover-img'>
            <img src='https://netsqure.com/wp-content/uploads/2024/07/education.jpg' 
            className='w-80 h-96 object-cover'/>
            <div className='content'>
            <h1 className='hover-heading text-3xl font-extrabold py-5'>
             Education
            </h1>
            <p className='hover-paragraph w-full px-3 text-base py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa obcaecati iste velit corrupti non optio dignissimos. Quos omnis hic doloribus excepturi repellat! Perferendis, delectus sunt? Est beatae ut debitis?
              </p>
              </div>
          </div>
          </div>
    </>
  )
}

export default Industries
