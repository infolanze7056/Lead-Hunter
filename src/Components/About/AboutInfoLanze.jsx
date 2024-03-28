import React from 'react'
import AboutInfoImg from "../../Images/giving-back.png"

function AboutInfo() {
  return (
    <div className='font-family'>
        <div className='lg:px-36 md:px-20 px-5 py-10'>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            <div className='lg:order-2'>
            <img className="mx-auto w-[550px]" src={AboutInfoImg} alt="" />
            </div>
            <div className="text-lg lg:order-1">
                <div className="pb-4 lg:pe-4">1Amidst all of the turbulence of 2024, InfoLanze Tech recognized a shift in the priorities of the modern B2B buyer. Digital consumers were expecting seamless brand experiences, privacy legislation was rapidly evolving, and CX was a clear miss across the industry.</div>
                <div>These opportunities led to Lead Hunters transitioning from contributing to the partner networks of all the major demand gen vendors, to selling direct to businesses. It was born of a vision of transparency, cutting out the middleman to be more where it matters most - more agile, more responsive, more personalized, more compliant - without sacrificing on quality or inflating costs.</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutInfo;