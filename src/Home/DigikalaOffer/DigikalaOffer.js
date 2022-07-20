import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./Style.css";
import { Grid, Pagination } from "swiper";
import {digikalaOffer,BestBrand1} from '../Slider/Info'
import BestBrand from './BestBrand'
export default function Digikalaoffer() {
  return (
    <>
    <h1 className="text-3xl font-semibold text-center font-sans mt-10 mb-10">پیشنهاد دیجی‌کالا</h1>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >

        {digikalaOffer.map((item)=>(<div key={item.id} className='border-red-500 flex-wrap' >
         <SwiperSlide className='flex flex-col '>
            <img src={item.image} alt={item.title} className='  w-24 h-24'/>
            <h1 className="font-sans text-2xl">{item.title}</h1>
           </SwiperSlide>
            </div>))}
       
      </Swiper>
      <BestBrand/>

<div className="flex flex-row gap-5 ml-5 mt-10 mr-5">
      {BestBrand1.map((item)=>(
        <div key={item.id} className="rounded-md">
          <img src={item.image} alt={item.id} className='rounded-2xl'/>
        </div>
      ))}
      </div>
    </>
  );
}
