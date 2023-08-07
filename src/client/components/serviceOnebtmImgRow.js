import React from 'react';

const ServiceOneBtmImgRow = () => {
    return (
        <div className="relative">
            <div className="w-full h-96 md:h-[300px] bg-cover bg-no-repeat bg-center bg-service-one-btm mb-2">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold">Let's connect</h1>      
                    <button className="flex justify-start mx-4 mb-4 mt-6 select-none bg-yellow-300 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        <span className='mt-1'>Call 1800 800 124</span>
                        <svg className="w-4 h-4 text-slate-50 mx-3 mt-2 mb-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceOneBtmImgRow;
