import React, { useState } from 'react';
import BtmImgRow from './serviceOnebtmImgRow'

const ThreeColumnImageLayout = () => {

    const [buttonStates, setButtonStates] = useState({
        communityBox1: false,
        communityBox2: false,
        communityBox3: false,
    });


    const handleClick = (buttonId) => {
        setButtonStates((prevState) => ({
            ...prevState,
            [buttonId]: !prevState[buttonId],
        }));
    };

    const communityBox1Text = "Community Support offers a range of services to empower individuals and facilitate their active involvement in the community. Our dedicated Support Connection ensures that you understand all aspects of the support plan and provides ongoing management assistance to ensure your needs are met effectively. We provide comprehensive life transition planning, including personalized mentoring and skill development, helping you navigate life changes with confidence and resilience. Additionally, our team is here to assist you with accommodation and tenancy obligations, ensuring you have a stable and comfortable living environment.";
    const communityBox2Text = "We are here to help you with decision-making, daily planning, shopping, and setting appointments, ensuring you have the support you need to manage your daily life effectively. Our safe and convenient transport services are scheduled in advance to take you to school, work, medical appointments, local shopping centers, and around your community, making sure you can access essential services and activities without worry. Socializing and connecting with family and friends are essential aspects of our support services, and we also offer guidance in bill payments, helping you stay on top of your financial responsibilities. We provide assistance with personal cares to ensure you feel comfortable and supported in your daily routines. Household chores can be time-consuming and challenging for some, but we are here to lend a hand.";
    const communityBox3Text = "We provide assistance with cleaning, drying, washing, and vacuuming, ensuring your living space is tidy and comfortable. Meal preparation and planning are made easier with our support, ensuring you have nutritious and delicious meals that meet your dietary needs. We also offer assistance with grocery shopping to ensure you have all the essential items you need. Our team is dedicated to helping you utilize various community resources, including the library and other services that can enhance your personal and career growth. Whether it's accessing educational materials or exploring career opportunities, we are here to guide you. We offer assistance in various recreational activities, such as swimming, gym sessions and using public transport, ensuring you can participate in these activities with ease and enjoyment.";

    return (
        <div className="px-2 md:px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {/* Column 1 */}
                <div className="text-center">
                    <img
                        src="images/communitysupport.jpg"
                        alt="Image 1"
                        className="w-full h-[402px] mb-2"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.communityBox1 ? communityBox1Text : `${communityBox1Text.substring(0, 206)} `}
                        <button id="communityBox1" onClick={() => handleClick("communityBox1")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.communityBox1 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>

                {/* Column 2 */}
                <div className="text-center">
                    <img
                        src="images/comSupprt.png"
                        alt="Image 2"
                        className="w-full h-[402px] md:mb-6"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 md:mt-[-12px] text-left">
                        {buttonStates.communityBox2 ? communityBox2Text : `${communityBox2Text.substring(0, 210)} `}
                        <button id="communityBox2" onClick={() => handleClick("communityBox2")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.communityBox2 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>

                {/* Column 3 */}
                <div className="text-center">
                    <img
                        src="images/commSupport3.png"
                        alt="Image 3"
                        className="w-full h-[402px] mb-2"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.communityBox3 ? communityBox3Text : `${communityBox3Text.substring(0, 214)} `}
                        <button id="communityBox3" onClick={() => handleClick("communityBox3")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.communityBox3 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>
            </div>
            <BtmImgRow />
        </div>
    );
};

export default ThreeColumnImageLayout;
