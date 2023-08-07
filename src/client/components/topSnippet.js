import React, { useState } from 'react';
import DialogForm from './dialogForm';

const TopSnippet = () => {
    
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialogForm = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 bg-[#2e2657] flex items-center justify-center md:justify-start">
                <img src="images/phone.png" className="w-[60px] md:h-10 md:mr-2 md:ml-2 ml-[-50px]" alt="Call" />
                <span className="text-white py-2">1800 800 124</span>
                <span className="hidden sm:inline text-white px-2 py-2">|</span>
            </div>

            <div className="w-full md:w-1/3 bg-[#2e2657] hidden md:flex items-center justify-center md:justify-start">
                <img src="images/email-50.png" className="h-6 ml-[-310px] md:mt-2 md:mr-2" alt="Email" />
                <span className="text-white md:ml-1 py-2">jegnilifeinfo@gmail.com</span>
            </div>

            <div className="w-full md:w-1/3 bg-[#2e2657] p-2 md:pr-10 flex items-center justify-center md:justify-end">
                <button onClick={openDialogForm} className="transform transition-transform duration-300 hover:scale-105 w-[180px] md:w-[220px] h-[30px] flex justify-center items-center select-none bg-[#fafafa] text-blue-900 border border-2 border-[#F27267] py-2 px-4 md:px-6 rounded-full">
                    Get Support Now
                </button>
            </div>
            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
        </div>
    );
};

export default TopSnippet;