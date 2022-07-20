import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {BestBrands} from '../Slider/Info'

function BestBrand() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:8
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


    return (<><h1 className='mt-20 font-sans text-3xl font-semibold text-center'> بهترین برند ها</h1>

        <div className='  items-center mt-10  justify-center border-slate-900'>

             <Carousel responsive={responsive} className='items-center  justify-center ' >
               {         
                    BestBrands.map((item) => (
                        <div key={item.id} className=" rounded-lg mt-10    bg-white">
                            <img src={item.image}  className=''  />
                            </div>
                          

                    ))}

            </Carousel> 
 
        </div>
        </>
        
    )
}

export default BestBrand