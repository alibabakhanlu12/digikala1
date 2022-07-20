import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {content} from './Info'
function HomeSlider() {
 
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