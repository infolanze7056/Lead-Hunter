import React from 'react'
import ServiceDataImg from "../../Images/Database-service-image.png"

function ServiceData() {
  return (
    <div className='font-family'>
        <div className='lg:px-36 md:px-20 px-5 py-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
                <div className=' lg:order-1 order-2 lg:pe-10'>
                    <div className='w-max bg-[--second-color] p-2 px-4 rounded-lg shadow'>PROPRIETARY DATABASE</div>
                    <div className='lg:text-6xl text-4xl py-4 font-semibold opacity-85'>No one owns their database like us.</div>
                    <div className='text-lg'>Knowing our database is like knowing the guest list to the party - it's our secret weapon. With accurate and up-to-date information, we can help you connect with your crowd like no one else can.</div>
                </div>
                <div className='lg:order-2 order-1'><img className='w-[600px] mx-auto' src={ServiceDataImg} alt="Service" /></div>
            </div>
        </div>
    </div>
  )
}

export default ServiceData