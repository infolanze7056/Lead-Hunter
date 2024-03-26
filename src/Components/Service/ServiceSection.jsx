import React from 'react'
import ServiceImg from "../../Images/giving-back.png";
 
function ServiceSection() {
  return (
    <div className='font-family'>
        <div className='lg:px-36 md:px-20 px-5 py-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
                <div className='lg:text-6xl text-5xl lg:order-1 order-2'>We're creating the world's most human demand gen company.</div>
                <div className='lg:order-2 order-1'><img className='w-[600px] mx-auto' src={ServiceImg} alt="Service" /></div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection