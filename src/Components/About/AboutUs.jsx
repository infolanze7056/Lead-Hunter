import React from "react";
import "./About.css";

function AboutUs() {
  return (
    <div className="font-family about-img">
      <div className="lg:px-36 md:px-20 px-7 lg:py-40 md:py-32 py-10 text-center">
        <div className="">
          <div className="w-max p-3 px-7 mx-auto rounded-lg bg-[--second-color] text-sm ">
            <a
              href="https://www.infolanze.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
               POWERED BY INFOLANZE TECH PVT. LTD.
            </a>
          </div>
          <div className="lg:text-5xl text-3xl max-w-3xl mx-auto pt-5 lg:leading-normal leading-normal">
            LeadHunter spends hundreds of hours per month searching the web for
            the best digital marketing opportunities to help grow your business.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
