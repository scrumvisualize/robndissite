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
                <div className="md:w-1/1 p-4 rounded-lg overflow-hidden relative mx-auto ">
                    <div className="flex justify-center items-center mx-auto ml-0 w-[348px] md:w-[805px] h-[250px] md:h-[400px] rounded-lg relative">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/4HkEC43t6zo"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutusVideo