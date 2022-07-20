import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from "react-router-dom"

function HomeSlider() {
    const content = [
        {
            image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/cf9e20e383c5a6d20def20cc3f41b86f4fd79245_1658254008.gif",
            index: 1
        },
        {
           
            image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/cba36ac7b798f610ce3c3ec774a82b36a516eabf_1658037411.jpg?x-oss-process=image/quality,q_95",
            index: 2
        },
        {
            
            image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/0eb1b134bbdb7029f1203f8f23413c50aced776b_1657028115.jpg?x-oss-process=image/quality,q_95",
            index: 3,
            // page:
         
        },
        {
            
            image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/4f9b513e282c60c980b0835141ac3148fca491b6_1656271447.jpg?x-oss-process=image/quality,q_95",
            index: 4,
       
        },
        {
            
            image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/f34f896372f524e487c9f8f7717eb0dd583e3fb3_1657989351.gif",
            index: 5,
            // page:
        
        },
        {
            
            image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/2749ebea8e53e6dd1dee420af3c459da9f70f2d3_1658039150.jpg?x-oss-process=image/quality,q_95",
            index: 6,
            // page:
        },
        {
            
            image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/16d1011ae7e912f02e760c0d319c688f62206dac_1658234833.jpg?x-oss-process=image/quality,q_95",
            index:7,
        
      
        },
        {
            
            image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/1e8353bd1a3282597d308a3d872245169a5c4b0d_1658036323.jpg?x-oss-process=image/quality,q_95",
            index:8,
        
        } 
    ];

    return (
        <div>
            <Slider autoplay={3000}>
                {content.map((item) => (
                  
                  <div
                        key={item.index}
                        style={{ background: `url('${item.image}') no-repeat center`,cursor:"pointer" ,backgroundSize:"cover", width:"100%" }}
                    >
                       
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HomeSlider