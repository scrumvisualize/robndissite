import React, { useState } from 'react';
import BtmImgRow from './serviceOnebtmImgRow'

const ThreeColumnImageLayout = () => {

    const [buttonStates, setButtonStates] = useState({
        serviceBox1: false,
        serviceBox2: false,
        serviceBox3: false,
    });


    const handleClick = (buttonId) => {
        setButtonStates((prevState) => ({
            ...prevState,
            [buttonId]: !prevState[buttonId],
        }));
    };

    const serviceBox1Text = "Our organization, we provide a holistic and empowering support system for individuals with disabilities or special needs, fostering an environment where they can thrive and conquer challenges. This approach not only promotes their personal growth but also encourages social inclusion and improves overall well-being. By collaborating with healthcare providers, therapists, and other specialists, we ensure clients receive comprehensive and tailored care and services.";
    const serviceBox2Text = "We ensure regular monitoring and evaluation of services to maintain the quality of care provided and to ensure the care plans are effective. It allows for identifying areas of improvement and making necessary adjustments to optimize the care and support provided to individuals. Facilitating community integration and supporting clients in social activities and events can have a positive impact on their lives. It promotes social interaction, builds connections, and fosters a sense of belonging.";
    const serviceBox3Text = "Our ethical and confidential approach respects clients' privacy, fostering trust in community integration. Our compassionate and qualified team caters to diverse needs, empowering clients for greater independence and improved quality of life. Assisting with daily activities ensures well-being and comfort, making a significant difference in clients' lives.";

    return (
        <div className="px-2 md:px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {/* Column 1 */}
                <div className="text-center">
                    <img
                        src="images/supportIndependentLiving.jpg"
                        alt="Image 1"
                        className="w-full h-[419px] mb-2"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.serviceBox1 ? serviceBox1Text : `${serviceBox1Text.substring(0, 191)} `}
                        <button id="serviceBox1" onClick={() => handleClick("serviceBox1")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.serviceBox1 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>

                {/* Column 2 */}
                <div className="text-center">
                    <img
                        src="images/sil1.png"
                        alt="Image 2"
                        className="w-full h-[402px] md:mb-6"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.serviceBox2 ? serviceBox2Text : `${serviceBox2Text.substring(0, 188)} `}
                        <button id="serviceBox2" onClick={() => handleClick("serviceBox2")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.serviceBox2 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>

                {/* Column 3 */}
                <div className="text-center">
                    <img
                        src="images/trust3.png"
                        alt="Image 3"
                        className="w-full h-[419px] mb-2"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.serviceBox3 ? serviceBox1Text : `${serviceBox3Text.substring(0, 192)} `}
                        <button id="serviceBox3" onClick={() => handleClick("serviceBox3")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.serviceBox3 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>
            </div>
            <BtmImgRow />
        </div>
    );
};

export default ThreeColumnImageLayout;
