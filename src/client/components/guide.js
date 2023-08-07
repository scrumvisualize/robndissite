import React from 'react';

const Guide = () => {
  return (
    <div className="relative">
      <div className="w-full h-60 md:h-96 lg:h-[450px] bg-cover bg-no-repeat bg-center bg-guide-us mb-2">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center px-4 md:px-8">
            Let's connect and help you !
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-center px-4 md:px-8">
            Our daily services will make your life easier <br />
            Moving forward, we will make sure to keep everything up-to-date
          </p>
          <a
            href="tel:1800800124"
            className="inline-block mt-6 select-none bg-yellow-300 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-10 rounded-full"
          >
            <span className="mt-1">Call 1800 800 124</span>
            <svg
              className="w-4 h-4 text-slate-50 mx-3 mt-2 mb-2 dark:text-white hidden md:inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Guide;

