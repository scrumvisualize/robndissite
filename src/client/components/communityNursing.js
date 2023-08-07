
import React, { useState } from 'react';
import Navbar from './navbarItems';
import TopSnippet from './topSnippet';
import Footer from './footer';
import CommunityNursingImages from './communityNursingImages';
import DialogForm from './dialogForm';

const ServiceOne = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [spanTextStates, setSpanTextStates] = useState({
        spanBox1: false,
    });


    const handleClick = (buttonId) => {
        setSpanTextStates((prevState) => ({
            ...prevState,
            [buttonId]: !prevState[buttonId],
        }));
    };
    

    const openDialogForm = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const communityNursing1 = "disability or other conditions to maintain their independence and improve their quality of life through low-intensity nursing interventions and support.";

    return (
        <div className="mx-auto">
            <TopSnippet />
            <Navbar />
            <div className="hidden md:flex md:mb-1">
                <div className="md:w-1/2">
                    <img
                        src="images/communitynursingFinal.png"
                        alt="Image"
                        className="w-full h-[800px] md:ml-2"
                    />
                </div>
                <div className="md:w-1/2 bg-sky-50 p-4 md:p-2">
                    <div className="text-sm font-normal font-bold mb-2 text-gray-600 ml-2">
                        <span>Home </span>
                        {/* &#x3e; */}
                        <span> &#10230;</span>   
                        <span> Services </span>
                        <span> &#10230;</span>  
                        <span> Community Nursing</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-4 ml-2">Community Nursing</h1>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        We offer a wide range of low-intensity nursing support to the individuals who have chronic health
                        conditions, disabilities, or other medical conditions that impact their ability to independently
                        perform daily activities. The program is designed to provide essential care and assistance to improve
                        the overall quality of life and well-being of these individuals.
                    </p>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Jegni Life provides various nursing services that are tailored to the specific needs of each individual.
                        These services are aimed at helping individuals manage their health conditions and maintain their
                        independence as much as possible.
                    </p>
                    <div className="text-sm font-normal font-bold mt-2 ml-7 text-gray-600">
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-3 text-gray-600">Highlights of the community nursing service</span>
                    </div>
                    <ul className="mt-4 md:mb-4">
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}    
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Chronic Health Conditions</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Disabilities</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Activities of Daily Living</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Low-Intensity Services</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Holistic Approach</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Preventive Care</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Community-Based</p>
                        </li>
                    </ul>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Overall, the Community Nursing Support Program plays a vital role in assisting individuals with
                        chronic health issues, mental health problems,
                        <span id="spanBox1" onClick={() => handleClick("spanBox1")} className="text-violet-500"> read more..</span>   
                    {spanTextStates.spanBox1 ? communityNursing1 : `${communityNursing1.substring(0, 0)} `}  
                    </p>
                    
                    <button onClick={openDialogForm} className="w-[310px] md:w-200 h-12 md:h-10 flex justify-center flex flex-col items-center mb-5 my-2 md:mb-2 md:mt-6 md:ml-56 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Get Community Nursing 
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>

                </div>
            </div>

            <div className="md:hidden">
                <div>
                    <img
                        src="images/communitynursingFinal.png"
                        alt="Image"
                        className="w-full h-[500px] md:ml-2"
                    />
                </div>
                <div className="mt-8 overflow-auto">
                    <div className="text-sm font-normal font-bold ml-4 mb-2 text-gray-600">
                        <span>Home </span>
                        {/* &#x3e; */}
                        <span> &#10230;</span>    
                        <span>Services </span>
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-2 mb-2 text-gray-600">Community Nursing</span>
                    </div>
                    <h1 className="text-3xl font-bold ml-2 mb-4 ml-4">Community Nursing Service</h1>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        We offer a wide range of low-intensity nursing support to the individuals who have chronic health
                        conditions, disabilities, or other medical conditions that impact their ability to independently
                        perform daily activities. The program is designed to provide essential care and assistance to improve
                        the overall quality of life and well-being of these individuals.
                    </p>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Jegni Life provides various nursing services that are tailored to the specific needs of each individual.
                        These services are aimed at helping individuals manage their health conditions and maintain their
                        independence as much as possible.
                    </p>
                    <div className="text-sm font-normal font-bold mt-2 ml-7 text-gray-600">
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-3 text-gray-600">Some of the community nursing service highlights</span>
                    </div>

                    <ul className="mt-4">
                         <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Chronic Health Conditions</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Disabilities</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Activities of Daily Living</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Low-Intensity Services</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Holistic Approach</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Preventive Care</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Community-Based</p>
                        </li>
                    </ul>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Overall, the Community Nursing Support Program plays a vital role in assisting individuals with
                        chronic health issues, mental health problems, <span id="spanBox1" onClick={() => handleClick("spanBox1")} className="text-violet-500">read more...</span>     
                    </p>
                    
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        {spanTextStates.spanBox1 ? communityNursing1 : `${communityNursing1.substring(0, 0)} `}
                    </p>
                    <button onClick={openDialogForm} className="w-[300px] ml-7 md:w-200 h-12 md:h-10 flex justify-center items-center mb-5 my-2 md:mb-2 md:mt-4 md:ml-56 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Community Nursing
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>
                </div>
            </div>
            <CommunityNursingImages/>
            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
            <Footer/>
        </div>
    );
};

export default ServiceOne;