import React from 'react';
import { MdOutlineWeb } from "react-icons/md";
 
function ServiceSection() {
  return (
    <div className='font-family'>
      <div className='lg:px-36 md:px-20 px-5 py-10 lg:pb-20'>
        <div className='text-4xl font-semibold text-center pb-10 text-[--three-color]'>Services We Provide:</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
          <div className='border bg-[--main-color] rounded lg:p-8 md:p-8 p-4 shadow-md'>
            <div className='flex items-center'>
              <div className='p-6 rounded-full bg-white me-7'>
                <MdOutlineWeb className='text-4xl text-[--three-color]'  />
              </div>
              <div>
                <div className='text-2xl font-semibold'>Digital Marketing Strategy</div>
                <div className='pt-1 text-sm lg:block md:block hidden'>Utilizing the latest digital marketing tools and strategies, we provide top-notch digital marketing services that are both innovative and efficient.</div>
              </div>
            </div>
          </div>
          <div className='border bg-[--main-color] rounded  lg:p-8 md:p-8 p-4 shadow-md'>
            <div className='flex items-center'>
              <div className='p-6 rounded-full bg-white me-7'>
                <MdOutlineWeb className='text-4xl text-[--three-color]'  />
              </div>
              <div>
                <div className='text-2xl font-semibold'>Digital Advertising</div>
                <div className='pt-1  text-sm lg:block md:block hidden'>Utilizing cutting-edge technology, we specialize in digital advertising that maximizes your online presence and ROI.</div>
              </div>
            </div>
          </div>
          <div className='border bg-[--main-color] rounded lg:p-8 md:p-8 p-4 shadow-md'>
            <div className='flex items-center'>
              <div className='p-6 rounded-full bg-white me-7'>
                <MdOutlineWeb className='text-4xl text-[--three-color]'  />
              </div>
              <div>
                <div className='text-2xl font-semibold'>Search Engine Optimization (SEO)</div>
                <div className='pt-1 text-sm lg:block md:block hidden '>SEO enhances website visibility and ranking through strategic techniques, boosting organic traffic and maximizing online presence effectively.</div>
              </div>
            </div>
          </div>
          <div className='border bg-[--main-color] rounded lg:p-8 md:p-8 p-4 shadow-md'>
            <div className='flex items-center'>
              <div className='p-6 rounded-full bg-white me-7'>
                <MdOutlineWeb className='text-4xl text-[--three-color]'  />
              </div>
              <div>
                <div className='text-2xl font-semibold'>Social Media Marketing</div>
                <div className='pt-1 text-sm lg:block md:block hidden'>Leverage the power of social media platforms to reach and engage your target audience effectively, boosting brand awareness and driving sales.</div>
              </div>
            </div>
          </div>
          <div className='border bg-[--main-color] rounded lg:p-8 md:p-8 p-4 shadow-md'>
            <div className='flex items-center'>
              <div className='p-6 rounded-full bg-white me-7'>
                <MdOutlineWeb className='text-4xl text-[--three-color]'  />
              </div>
              <div>
                <div className='text-2xl font-semibold'>Content Marketing</div>
                <div className='pt-1 text-sm lg:block md:block hidden'>Create valuable and engaging content that resonates with your target audience, driving brand awareness, and establishing thought leadership in your industry.</div>
              </div>
            </div>
          </div>
          <div className='border bg-[--main-color] rounded lg:p-8 md:p-8 p-4 shadow-md'>
            <div className='flex items-center'>
              <div className='p-6 rounded-full bg-white me-7'>
                <MdOutlineWeb className='text-4xl text-[--three-color]'  />
              </div>
              <div>
                <div className='text-2xl font-semibold'>Email Marketing</div>
                <div className='pt-1 text-sm lg:block md:block hidden'>Drive customer engagement and retention through targeted email campaigns, delivering personalized content and promotions directly to your audience's inbox.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
