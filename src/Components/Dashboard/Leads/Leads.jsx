import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from 'axios';

function Leads() {
  const [showPopup, setShowPopup] = useState(false);
  const [leadDetails, setLeadDetails] = useState(null);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Fetch data from API when component mounts
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/leads');
        setLeads(response.data); // Assuming your API returns an array of leads
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleLeadClick = (details) => {
    setLeadDetails(details);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setLeadDetails(null);
  };

  const redirectToLink = () => {
    if (leadDetails && leadDetails.link) {
      window.open(leadDetails.link, "_blank");
    }
  };

  const renderFirstParagraph = (description) => {
    if (Array.isArray(description)) {
      return description[0];
    } else {
      return description;
    }
  };

  return (
    <div className='px-4 lg:px-28 md:px-20 py-10 bg-[--main-color] font-family'>
      <div className=' p-5 bg-white rounded-lg shadow-lg'>
        <div className='text-center pb-5 uppercase text-3xl'>Get Your Leads Here</div>
        {leads.map((lead) => (
          <div key={lead.id} className='grid lg:grid-cols-6 grid-col-3 border rounded-lg hover:shadow-md cursor-pointer items-center lead mb-5'>
            <div className='lg:col-span-4 col-span-2 p-5' onClick={() => handleLeadClick(lead)}>
              <div className='title font-semibold'>{lead.title}</div>
              <div className='text-sm'>{renderFirstParagraph(lead.description)}</div>
            </div>
            <div className='p-5 text-center' onClick={() => handleLeadClick(lead)}>{Array.isArray(lead.tags) ? lead.tags.reduce((acc, cur, idx) => acc + (idx !== 0 ? ', ' : '') + cur, '') : lead.tags}</div>
            <div className='p-5 text-center' onClick={() => handleLeadClick(lead)}>{lead.timestamp}</div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 p-2 z-50'>
          <div className='bg-white p-8 rounded-lg lg:w-[900px] md:w-[650px] w-[500px]'>
            <div className='flex justify-between items-center border-b pb-3'>
                <button className='text-gray-600 hover:text-black' onClick={closePopup}><FaArrowLeft className='' /></button>
                <div><button onClick={redirectToLink} className='uppercase text-sm bg-yellow-300 p-2 px-3 rounded-md hover:bg-yellow-200 flex items-center'>Send A Pitch&nbsp;<MdKeyboardDoubleArrowRight className='text-lg'/></button></div>
            </div>
            <div className='pt-2'>
              <div className='text-2xl font-semibold text-center'>Lead Details</div>
            </div>
            <div className='mt-4'>
              <div className='flex justify-between items-center pb-2'>
              <p className='font-semibold text-lg'>{leadDetails.title}</p>
              {leadDetails.level && <div className='bg-gray-200 text-xs px-2 py-1 rounded'>{leadDetails.level}</div>}
              </div>
              <div className='text-sm'>
                {Array.isArray(leadDetails.description) ? (
                  leadDetails.description.map((paragraph, index) => (
                    <p className='pb-1 flex items-center' key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{leadDetails.description}</p>
                )}
              </div>
              <div className='lg:flex lg:flex-row lg:justify-between flex-col pt-2 lg:items-center'>
              <div className='flex flex-wrap mt-2 justify-center'>
              {Array.isArray(leadDetails.tags) ? (
                leadDetails.tags.map((tag, index) => (
                  <span key={index} className='bg-gray-200 text-xs px-2 py-1 mr-2 mb-2 rounded'>{tag}</span>
                ))
              ) : (
                <span className='bg-gray-200 text-xs px-2 py-1 mr-2 mb-2 rounded'>{leadDetails.tags}</span>
              )}
              </div>
              <div className='text-xs flex justify-between font-semibold'>
                <div className='me-2'>{leadDetails.duretion}</div>
                <div>{leadDetails.budget}</div>
              </div>
              </div>
              <p className='text-gray-500 mt-2 text-sm'>{leadDetails.timestamp}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Leads;
