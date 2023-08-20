import React, { useState } from 'react';

const AboutusVideo = () => {

    const videoPath = 'images/aboutusVid.mp4';
    const watsAppUrl = `https://wa.me?text=${encodeURIComponent(videoPath)}`;

    const shareViaWatsapp = () => {
        window.open(watsAppUrl, "_blank");
    }

    return (
        <div className="flex-wrap relative">
            <div className="flex flex-col md:flex-row bg-sky-50">
                <div className="md:w-1/1 p-4 rounded-lg overflow-hidden relative">
                    <div className="flex justify-center items-center w-auto h-[300px] md:h-[500px] rounded-lg relative">
                        <video controls width="50%" height="auto" className="rounded-lg" autoplay loop muted>
                            <source src="https://www.jegnilife.com.au/images/aboutusVid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* <img
                            onClick={shareViaWatsapp}
                            src="images/whatsapp.png"
                            alt="WhatsApp Icon"
                            className="absolute top-[110px] md:top-[250px] right-[100px] md:right-[340px] w-6 h-6 md:w-8 md:h-8 object-cover z-10 opacity-90"
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutusVideo