import React from 'react';
import Navbar from './navbarItems';
import Services from './services';
import MakesEasier from './makesEasier';
import Expertise from './ourExpertise';
import Reviews from './reviews';
import TopSnippet from './topSnippet';
import Footer from './footer';
import Guide from './guide';

const Home = () => {
  const phoneNumber = '1800 800 124'; // Replace this with the actual phone number

  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (

    <div className='flex-wrap relative'>
      <TopSnippet /> 
      <Navbar />
      {/* bg-[#cce5ed] */}
      <div className="h-96 md:h-[480px] mx-auto bg-[#E8F2FF] p-8 mt-2 mb-10 md:mb-2 flex flex-col md:flex-row">
        <div className="md:w-2/5">
          <h1 className="text-3xl ml-2 text-[#372540] font-bold whitespace-pre-line mb-6 items-start">
            Embrace Your Journey, Empower Your Life: Together With JEGNI LIFE
          </h1>
          <ul>
            <li>
              <div className="flex items-start">
                <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-2 text-[#372540]">High Quality Service</span>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-2 text-[#372540]">Experienced Staff</span>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-2 text-[#372540]">Client Centric Approach</span>
              </div>
            </li>
            <li>
              <div className="flex items-start mb-6">
                <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-2 text-[#372540]">Connecting With Clients Regularly</span>
              </div>
            </li>
          </ul>
          <button className="flex justify-start mx-4 mb-4 select-none bg-amber-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
            <span onClick={handlePhoneNumberClick} className='mt-1'>Call 1800 800 124</span>
            <svg className="w-4 h-4 text-slate-50 mx-3 mt-2 mb-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-3/5 mt-20 mr-2 md:mb-10">
          <div className="inset-0 overflow-hidden z-1">
            <div className="flex items-center justify-center bg-black bg-opacity-0">
              <h1 className="text-5xl md:text-7xl lg:text-[175px] font-bold text-transparent bg-clip-text bg-fill-us">
              <span className="wave-animation"></span>
                Empower
              </h1>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex-wrap relative">
        <Services />
      </div>
      <MakesEasier />
      <Expertise />
      <Reviews />
      <Guide />
      <Footer />
    </div>
  );
};

export default Home;