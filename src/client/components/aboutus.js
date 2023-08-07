import React, { useState } from 'react';
import Navbar from './navbarItems';
import TopSnippet from './topSnippet';
import Footer from './footer';
import DialogForm from './dialogForm';
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate();

    const openDialogForm = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const navigateToService = () => {
        navigate('/serviceOne');
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <div className="flex-wrap relative">
            <TopSnippet />
            <Navbar />
            <div className="flex flex-col md:flex-row bg-sky-50 ">
                <div className="md:w-1/2 mb-48 md:mb-24 object-contain">
                    <img src="images/aboutus.jpg" alt="Image" className="w-[770px] mt-1 mb-[-10px] bg-no-repeat bg-cover object-cover" />
                    <div className="md:w-full bg-sky-50 p-8 flex flex-col justify-center">
                    <h1 className="text-xl font-bold mb-4 text-gray-600">About JEGNI LIFE</h1>
                    <div className="text-sm font-normal font-bold mb-2 text-gray-600">
                        <span>Home </span>
                        <span> &#10230;</span>    
                        <span> About Us</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">High Quality Client Support & Care</h1>
                    <p className="text-base text-gray-700">
                        Jegnilife is committed to fostering a warm and nurturing environment where our clients' well-being is at the forefront of everything we do. We firmly believe that every individual deserves personalized care and attention, and that is why we tailor our services to meet the unique needs and preferences of each client.
                    </p>
                    </div>
                </div>
                <div className="md:w-1/2 h-[600px] md:h-[700px] bg-sky-50 px-4 flex flex-col ml-2 mt-[35px] md:mb-10 mb-72 justify-center">
                    <p className="text-base mt-16 text-gray-700">
                    Our team of dedicated professionals goes above and beyond to ensure that our clients receive the highest level of care and support throughout their journey with us. We understand that recovery and progress are deeply personal and sensitive processes, which is why we approach each client with empathy, compassion, and respect.
                    </p>
                    <p className="text-base mt-5 text-gray-700">
                    Furthermore, at Jegnilife, we believe in the power of community and social integration as essential components of our clients' growth and independence. By actively engaging them in meaningful activities and connections with their local community, we strive to create a sense of belonging and empowerment. Our goal is to enable our clients to lead fulfilling lives and embrace opportunities for personal development and growth.
                    </p>
                    <p className="text-base mt-5 text-gray-700">
                    As a team, we are passionate about making a positive impact in the lives of those we serve, and we continuously seek opportunities to improve our services and uphold the highest standards of care in the healthcare sector. With Jegnilife, rest assured that your well-being is our top priority, and we are committed to supporting you every step of the way on your path to health, happiness, and independence.
                    </p>
                    <p className="text-base mt-5 text-gray-700">
                     With Jegnilife, you can be confident that your well-being stands as our utmost concern. Our unwavering dedication is centered on aiding you throughout your journey towards improved health, contentment, and self-sufficiency. We prioritize your path to well-being, ensuring comprehensive support at every stage.
                    </p>
                    <p className="text-base mt-5 text-gray-700">
                    Count on us to be your steadfast companions, guiding you towards a life marked by vitality and joy. Your health, happiness, and independence are our goals, and we are resolute in walking beside you as you achieve them. Trust Jegnilife for a holistic journey of growth, where your well-being remains at the heart of all we do.
                    </p>
                    <button onClick={openDialogForm} className="w-full md:w-200 h-12 md:h-10 flex justify-center items-center my-2 md:mb-10 md:mt-10 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Get Care & Support
                        <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:mt-[2px] mt-[20px]">
                <div className="md:w-1/2 bg-sky-50 p-8 flex flex-col justify-center border border-[#e3edfa]">
                    <h1 className="text-3xl font-bold mb-4 md:mt-[-150px] mt-[5px]">What we offer:</h1>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 md:pl-10 md:pt-2 relative">
                            {/* <div class="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                            <img src="images/heart.png" alt="Image" className="absolute w-6 h-6" />
                        </div>
                        <p className="text-base ml-2 mt-4 text-gray-700 px-8">High quality client support and care</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 md:pl-10 md:pt-2 relative">
                            {/* <div class="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                            <img src="images/heart.png" alt="Image" className="absolute w-6 h-6 mb-4" />
                        </div>
                        <p className="text-base ml-2 mt-4 text-gray-700 px-8">Provide qualified and experienced staff</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 md:pl-10 md:pt-2 relative">
                            {/* <div class="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                            <img src="images/heart.png" alt="Image" className="absolute w-6 h-6 mb-4" />
                        </div>
                        <p className="text-base ml-2 mt-4 text-gray-700 px-8">Client centric approach towards care and recovery</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 md:pl-10 md:pt-2 relative">
                            {/* <div class="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                            <img src="images/heart.png" alt="Image" className="absolute w-6 h-6 mb-2" />
                        </div>
                        <p className="text-base ml-2 mt-4 text-gray-700 px-8">Make our clients independent and happy</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 md:pl-10 md:pt-2 relative">
                            {/* <div class="absolute w-0 h-0 border-8 border-transparent border-solid border-l-transparent border-t-transparent border-r-teal-400 border-b-teal-400 transform -rotate-45 top-2/4 left-2/4"></div> */}
                            <img src="images/heart.png" alt="Image" className="absolute w-6 h-6" />
                        </div>
                        <p className="text-base ml-2 mt-4 text-gray-700 px-8">Connecting with clients on regular basis</p>
                    </div>
                    <button className="w-full md:w-200 h-12 md:h-10 flex justify-center items-center mb-20 md:mt-10 my-2 md:mb-20 select-none bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                        Call us to know more ? <img src="images/phone.png" className="h-10 mr-3 md:h-10 md:mr-3" alt="Call" />
                        <a href="tel:1800800124" className='mt-1'> &#8594; 1800 800 124</a>
                    </button>
                </div>
                <div className="md:w-1/2 object-contain">
                    <img src="images/caring2.png" alt="Image" className="w-full h-[720px] bg-no-repeat bg-center bg-cover object-cover" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                 {/* border color >> border border-[#e3edfa] */}
                <div className="md:w-1/2 bg-[#E8F2FF] p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">Our Values</h1>
                    <div className="flex flex-wrap">
                        <div className="md:w-1/3 p-4">
                            <img
                                src="images/empathy.png"
                                alt="Image 1"
                                className="w-full md:h-[158px] h-auto object-cover mb-4 rounded-lg"
                            />
                            <p className="text-center text-base font-bold ml-2 mt-4 text-gray-700 px-2">Empathy</p>
                        </div>
                        <div className="md:w-1/3 p-4">
                            <img
                                src="images/integrity.jpg"
                                alt="Image 2"
                                className="w-full h-auto object-cover mb-4 rounded-lg"
                            />
                            <p className="text-center text-base font-bold ml-2 mt-4 text-gray-700 px-2">Integrity</p>
                        </div>
                        <div className="md:w-1/3 p-4">
                            <img
                                src="images/partnership.jpg"
                                alt="Image 3"
                                className="w-full h-auto object-cover mb-4 rounded-lg"
                            />
                            <p className="text-center text-base font-bold ml-2 mt-4 text-gray-700 px-2">Partnership</p>
                        </div>
                        <div className="md:w-1/3 p-4">
                            <img
                                src="images/empower.jpg"
                                alt="Image 4"
                                className="w-full h-auto object-cover mb-4 rounded-lg"
                            />
                            <p className="text-center text-base font-bold ml-2 mt-4 text-gray-700 px-2">Empowerment</p>
                        </div>
                        <div className="md:w-1/3 p-4">
                            <img
                                src="images/respect.jpg"
                                alt="Image 5"
                                className="w-full h-auto object-cover mb-4 rounded-lg"
                            />
                            <p className="text-center text-base font-bold ml-2 mt-4 text-gray-700 px-2">Respect</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 bg-sky-50 p-8">
                    <h1 className="text-3xl font-bold mb-4">Our values in a nutshell</h1>
                    <h3 className="text-normal text-gray-700 font-bold">Empathy:</h3>
                    <p className="text-gray-700 mb-4">
                        We are committed to provide a service that is built on empathy towards our
                        clients. We will be non-judgemental in our approach towards them. Our approach will be
                        to understand, acknowledge and prioritise our clients’ needs to progress them towards
                        self sustenance and independence.
                    </p>
                    <h3 className="text-normal text-gray-700 font-bold">Integrity:</h3>
                    <p className="text-gray-700 mb-4">
                        Our goal is to provide the highest quality of service to our clients with their
                        welfare as the cornerstone of our philosophy.
                    </p>
                    <h3 className="text-normal text-gray-700 font-bold">Partnership:</h3>
                    <p className="text-gray-700 mb-4">
                        We will partner our clients to create collaborative plans alongside them
                        wherein they have their say in their recovery pathway. We will also work in partnership
                        with other stakeholders to enhance the recovery pathway of our clients.
                    </p>
                    <h3 className="text-normal text-gray-700 font-bold">Empowerment: </h3>
                    <p className="text-gray-700 mb-4">
                        We will endeavour to empower our clients through their ability to
                        participate in their own recovery plan thus creating an individual pathway which is best
                        suited to each client.
                    </p>
                    <h3 className="text-normal text-gray-700 font-bold">Respect: </h3>
                    <p className="text-gray-700 mb-4">
                        At Jegnilife, we are committed to honouring and upholding the rights and
                        choices of participants in their recovery journey. It centres around acknowledging and
                        valuing the individuals autonomy, preferences and cultural background.
                    </p>
                </div>
            </div>

            <div className="h-[230px] md:h-[230px] flex-wrap mx-auto relative p-4 bg-blue-100">
                <div className="flex text-gray-700 justify-center items-center text-3xl md:text-2xl lg:text-4xl">
                    <div className="flex flex-row" >
                        <h1 className="text-3xl md:text-2xl lg:text-4xl sans-serif mt-4 md:mt-10 ml-10">
                            We provide a list of services at JEGNI LIFE </h1>
                    </div>
                </div>
                <div className="flex text-black justify-center items-center font-bold mt-10 text-gray-700">
                    <p className='text-lg font-light sans-serif'>For a full list of services, please visit our <span className="text-normal text-violet-600 font-bold underline" onClick={navigateToService} >services</span> tab.<br />
                    </p>
                </div>

            </div>
            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
            <Footer />
        </div>
    );
};

export default AboutUs;