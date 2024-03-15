import React from 'react'
import Logo from "../../Images/Lead Hunter Logo.png";

function DashNav() {
  return (
    <div className='w-full shadow-lg lg:px-20 md:px-7 px-4 font-family border-b bg-white'>
        <div className='flex items-center justify-between'>
            <div><img className="w-40 lg:w-44 md:w-40 z-40 filter grayscale" src={Logo} alt="Lead Hunter" /></div>
            <a href='/dashboard' className='border-2 border-black rounded-lg text-sm px-5 cursor-pointer p-2 hover:text-white hover:bg-black'>New Leads</a>
        </div>
    </div>
  )
}

export default DashNav