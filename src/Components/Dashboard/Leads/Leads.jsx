import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from 'axios';
import { MdClose } from "react-icons/md";

function Leads() {
  const [showPopup, setShowPopup] = useState(false);
  const [leadDetails, setLeadDetails] = useState(null);
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from API when component mounts
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/leads`);
        setLeads(response.data); // Assuming your API returns an array of leads
        // console.log("data", response.data);
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

  const fetchLeadsByTag = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/leads/tag`, {
            params: {
                tags: searchTerm
            }
        });
        setLeads(response.data); // Update leads state with fetched data
        console.log("data", response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const clearSearchFilter = async () => {
  setSearchTerm('');
  try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/leads`);
      setLeads(response.data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchLeadsByTag();
  };

  return (
    <div className='px-4 lg:px-28 md:px-20 lg:py-16 md:py-16 py-4 bg-[--main-color] font-family'>
      <div className='bg-white rounded-lg shadow-lg pb-5'>
        {/* <div className='text-center py-8 text-[--three-color] uppercase text-4xl border-b mb-10'>Get Your Leads Here</div> */}
        <div className='border-b px-4 py-7 mb-10'>
          <form onSubmit={handleSearchSubmit} class="flex items-center max-w-lg mx-auto">   
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
                  <input type="text" id="voice-search" value={searchTerm} onChange={handleSearchChange} class="bg-[--main-color] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 " placeholder="Search HTML, CSS..." required />
                  <button onClick={clearSearchFilter} type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                      <MdClose className='text-xl' />
                  </button>
              </div>
              <button type="submit" class="inline-flex items-center p-3 ms-2 text-sm font-medium text-white bg-[--three-color] rounded-lg border border-[--three-color] hover:bg-white hover:text-[--three-color] ">
                  <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>Search
              </button>
          </form>
        </div>
        {leads.map((lead, index) => (
          <div key={lead.id} className='grid lg:grid-cols-6 grid-col-3 border rounded-lg hover:shadow-md shadow-sm cursor-pointer items-center lead mb-5 m-4'>
            <div className='lg:col-span-4 col-span-2 p-5' onClick={() => handleLeadClick(lead)}>
            <div className='flex items-center'>
              <div className='p-4 px-5 bg-[--main-color] w-max rounded-md me-4'>
                {index + 1}.
              </div>
              <div>
                <div className='title font-semibold'>{lead.title}</div>
                <div className='text-sm'>{renderFirstParagraph(lead.description)}</div>
              </div>
            </div>
            </div>
            <div className='p-5 text-center' onClick={() => handleLeadClick(lead)}>{Array.isArray(lead.tags) ? lead.tags.reduce((acc, cur, idx) => acc + (idx !== 0 ? ', ' : '') + cur, '') : lead.tags}</div>
            <div className='p-5 text-center' onClick={() => handleLeadClick(lead)}>{lead.formattedCreatedAt}</div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 p-2 z-50'>
          <div className='bg-white rounded-lg lg:w-[800px] md:w-[650px] w-[500px]'>
            <div className='flex justify-between items-center border-b p-5 md:p-8 lg:p-8'>
                <button className='text-gray-600 hover:text-black' onClick={closePopup}><FaArrowLeft className='' /></button>
                <div><button onClick={redirectToLink} className='uppercase text-sm bg-[--three-color] text-white p-2 px-3 rounded-md hover:bg-white hover:text-[--three-color] outline outline-2 outline-[--three-color] flex items-center'>Send A Pitch&nbsp;<MdKeyboardDoubleArrowRight className='text-lg'/></button></div>
            </div>
            <div className='p-5 md:p-8 lg:p-8 rounded-b-lg'>
            <div className=''>
              <div className='text-3xl font-semibold text-center text-[--three-color]'>Lead Details</div>
            </div>
            <div className='mt-4'>
              <div className='flex justify-between items-center pb-2'>
              <p className='font-semibold text-lg'>{leadDetails.title}</p>
              {leadDetails.level && <div className='bg-[--second-color] text-xs px-2 py-1 rounded'>{leadDetails.level}</div>}
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
                  <span key={index} className='bg-[--second-color] text-xs px-2 py-1 mr-2 mb-2 rounded'>{tag}</span>
                ))
              ) : (
                <span className='bg-[--second-color] text-xs px-2 py-1 mr-2 mb-2 rounded'>{leadDetails.tags}</span>
              )}
              </div>
              <div className='text-xs flex justify-between font-semibold'>
                <div className='me-2'>{leadDetails.duration}</div>
                <div>{leadDetails.project_budget}</div>
              </div>
              </div>
              <p className='text-gray-500 mt-2 text-sm'>{leadDetails.formattedCreatedAt}</p>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Leads;
