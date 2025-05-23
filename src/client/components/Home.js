import React, { useEffect, useState } from 'react';
import Navbar from './navbarItems';
import Services from './services';
import MakesEasier from './makesEasier';
import Expertise from './ourExpertise';
import Reviews from './reviews';
import TopSnippet from './topSnippet';
import Footer from './footer';
import Guide from './guide';

const Home = () => {
  
  return (

    <div className='flex-wrap relative'>
      <TopSnippet /> 
      <Navbar />
      {/* bg-[#cce5ed] */}
      <div className="h-96 md:h-[480px] mx-auto bg-[#E8F2FF] p-8 mt-2 mb-10 md:mb-2 flex flex-col md:flex-row">
      
        <div className="md:w-2/5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4">
            <img
              src="images/NDIS-registered-provider-logo.png"
              className="h-[50px] md:h-[70px] pl-[10px] mb-[10px] md:pl-50 md:mb-0"
              alt="AUS"
            />
          </div>
          <h1 className="text-2xl ml-2 text-[#372540] font-bold whitespace-pre-line mb-6 items-start">
            Embrace Your Journey, Empower Your Life: <span className="text-[#D6AE38]">Together With JEGNI LIFE</span>
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
          <button className="w-[300px] md:w-[300px] flex justify-center items-center mb-20 my-42 md:mb-20 select-none bg-amber-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full mt-[-22px] md:mt-[22px] ml-4 md:ml-[10px]">
            <a href="tel:1800800124" className='mt-1'>Call 1800 800 124</a>
            <svg className="w-4 h-4 text-slate-50 mx-3 mt-2 mb-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
          </button> 
          {/*  */}
          {/* flex justify-start mx-8 md:mx-[5px] select-none bg-amber-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full mt-[-25px] md:mt-[20px] */}
        </div>
        <div className="portrait:hidden w-full md:w-3/5 mt-20 md:mr-10 md:ml-[-50px] md:mb-10">
          <div className="inset-0 overflow-hidden z-1">
            <div className="flex items-center justify-center bg-black bg-opacity-0 md:h-[300px] md:w-[720px]">
              <h1 className="text-5xl md:text-5xl text-[120px] md:text-[150px] font-bold text-transparent bg-clip-text bg-fill-us">
              <span className="wave-animation"></span>
                CARE & SUPPORT
              </h1>
            </div>
          </div>
        </div>

        <div className="landscape:hidden w-full md:w-3/5 mt-10 md:mr-10 md:ml-[-20px] md:mb-10">
          <div className="inset-0 overflow-hidden z-0">
            <div className="flex items-center justify-center bg-black bg-opacity-0 md:h-[300px] md:w-[500px]">
              <h1 className="text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-fill-us">
              <span className="wave-animation"></span>
                CARE & SUPPORT
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
      {/* <Reviews /> */}
      <Guide />
      <Footer />
    </div>
  );
};

export default Home;