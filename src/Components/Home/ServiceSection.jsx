import React from "react";
import { FaInbox } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FiLock } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";

function ServiceSection() {
  return (
    <div className=" font-family">
      <div className="lg:px-32 md:px-16 px-5 py-20">
        <div className="text-center text-4xl font-bold pb-14 lg:w-[600px] md:w-[500px] mx-auto">
          Designed to Help You Grow Your Digital Marketing Business
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 text-center">
          <div className="p-7 py-20 rounded-md shadow-lg border">
            <div className="">
              <FaInbox className="text-7xl bg-[--second-color] text-[--three-color] p-5 rounded-lg mx-auto" />
            </div>
            <div className="text-3xl font-medium py-3">
              Quality Digital Marketing Leads
            </div>
            <div className="text-gray-700">
              Quality digital marketing leads demonstrate high interest and
              engagement with products or services, ensuring better conversion
              rates and ROI for your marketing efforts.
            </div>
          </div>
          <div className="p-7 py-20 rounded-md shadow-lg border">
            <div className="">
              <BsFillPersonCheckFill className="text-7xl bg-[--second-color] text-[--three-color] p-5 rounded-lg mx-auto" />
            </div>
            <div className="text-3xl font-medium py-3">
              Daily Digital Marketing Updates
            </div>
            <div className="text-gray-700">
              Stay up-to-date with the latest trends and strategies in digital
              marketing. We provide daily updates to help you stay ahead of the
              competition and grow your business.
            </div>
          </div>
          <div className="p-7 py-20 rounded-md shadow-lg border">
            <div className="">
              <MdAccessTime className="text-7xl bg-[--second-color] text-[--three-color] p-5 rounded-lg mx-auto" />
            </div>
            <div className="text-3xl font-medium py-3">
              Save Time and Effort
            </div>
            <div className="text-gray-700">
              LeadHunter is the only tool you'll need to grow your digital
              marketing business. Save time and effort by accessing a curated
              list of quality leads and resources all in one place.
            </div>
          </div>
          <div className="p-7 py-20 rounded-md shadow-lg border">
            <div className="">
              <IoMdCheckboxOutline className="text-7xl bg-[--second-color] text-[--three-color] p-5 rounded-lg mx-auto" />
            </div>
            <div className="text-3xl font-medium py-3">
              Accurate and Up-to-Date Information
            </div>
            <div className="text-gray-700">
              We ensure all information provided is accurate and up-to-date,
              helping you make informed decisions and maximize your digital
              marketing efforts.
            </div>
          </div>
          <div className="p-7 py-20 rounded-md shadow-lg border">
            <div className="">
              <FiLock className="text-7xl bg-[--second-color] text-[--three-color] p-5 rounded-lg mx-auto" />
            </div>
            <div className="text-3xl font-medium py-3">
              Exclusive Digital Marketing Opportunities
            </div>
            <div className="text-gray-700">
              Our exclusive digital marketing opportunities are unique to
              LeadHunter and have not been sourced from any other providers.
            </div>
          </div>
          <div className="p-7 py-20 rounded-md shadow-lg border">
            <div className="">
              <GrDocumentText className="text-7xl bg-[--second-color] text-[--three-color] p-5 rounded-lg mx-auto" />
            </div>
            <div className="text-3xl font-medium py-3">
              Access the Data You Need
            </div>
            <div className="text-gray-700">
              Find and engage the best prospects with the data you need to close
              more deals and grow your digital marketing business.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
