
import React, { useState } from 'react';
import Navbar from './navbarItems';
import TopSnippet from './topSnippet';
import Footer from './footer';
import ServiceImage from './serviceImages';
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

    const serviceExtendtext1 = "their families and other professionals to create individualized care plans ensures that the support provided aligns with the client's specific needs, goals and aspirations. This person-centred approach enhances the effectiveness of the care and helps the client to achieve their desired outcomes, fostering a sense of empowerment and ownership in their journey towards a fulfilling life."
    return (
        <div className="mx-auto">
            <TopSnippet />
            <Navbar />
            <div className="hidden md:flex md:mb-1">
                <div className="md:w-1/2">
                    <img
                        src="images/SIL-main-final.png"
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
                        <span> Supported Independent Living (SIL)</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-4 ml-2">Supported Independent Living (SIL)</h1>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Supported Independent Living (SIL) is a type of support provided to individuals with disabilities who
                        have higher support needs. It is aimed to help these individuals live as independently as possible
                        while receiving assistance with various daily tasks. Support independent service is designed to provide personalized and tailored support to meet the
                        specific needs of each individual.
                    </p>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Supported independent living homes provide a great balance of privacy and companionship,
                        allowing residents to enjoy their own space while also fostering connections with like-
                        minded individuals. It can be a fulfilling and supportive environment for those seeking a
                        sense of community living and independence.
                    </p>
                    <div className="text-sm font-normal font-bold mt-2 ml-7 text-gray-600">
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-3 text-gray-600">Highlights of the SIL service</span>
                    </div>
                    <ul className="mt-4 md:mb-4">
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}    
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Support independent living</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Collaborating with client & their families</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Provide holistic and empowering support</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Regular monitoring and evaluation of services</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 md:pl-10 md:pt-2 mr-4">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-[#546E8F] border-b-[#546E8F] transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 mt-2 text-gray-700 px-4">Facilitating community integration</p>
                        </li>
                    </ul>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Supported Independent Living empowers individuals by giving them the autonomy to make
                        their own choices and be actively involved in shaping their lives. It aims to promote self-
                        determination, personal growth, and social inclusion enabling people to lead fulfilling lives
                        while receiving the necessary support and assistance when needed. This approach enhances
                        the overall well-being and quality of life for those in such living arrangements. Collaborating with the client, <span id="spanBox1" onClick={() => handleClick("spanBox1")} className="text-violet-500">read more...</span>     
                    </p>
                    
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        {spanTextStates.spanBox1 ? serviceExtendtext1 : `${serviceExtendtext1.substring(0, 0)} `}
                    </p>
                    <button onClick={openDialogForm} className="w-[300px] md:w-200 h-12 md:h-10 flex justify-center items-center mb-5 my-2 md:mb-2 md:mt-6 md:ml-56 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Get SIL 
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>

                </div>
            </div>

            <div className="md:hidden">
                <div>
                    <img
                        src="images/SIL-main-final.png"
                        alt="Image"
                        className="w-full h-[500px] md:ml-2"
                    />
                </div>
                <div className="mt-8 overflow-auto">
                    <div className="text-sm font-normal font-bold ml-4 mb-2 text-gray-600">
                        <span>Home </span>
                        {/* &#x3e; */}
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-2 mb-2 text-gray-600">Supported Independent Living (SIL)</span>
                    </div>
                    <h1 className="text-3xl font-bold ml-2 mb-4 ml-4">Supported Independent Living (SIL)</h1>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Supported Independent Living (SIL) is a type of support provided to individuals with disabilities who
                        have higher support needs. It is aimed to help these individuals live as independently as possible
                        while receiving assistance with various daily tasks. Support independent service is designed to provide personalized and tailored support to meet the
                        specific needs of each individual.
                    </p>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Supported independent living homes provide a great balance of privacy and companionship,
                        allowing residents to enjoy their own space while also fostering connections with like-
                        minded individuals. It can be a fulfilling and supportive environment for those seeking a
                        sense of community living and independence.
                    </p>
                    <div className="text-sm font-normal font-bold mt-2 ml-7 text-gray-600">
                        <span> &#10230;</span>    
                        <span className="text-sm font-normal font-bold ml-3 text-gray-600">Some of the SIL service highlights</span>
                    </div>

                    <ul className="mt-4">
                         <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Support independent living</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Collaborating with client & their families</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Provide holistic and empowering support</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Regular monitoring and evaluation of services</p>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 ml-5 md:pl-10 md:pt-2 relative">
                                {/* <div className="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            </div>
                            <p className="text-base ml-2 text-gray-700 px-2">Facilitating community integration</p>
                        </li>
                    </ul>
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        Supported Independent Living empowers individuals by giving them the autonomy to make
                        their own choices and be actively involved in shaping their lives. It aims to promote self-
                        determination, personal growth, and social inclusion enabling people to lead fulfilling lives
                        while receiving the necessary support and assistance when needed. This approach enhances
                        the overall well-being and quality of life for those in such living arrangements. Collaborating with the client, <span id="spanBox1" onClick={() => handleClick("spanBox1")} className="text-violet-500">read more...</span>     
                    </p>
                    
                    <p className="text-base ml-2 mt-2 text-gray-700 px-4">
                        {spanTextStates.spanBox1 ? serviceExtendtext1 : `${serviceExtendtext1.substring(0, 0)} `}
                    </p>
                    <button onClick={openDialogForm} className="w-[300px] ml-7 md:w-200 h-12 md:h-10 flex justify-center items-center mb-5 my-2 md:mb-2 md:mt-4 md:ml-56 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Get SIL 
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>
                </div>
            </div>
            <ServiceImage/>
            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
            <Footer/>
        </div>
    );
};

export default ServiceOne;