import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import Logo from "../../Images/Lead Hunter Logo.png";

function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNavSelected = (e) => {
    setIsActive(e.target.id);
    setIsOpen(true);
  };

  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 70) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <div className="">
      <nav class="bg-white dark:bg-gray-900 w-full shadow-lg lg:px-20 md:px-7 px-4">
        <div class=" flex flex-wrap items-center justify-between mx-auto">
          <div>
          <img className="w-40 lg:w-44 md:w-40 z-40 filter grayscale" src={Logo} alt="nishant" />
          </div>
          <div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class=" lg:px-8 md:px-8 px-6 bg-white hover:bg-gray-900 text-black outline outline-2 hover:text-white outline-gray-900 font-medium rounded-md text-sm py-2 text-center "
            >
              Sign In
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden absolute md:right-8 right-6 top-7 cursor-pointer h-fit z-40"
              >
                {isOpen ? <FaBars className="text-2xl" /> : <AiOutlineClose className="text-2xl" />}
              </div>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col nav-menu p-4 lg::p-0 mt-4 lg:mb-0 md:mb-4 mb-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="text-gray-400">
              <NavLink
                to="/"
                activeClassName="active"
                id="1"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "1"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Home
              </NavLink>
              </li>
              <li className="text-gray-400">
              <NavLink
                to="/about"
                id="2"
                activeClassName="active"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "2"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                About US
              </NavLink>
              </li>
              <li className="text-gray-400">
              <NavLink
                to="/contact"
                activeClassName="active"
                id="3"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "3"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Contact US
              </NavLink>
              </li>
              <li className="text-gray-400">
              <NavLink
                to="/service"
                activeClassName="active"
                id="4"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "4"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Services
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
