import React from 'react'
import { content, category, category2, category3 } from '../Slider/Info'
import Card from './Card'

function Category() {
    
    return (
        <div>
            <div className='flex flex-row-reverse justify-around top-50 mt-20  items-center flex-wrap'>
                {content.map((item) => (
                    <div key={item.id}>
                        <img src={item.icon} alt={item.title} className="h-20 w-20  cursor-pointer flex-wrap" />
                        <h3 className='font-sans mt-4'>
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>

                        <Card></Card>
            <div className='grid gap-5 ml-4 mr-4  mt-20 grid-cols-4  flex-wrap'>


                {category.map((item) => (
                    <div key={item.id}>
                        <img src={item.image}className=' rounded-lg' />
                    </div>
                ))
                }



                
            </div>
                        <h1 className='text-center font-bold font-sans text-2xl mt-5 mb-5'>دسته بندی های دیجی کالا</h1>
            <div className='grid gap-20 ml-10 mr-10 grid-cols-5   w-30 h-30'>    {
                category2.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h1 className='text-center font-sans'>{item.title}</h1>
                    </div>
                ))


            }
            </div>


            <div className='grid grid-cols-2 gap-5 mt-20 ml-5 mr-5'>
                {
                    category3.map((item)=>(
                        <div className='' key={item.id}>
                            <img src={item.image} className=' rounded-lg'/> 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category