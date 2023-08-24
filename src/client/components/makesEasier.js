import React, { useState } from 'react';

const MakesEasier = () => {

    const performDownload = () =>{
         // set the path for pdf file
        fetch('./images/dummy.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = './images/dummy.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="relative">
            <div className="w-full md:h-[650px] md:mt-0 bg-no-repeat bg-cover bg-life-easier">
                <div className="relative inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mt-4 md:mt-40 ml-50">We make your life easier</h1>
                    <p className="text-sm md:text-lg md:text-base lg:text-lg ml-0"> Our diligent services make your life</p>
                    <p className="text-sm md:text-lg md:text-base lg:text-lg ml-00"> much easier and happier!</p>
                    <button onClick={performDownload} className="flex justify-center items-center mx-4 mb-4 md:mx-24 md:mb-20 mx-24 mb-20 md:mt-20 select-none bg-sky-400 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full" download target='_blank'>
                            Download info pack
                            <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MakesEasier;