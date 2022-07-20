import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Amazing_offer} from '../Slider/Info'

function Card() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };


    return (<><h1 className='mt-20 font-sans text-3xl font-semibold text-center'>پیشنهاد شگفت انگیز</h1>

        <div className=' h-80 items-center mt-10  justify-center bg-red-600 '>

             <Carousel responsive={responsive} className='items-center  justify-center ' >
               {         
                    Amazing_offer.map((item) => (
                        <div key={item.id} className=" rounded-lg mt-10  w-52 h-60 bg-white">
                            <img src={item.image}  className='w-52 h-44'  />
                       <div className='flex flex-row items-center justify-evenly' >
                            <h5 className=''>تومان {item.price} </h5>
                            <h5 className='bg-red-900 rounded-md text-white'>{item.offer} %</h5>
                            </div>
                          
                        </div>

                    ))}

            </Carousel> 
 
        </div>
        </>
        
    )
}

export default Card