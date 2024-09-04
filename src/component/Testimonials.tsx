import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStarOfLife } from "react-icons/fa";
function Testimonials() {
  return (
    <div>
          <div className="flex justify-center mt-11 mb-11">
          <div className="lg:container bg-gray-200">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      > 
        <SwiperSlide>
        <div className='flex justify-center align-middle flex-col h-96 w-full mt-5'>
            <FaStarOfLife className='text-blue-800 text-2xl mr-28'/>
            <h1 className='heading text-base mt-11 pt-20 font-bold break-all text-center uppercase ml-5'>
             Why Choose Us
            </h1>
            <h1 className='text-5xl text-center font-bold break-all py-11 px-3'>Review From Clients</h1>
            <p className='text-center mb-11'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consectetur numquam <br />voluptate, reiciendis optio commodi quos! Velit aperiam, quo, ipsum quas quod <br />illo nostrum architecto repellendus veritatis, eaque itaque animi?
            </p>
            <div className="flex justify-center flex-col w-full">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">EMMA LUTRA</h3>
                    <p className="text-sm text-gray-600 text-center pb-11">CEO</p>
                </div>
               
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center flex-col w-full'>
            <h1 className='heading text-base font-bold break-all text-center uppercase ml-5'>
             Why Choose Us
            </h1>
            <h1 className='text-5xl text-center font-bold break-all py-6 px-3'>Review From Clients</h1>
            <p className='text-center mb-11'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consectetur numquam <br />voluptate, reiciendis optio commodi quos! Velit aperiam, quo, ipsum quas quod <br />illo nostrum architecto repellendus veritatis, eaque itaque animi?
            </p>
            <div className="flex justify-center flex-col w-full">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">EMMA LUTRA</h3>
                    <p className="text-sm text-gray-600 text-center pb-11">CEO</p>
                </div>
               
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center flex-col w-full'>
            <h1 className='heading text-base font-bold break-all text-center uppercase ml-5'>
             Why Choose Us
            </h1>
            <h1 className='text-5xl text-center font-bold break-all py-6 px-3'>Review From Clients</h1>
            <p className='text-center mb-11'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consectetur numquam <br />voluptate, reiciendis optio commodi quos! Velit aperiam, quo, ipsum quas quod <br />illo nostrum architecto repellendus veritatis, eaque itaque animi?
            </p>
            <div className="flex justify-center flex-col w-full">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">EMMA LUTRA</h3>
                    <p className="text-sm text-gray-600 text-center pb-11">CEO</p>
                </div>
               
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </div>
  )
}

export default Testimonials
