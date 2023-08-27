import React from 'react'

import { Data } from '../Data';
import Slider from "react-slick";

export default function CarsCollection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };


    return (
     
     
     <Slider {...settings}>
     {
                    Data.map((item)=>{
                        return (
                            <div className="lg:w-[20%] md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={item.img}
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    {item.title}
                                </h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                    {item.desc}
                                </h2>
                                <p className="mt-1">{item.price}</p>
                                <button className='bg-blue-500 px-5 py-2 my-1 text-white rounded-md '>Buy</button>
                            </div>
                        </div>
                        )
                    })
                   }
              
        </Slider>
   
        
    )
}
