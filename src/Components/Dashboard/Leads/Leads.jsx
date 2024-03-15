import React, { useState } from 'react';
// import axios from 'axios';

function Leads() {
  const [showPopup, setShowPopup] = useState(false);
  const [leadDetails, setLeadDetails] = useState(null);


  const demoLeadDetails = [
    {
      id: 1,
      title: 'Design App Using Figma',
      description: 'We are a new startup looking for an experience and creative mobile app designer to design the user interface.',
      tags: ['Figma', 'UI/UX'],
      timestamp: '7 hours ago',
      dis: 'That is highly scalable for impliment APIs',
    },
    {
      id: 2,
      title: 'Backend Developer Needed',
      description: 'We are looking for an experienced backend developer proficient in Node.js and MongoDB for our upcoming project.',
      tags: ['Node.js', 'MongoDB', 'Backend'],
      timestamp: '2 days ago'
    },
    {
        id: 3,
        title: 'Frontend Developer Needed',
        description: 'We are looking for an experienced frontend developer proficient in react.js and express for our upcoming project.',
        tags: ['React.js', 'Express.js', 'Frontend'],
        timestamp: '2 days ago'
      }
  ];

//   useEffect(() => {
//     const fetchLeadDetails = async () => {
//       try {
//         const response = await axios.get('your_api_endpoint');
//         setLeadDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching lead details:', error);
//       }
//     };

//     fetchLeadDetails();
//   }, []);

  const handleLeadClick = (details) => {
    setLeadDetails(details);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setLeadDetails(null);
  };

  return (
    <div className='px-4 lg:px-28 md:px-20 py-10 bg-[--main-color] font-family'>
      <div className=' p-5 bg-white rounded-lg shadow-lg'>
        <div className='text-center pb-5 uppercase text-3xl'>Get Your Leads Here</div>
        {demoLeadDetails.map((lead) => (
          <div key={lead.id} className='grid lg:grid-cols-6 grid-col-3 border rounded-lg hover:shadow-md cursor-pointer items-center lead mb-5'>
            <div className='lg:col-span-4 col-span-2 p-5' onClick={() => handleLeadClick(lead)}>
              <div className='title font-semibold'>{lead.title}</div>
              <div className='text-sm'>{lead.description}</div>
            </div>
            <div className='p-5 text-center' onClick={() => handleLeadClick(lead)}>{lead.tags.join(', ')}</div>
            <div className='p-5 text-center' onClick={() => handleLeadClick(lead)}>{lead.timestamp}</div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 p-2'>
          <div className='bg-white p-8 rounded-lg'>
            <div className='flex justify-between'>
              <div className='text-xl font-semibold'>Lead Details</div>
              <button className='text-red-500' onClick={closePopup}>Close</button>
            </div>
            <div className='mt-4'>
              <p className='font-semibold'>{leadDetails.title}</p>
              <p className='text-sm'>{leadDetails.description}</p>
              <p className='text-sm'>{leadDetails.dis}</p>
              <div className='flex mt-2'>
                {leadDetails.tags.map((tag, index) => (
                  <span key={index} className='bg-gray-200 text-xs px-2 py-1 mr-2 rounded'>{tag}</span>
                ))}
              </div>
              <p className='text-gray-500 mt-2'>{leadDetails.timestamp}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Leads;


