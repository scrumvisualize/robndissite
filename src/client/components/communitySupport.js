
import React, { useState } from 'react';
import Navbar from './navbarItems';
import TopSnippet from './topSnippet';
import Footer from './footer';
import CommunityImage from './communityImages';
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

    const communityExtendtext1 = "they empower individuals to develop essential life skills, cultivate meaningful relationships, and find a sense of belonging within their community."

    return (
        <div className="mx-auto">
            <TopSnippet />
            <Navbar />
            <div className="hidden md:flex md:mb-1">
                <div className="md:w-1/2">
                    <img
                        src="images/communitySupport.png"
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
                        <span> Community Support</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-4 ml-2">Community Support</h1>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        It is evident that community support plays a crucial role in enriching the lives of individuals
                        regardless of disabilities. Engaging in social and recreational activities positively impacts individuals’
                        quality of life. This not only uplifts mood but also fosters personal growth and empowerment.
                        Community engagement support emphasizes building and maintaining social connections.
                    </p>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        These can lead them to make friendships, opportunities to meet like-minded individuals and a sense of
                        belonging. Enabling access to the community activities and services will help them to change their
                        life in a positive way. This will help them to develop their intrapersonal relationships, social
                        connections, problem solving skills, communication, self-confidence, and resilience.
                    </p>
                    <div className="text-sm font-normal font-bold mt-2 ml-7 text-gray-600">
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-3 text-gray-600">Highlights of community support service</span>
                    </div>
                    <ul className="mt-4 md:mb-4">
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}    
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Connect and be active in the community</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Life transition planning including mentoring</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Assist in accommodation and tenancy obligations</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Assist in appoinments, convenient transport, doctor or other medical appointments</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Assistance in personal cares</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Assistance in household chores such as cleaning, drying, washing & vaccuming</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Preparing and planning meals & grocery shopping</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Assistance in recreational activities such as swimming, gym & public transport</p>
                        </li>
                    </ul>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                    Overall, community support services create an inclusive and welcoming environment for individuals with disabilities. 
                    By offering access to social and recreational activities, these services contribute to their well-being, happiness, and overall quality of life. 
                    Additionally, <span id="spanBox1" onClick={() => handleClick("spanBox1")} className="text-violet-500">read more...</span>   
                    {spanTextStates.spanBox1 ? communityExtendtext1 : `${communityExtendtext1.substring(0, 0)} `}  
                    </p>
                    
                    {/* <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        
                    </p> */}
                    <button onClick={openDialogForm} className="w-[310px] md:w-200 h-12 md:h-10 flex justify-center items-center mb-5 my-2 md:mb-2 md:mt-6 md:ml-56 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Get Community Support 
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>

                </div>
            </div>

            <div className="md:hidden">
                <div>
                    <img
                        src="images/communitySupport.png"
                        alt="Image"
                        className="w-full h-[500px] md:ml-2"
                    />
                </div>
                <div className="mt-8 overflow-auto">
                    <div className="text-sm font-normal font-bold ml-4 mb-2 text-gray-600">
                        <span>Home </span>
                        {/* &#x3e; */}
                        <span> &#10230;</span>    
                        <span> Services </span>
                        <span> &#10230;</span> 
                        <span> Community Support</span>
                    </div>
                    <h1 className="text-3xl font-bold ml-2 mb-4 ml-4">Community Support</h1>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        It is evident that community support plays a crucial role in enriching the lives of individuals
                        regardless of disabilities. Engaging in social and recreational activities positively impacts individuals’
                        quality of life. This not only uplifts mood but also fosters personal growth and empowerment.
                        Community engagement support emphasizes building and maintaining social connections.
                    </p>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        These can lead them to make friendships, opportunities to meet like-minded individuals and a sense of
                        belonging. Enabling access to the community activities and services will help them to change their
                        life in a positive way. This will help them to develop their intrapersonal relationships, social
                        connections, problem solving skills, communication, self-confidence, and resilience.
                    </p>
                    <div className="text-sm font-normal font-bold mt-2 ml-7 text-gray-600">
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-3 text-gray-600">Some of the community support service highlights</span>
                    </div>

                    <ul className="mt-4">
                         <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Connect and be active in the community</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Life transition planning including mentoring</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Assist in accommodation and tenancy obligations</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Assist in appoinments, convenient transport, doctor or other medical appointments</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Assistance in personal cares</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Assistance in household chores such as cleaning, drying, washing & vaccuming</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Preparing and planning meals & grocery shopping</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Assistance in recreational activities such as swimming, gym & public transport</p>
                        </li>
                    </ul>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                    Overall, community support services create an inclusive and welcoming environment for individuals with disabilities. 
                    By offering access to social and recreational activities, these services contribute to their well-being, happiness, and overall quality of life.  
                    Additionally, <span id="spanBox1" onClick={() => handleClick("spanBox1")} className="text-violet-500">read more...</span>     
                    </p>
                    
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        {spanTextStates.spanBox1 ? communityExtendtext1 : `${communityExtendtext1.substring(0, 0)} `}
                    </p>
                    <button onClick={openDialogForm} className="w-[320px] ml-10 md:w-200 h-12 md:h-10 flex justify-center items-center mb-5 my-2 md:mb-2 md:mt-4 md:ml-56 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Get Community Support 
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>
                </div>
            </div>
            <CommunityImage/>
            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
            <Footer/>
        </div>
    );
};

export default ServiceOne;