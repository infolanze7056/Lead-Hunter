import React, {useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactSection() {

    const form = useRef();

    const notifySuccess = () => toast.success("Submit Successfully");
    const notifyError = () => toast.error("Failed to Submit");
  
    const [formData, setFormData] = useState({
      name: "",
      phone_number: "",
      email: "",
      company_name: "",
    });
  
    const [errors, setErrors] = useState({
      name: "",
      phone_number: "",
      email: "",
      company_name: "",
    });
  
    const handleChangeInput = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        emailjs
          .sendForm("service_izrxqrf", "template_mtaqgyg", form.current, {
            publicKey: "K7uMJi0Y5vlmwltXZ",
          })
          .then(
            () => {
              console.log("SUCCESS!");
              setFormData({
                name: "",
                phone_number: "",
                email: "",
                company_name: "",
              });
              setErrors({
                name: "",
                phone_number: "",
                email: "",
                company_name: "",
              });
              notifySuccess();
            },
            (error) => {
              console.log("FAILED...", error.text);
              notifyError();
            }
          );
      } else {
        console.log("Form contains errors, cannot submit.");
      }
    };
  
    const validateForm = () => {
      let valid = true;
      let newErrors = {};
  
      // Name validation
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
        valid = false;
      }
  
      // Phone number validation
      if (!formData.phone_number.trim()) {
        newErrors.phone_number = "Phone number is required";
        valid = false;
      } else if (
          !/^\d{10}$/.test(formData.phone_number)
      ) {
          newErrors.phone_number = "Invalid phone number";
          valid = false;
      }
  
      // Email validation
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        valid = false;
      } else if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
      ) {
        newErrors.email = "Invalid email address";
        valid = false;
      }
  
      // Company name validation
      if (!formData.company_name.trim()) {
        newErrors.company_name = "Company name is required";
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };

  return (
    <div className=''>
        <div className="bg-[--main-color] font-family">
      <div className="lg:px-36 md:px-20 px-5 py-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center">
          <div className=" lg:px-10 md:px-4">
            <div className='pb-1 font-semibold text-lg'>Get in touch!</div>
            <div className="text-4xl font-bold pb-5">
              Explore how to our services can be integrated with <span className="text-gray-400">Your Business.</span>
            </div>
            <div className="font-semibold">We're just a conversation away!</div>
          </div>
          <div>
            <div>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="mx-auto py-6 px-4"
              >
              <div className="lg:flex md:flex ">
              <div className="lg:pe-5 md:pe-4 pt-3">
              <label className="text-sm font-semibold">Your Name *</label>
              <input
                  onChange={handleChangeInput}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none border-none shadow-md"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">{errors.name}</span>
                )}
                    </div>
                    <div className="pt-3">
                <label className="text-sm font-semibold" >Your Number *</label>
                <input
                  onChange={handleChangeInput}
                  value={formData.phone_number}
                  name="phone_number"
                  type="phone"
                  placeholder=""
                  className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none border-none shadow-md"
                />
                {errors.phone_number && (
                  <span className="text-red-500 text-xs">
                    {errors.phone_number}
                  </span>
                )}
                </div>
              </div>
                <div className="pt-3">
                <label  className="text-sm font-semibold">Your Email *</label>
                <input
                  onChange={handleChangeInput}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder=""
                  className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none border-none shadow-md"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
                </div>
                <div className="pt-3">
                <label className="text-sm font-semibold">Please describe what you need *</label>
                <textarea
                  onChange={handleChangeInput}
                  value={formData.company_name}
                  name="company_name"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md h-28 px-6  bg-white text-sm outline-none border-none shadow-md"
                />
                {errors.company_name && (
                  <span className="text-red-500 text-xs">
                    {errors.company_name}
                  </span>
                )}
                </div>
                
                <div>
                  <button
                    className="text-black hover:text-white outline outline-2 hover:outline-black bg-white hover:bg-black font-semibold rounded-md text-sm px-6 py-3 mt-4 block"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </div>
  )
}

export default ContactSection