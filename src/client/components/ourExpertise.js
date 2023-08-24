import React from 'react';

const OurExpertise = () => {
    return (
        // bg-[#372540] 
        <div className="mx-auto bg-[#E8F2FF]"> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center mt-4">
                    <img className="w-[70px] h-[70px] md:mt-10 bg-none" src="images/service.png" alt="Service" /> 
                    <p className="mt-[10px] ml-[5px] text-indigo-900 text-lg font-bold">High quality client support</p>
                    <p className="mt-[10px] ml-[-0px] text-indigo-900 text-lg font-bold">& care</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[70px] h-[70px] md:mt-10 bg-none" src="images/clientCen.png" alt="Centric" />
                    {/* <p className="mt-[10px] text-indigo-900 text-lg font-bold">Client centric approach towards <br/> care & recovery</p> */}
                    <p className="mt-[10px] ml-[-25px] text-indigo-900 text-lg font-bold">Client centric approach</p>
                    {/* <p className="mt-[10px] ml-[-10px] text-indigo-900 text-lg font-bold">care & recovery</p> */}
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[70px] h-[70px] md:mt-10 bg-none" src="images/customer.png" alt="Customer" />
                    <p className="mt-[10px] ml-[10px] text-indigo-900 text-lg font-bold">Empower clients & fostering</p>
                    <p className="mt-[10px] ml-[-05px] text-indigo-900 text-lg font-bold">happiness</p>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <img className="w-[70px] h-[70px] md:mt-10 bg-none" src="images/connecting.png" alt="Connect" />
                    <p className="mt-[10px] ml-[5px] text-indigo-900 text-lg font-bold">Connecting with the clients</p>
                    <p className="mt-[10px] ml-[-5px] text-indigo-900 text-lg font-bold">regularly</p>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <img className="w-[70px] h-[70px] mt-[-10px] md:mt-10 bg-none" src="images/task.png" alt="Task" />
                    <p className="mt-[10px] ml-[5px] text-indigo-900 text-lg font-bold">Efficiently managing tasks</p>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <img className="w-[70px] h-[70px] mt-[-15px] md:mt-10 bg-none" src="images/careEmp.png" alt="Care" />
                    <p className="mt-[10px] ml-[-10px] text-indigo-900 text-lg font-bold">Great care with empathy</p>
                    <p className="mt-[10px] ml-[5px] text-indigo-900 text-lg font-bold"> & empowerment</p>
                </div>
            </div>
        </div>

    );
};

export default OurExpertise;