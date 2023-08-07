import React, { useState } from 'react';
import BtmImgRow from './serviceOnebtmImgRow'

const ThreeColumnImageLayout = () => {

    const [buttonStates, setButtonStates] = useState({
        groupBasedBox1: false,
        groupBasedBox2: false,
        groupBasedBox3: false,
    });


    const handleClick = (buttonId) => {
        setButtonStates((prevState) => ({
            ...prevState,
            [buttonId]: !prevState[buttonId],
        }));
    };

    const groupBasedBox1Text = "Jegni Life helps individuals to find and connect with groups that match their interests and preferences. This can enhance the overall experience of participating in community activities. Participation in group activities can lead to increased social interactions and community involvement. Engaging with others in a shared context can promote a sense of belonging and connectedness.";
    const groupBasedBox2Text = "Engaging in group activities can contribute a sense of independence and personal growth. Additionally, participating in such activities is known to have positive effects on mental health, promoting feelings of happiness and reducing feelings of isolation. Jegni Life focuses on providing a safe and gradual approach to improve one's limits. This approach can help individuals build confidence and comfort while participating in various activities.";
    const groupBasedBox3Text = "Jegni Life offers a range of activities, including recreational activities, community access opportunities, and life skill development. This diverse array of options ensures that participants can engage in activities that align with their interests and personal growth goals. Jegni Life's role involves encouraging and supporting individuals to participate in group-based community activities. This support can play a significant role in motivating individuals who might have reservations about participating.";

    return (
        <div className="px-2 md:px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="text-center">
                    <img
                        src="images/groupbased.png"
                        alt="Image 1"
                        className="w-full h-[402px] mb-2"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.groupBasedBox1 ? groupBasedBox1Text : `${ groupBasedBox1Text.substring(0, 186)} `}
                        <button id="groupBasedBox1" onClick={() => handleClick("groupBasedBox1")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.groupBasedBox1 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>

                {/* Column 2 */}
                <div className="text-center">
                    <img
                        src="images/groupbased4.png"
                        alt="Image 2"
                        className="w-full h-[402px] md:mb-6"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 md:mt-[-12px] text-left">
                        {buttonStates.groupBasedBox2 ? groupBasedBox2Text : `${groupBasedBox2Text.substring(0, 186)} `}
                        <button id="groupBasedBox2" onClick={() => handleClick("groupBasedBox2")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.groupBasedBox2 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>

                {/* Column 3 */}
                <div className="text-center">
                    <img
                        src="images/groupbased5.jpg"
                        alt="Image 3"
                        className="w-full h-[402px] mb-2"
                    />
                    <p className="bg-slate-200 bg-opacity-30 p-4 text-left">
                        {buttonStates.groupBasedBox3 ? groupBasedBox3Text : `${groupBasedBox3Text.substring(0, 179)} `}
                        <button id="groupBasedBox3" onClick={() => handleClick("groupBasedBox3")} className="flex justify-center items-center select-none bg-[#fafafa] text-blue-900 rounded-full border border-2 border-[#F27267] w-[150px] md:h-[30px] mx-20 mb-20 md:mx-36 my-2 md:mb-20">
                            {buttonStates.groupBasedBox3 ? "Read less" : "Read more..."}
                        </button>
                    </p>
                </div>
            </div>
            <BtmImgRow />
        </div>
    );
};

export default ThreeColumnImageLayout;
