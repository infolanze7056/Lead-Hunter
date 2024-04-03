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
                <div className="pb-4 lg:pe-4">The transition of Lead Hunters from contributing to partner networks of major demand gen vendors to selling directly to businesses epitomized a strategic response to the shifting landscape of 2024. With a keen understanding of the evolving priorities of B2B buyers, Lead Hunters embraced a vision of transparency and agility.</div>
                <div>This strategic pivot not only aligned with the expectations of digital consumers for seamless brand experiences but also enabled Lead Hunters to navigate the rapidly evolving landscape of privacy legislation with greater agility. By prioritizing direct engagement with businesses, Lead Hunters demonstrated a commitment to delivering quality services without inflating costs.</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutInfo;