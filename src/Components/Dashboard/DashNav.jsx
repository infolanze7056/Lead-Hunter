import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../Images/Lead Hunter Logo.png";
// import axios from 'axios';

function DashNav() {

  return (
    <div className='w-full shadow-lg lg:px-20 md:px-7 px-4 font-family border-b bg-white'>
      <div className='flex items-center justify-between'>
        <div><img className="w-40 lg:w-44 md:w-40 z-40 filter grayscale" src={Logo} alt="Lead Hunter" /></div>
        <div>
          <NavLink to='/admin'>Admin Panel</NavLink>
          <NavLink to="/" className='border-2 border-black rounded-lg text-sm px-5 cursor-pointer p-2 hover:text-white hover:bg-black'>LogOut</NavLink>
        </div>
      </div>
    </div>
  );
}

export default DashNav;


// app.use(cors({ origin: 'http://localhost:3000' }));
// const cors = require('cors');