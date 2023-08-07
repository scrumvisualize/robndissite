
import React, { useState } from 'react';
import Navbar from './navbarItems';
import TopSnippet from './topSnippet';
import Footer from './footer';
import GroupBasedImages from './groupBasedImages';
import DialogForm from './dialogForm';

const ServiceOne = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
 
    const openDialogForm = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    

    return (
        <div className="mx-auto">
            <TopSnippet />
            <Navbar />
            <div className="hidden md:flex md:mb-1">
                <div className="md:w-1/2">
                    <img
                        src="images/groupBased1.png"
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
                        <span> Group Based Activities</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-4 ml-2">Group Based Activities</h1>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Jegni Life aims to provide a platform for individuals to engage in community participation and group
                        activities, with a particular focus on improving social interactions and mental well-being.
                    </p>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                         Jegni Life helps individuals to find and connect with groups that match
                        their interests and preferences. This can enhance the overall experience of participating in
                        community activities.
                    </p>
                    <div className="text-sm font-normal font-bold mt-2 ml-7 text-gray-600">
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-3 text-gray-600">Highlights of the group based activities</span>
                    </div>
                    <ul className="mt-4 md:mb-4">
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}    
                                <svg className="z-0 md:z-0" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Identifying Enjoyable Groups</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Social and Community Participation</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Personal Relationships</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Independence and Mental Health</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Safe and Gradual Progression</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Recreational and Life Skills Activities</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Encouragement and Support</p>
                        </li>
                    </ul>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        By promoting community participation and group activities Jegni Life seems to be creating a positive
                        platform for individuals to enhance their lives and connect with others.
                    </p>
                    
                    <button onClick={openDialogForm} className="w-[310px] md:w-200 h-12 md:h-10 flex justify-center flex flex-col items-center mb-5 my-2 md:mb-2 md:mt-6 md:ml-56 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Get Group Based Activities
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>

                </div>
            </div>

            <div className="md:hidden">
                <div>
                    <img
                        src="images/groupBased1.png"
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
                        <span className="text-sm font-normal font-bold ml-2 mb-2 text-gray-600">Group Based Activities</span>
                    </div>
                    <h1 className="text-3xl font-bold ml-2 mb-4 ml-4">Group Based Activities</h1>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Jegni Life aims to provide a platform for individuals to engage in community participation and group
                        activities, with a particular focus on improving social interactions and mental well-being.
                    </p>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Jegni Life helps individuals to find and connect with groups that match
                        their interests and preferences. This can enhance the overall experience of participating in
                        community activities.
                    </p>
                    <div className="text-sm font-normal font-bold mt-2 ml-7 text-gray-600">
                        <span> &#10230;</span>
                        <span className="text-sm font-normal font-bold ml-3 text-gray-600">Some of the group based activity service highlights</span>
                    </div>

                    <ul className="mt-4">
                         <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Identifying Enjoyable Groups</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Social and Community Participation</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Personal Relationships</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Independence and Mental Health</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Safe and Gradual Progression</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Recreational and Life Skills Activities</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Encouragement and Support</p>
                        </li>
                    </ul>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        By promoting community participation and group activities Jegni Life seems to be creating a positive platform for individuals to enhance their lives and connect with others.
                    </p>
                    
                    <button onClick={openDialogForm} className="w-[300px] ml-7 md:w-200 h-12 md:h-10 flex justify-center items-center mb-5 my-2 md:mb-2 md:mt-4 md:ml-56 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Get Group Based Activities
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>
                </div>
            </div>
            <GroupBasedImages/>
            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
            <Footer/>
        </div>
    );
};

export default ServiceOne;