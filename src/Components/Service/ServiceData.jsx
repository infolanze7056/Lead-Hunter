import React from "react";
import ServiceDataImg from "../../Images/se-2.jpg";

function ServiceData() {
  return (
    <div className="font-family">
      <div className="lg:px-36 md:px-20 px-5 py-10 pb-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div className="lg:order-1 order-2 lg:pe-10">
            <div className="w-max bg-[--second-color] p-2 px-4 rounded-lg text-sm shadow">
              PRIORITY SERVICES
            </div>
            <div className="lg:text-4xl text-2xl py-4 font-semibold opacity-85">
              Boost your digital marketing career with LeadHunter!
            </div>
            <div className="text-lg">
              LeadHunter specializes in providing top-notch digital marketing services to help you excel in your career. From digital marketing strategy and advertising to search engine optimization (SEO) and content marketing, we offer a wide range of services to enhance your online presence and drive business growth. Join our platform today and take your digital marketing career to new heights!
            </div>
          </div>
          <div className="lg:order-2 order-1">
            <img
              className="w-[600px] mx-auto"
              src={ServiceDataImg}
              alt="Service"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceData;
