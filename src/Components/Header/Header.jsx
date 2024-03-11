import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <>
        <header className="flex justify-between w-full px-10">
            <div className="logo p-5">
            <span>LeadHunter</span>
            </div>
            <nav className="flex flex-warp gap-4">
                <div className="p-5">
                    <NavLink>About</NavLink>
                </div>

                <div className="p-5">
                    <NavLink>Services</NavLink>
                </div>

                <div className="p-5">
                    <NavLink>Pricing</NavLink>
                </div>

                <div className="p-5">
                    <NavLink> Login</NavLink>
                </div>

                <div className="p-5">
                    <NavLink> Register</NavLink>
                </div>
            </nav>
        </header>
        </>
    );
};

export default Header;