import React from "react";
import img1 from "../../Images/6155818-removebg.png";
import "./Home.css";

const HeroSection = () => {
    return (
        <div className="lg:px-20 md:px-7 px-5 py-10 font-family bg-[--main-color]">
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="lg:order-1 order-2">
                        <div className="w-max bg-gray-200 p-2 px-3 rounded-lg uppercase shadow-md">Lead Generation</div>
                        <div className="text-6xl font-semibold pt-2">Lead Subscription</div>
                        <div className="text-lg py-5">
                            <p className="pb-4">Looking for a consistent stream of leads for your content? Our Lead Subscription model gets you up to five lead gen campaigns, targeting firmographic and behavior-based data. All this with added optimization and customization features.</p>
                            <p>Complete the form to give us an idea of the type of campaign you're looking to stand up and we'll connect you with one of our experts.</p>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 lg:pt-3 lg:px-0 md:px-0 px-5">
                            <div className=" rounded-lg text-center bg-gray-200 py-7 shadow-md">
                                <h3><span className="text-5xl font-semibold">$100</span></h3>
                                <p className="pt-2">Cost Per Lead(CPL)</p>
                            </div>
                            <div className=" rounded-lg text-center bg-gray-200 py-7 shadow-md">
                            <h3><span className="text-5xl font-semibold">$180</span></h3>
                                <p className="pt-2">Contract Minimum</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:order-2 order-1">
                        <div><img className="w-[640px] mx-auto" src={img1} alt="" /></div>
                    </div>
                </div>
        </div>
    );
};

export default HeroSection;