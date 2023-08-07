import React, { useState } from 'react';
import BtmImgRow from './serviceOnebtmImgRow'

const ThreeColumnImageLayout = () => {

    const [buttonStates, setButtonStates] = useState({
        communityNursingBox1: false,
        communityNursingBox2: false,
        communityNursingBox3: false,
    });


    const handleClick = (buttonId) => {
        setButtonStates((prevState) => ({
            ...prevState,
            [buttonId]: !prevState[buttonId],
        }));
    };

    const communityNursingBox1Text = "Individuals with chronic health conditions, such as diabetes, heart disease, respiratory conditions, and more, can greatly benefit from the nursing support provided by this program. Jegni Life extends its services to individuals with disabilities, acknowledging that their unique needs may require nursing assistance for performing daily activities.";
    const communityNursingBox2Text = "For activities of daily living - Nursing support focuses on helping individuals with activities of daily living (ADLs), which include tasks like bathing, dressing, medication management, wound care and more. We offers low-intensity nursing services, which means the level of care provided is appropriate for individuals with relatively stable conditions who do not require high levels of medical intervention.";
    const communityNursingBox3Text = "The nursing support provided by Jegni Life takes a holistic approach, addressing both physical and emotional well-being to improve the overall quality of life for participants. In addition to assisting with existing health conditions, the nursing support program may also offer preventive care measures to help individuals manage their conditions and prevent potential complications. The services are typically provided in the community setting, allowing individuals to receive care in their own homes or other familiar environments.";

    return (
        <div className="px-2 md:px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="text-center">
                    <img
                        src="images/communityNursing.jpg"
                        alt="Image 1"
                        className="w-full h-[402px] mb-2"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.communityNursingBox1 ? communityNursingBox1Text : `${ communityNursingBox1Text.substring(0, 192)} `}
                        <button id="communityNursingBox1" onClick={() => handleClick("communityNursingBox1")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.communityNursingBox1 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>

                {/* Column 2 */}
                <div className="text-center">
                    <img
                        src="images/comNursing3.png"
                        alt="Image 2"
                        className="w-full h-[402px] md:mb-6"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 md:mt-[-12px] text-left">
                        {buttonStates.communityNursingBox2 ? communityNursingBox2Text : `${communityNursingBox2Text.substring(0, 192)} `}
                        <button id="communityNursingBox2" onClick={() => handleClick("communityNursingBox2")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.communityNursingBox2 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>

                {/* Column 3 */}
                <div className="text-center">
                    <img
                        src="images/commNursing4.jpg"
                        alt="Image 3"
                        className="w-full h-[402px] mb-2"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.communityNursingBox3 ? communityNursingBox3Text : `${communityNursingBox3Text.substring(0, 192)} `}
                        <button id="communityNursingBox3" onClick={() => handleClick("communityNursingBox3")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.communityNursingBox3 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>
            </div>
            <BtmImgRow />
        </div>
    );
};

export default ThreeColumnImageLayout;
