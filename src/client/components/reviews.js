import React from 'react';

const Reviews = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex text-black justify-center items-center text-3xl md:text-2xl lg:text-4xl">
                <div className="flex flex-row" >
                    <h1 className="text-3xl md:text-2xl lg:text-4xl sans-serif mt-4 md:mt-10 ml-10">
                    What our clients say about us</h1>
                </div>
            </div>
            <div className="flex text-black justify-center items-center font-bold mt-10">
                <p className='text-lg font-light sans-serif'>We believe that some of our expertise are the core factors that bring us together. <br/>
                    <span className='text-lg font-light sans-serif md:ml-24'>Simplicity, Care and Love put us in a great position</span>
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:mt-10 gap-4">
                <div className="h-64 flex flex-col items-center bg-[#372540]">
                    <span className="text-yellow-200 mt-8">★★★★★</span>
                    <p className="max-w-lg text-lg font-weight: 100 mb-5 font-semi leading-normal text-white sans-serif text-left ml-2 mt-14">
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
                    </p>
                    <span className="text-white sans-serif">Dan Desk</span>
                </div>
                <div className="h-64 flex flex-col items-center bg-[#ad9a3b]">
                    <span className="text-yellow-200 mt-8">★★★★★</span>
                    <p className="max-w-lg text-lg font-weight: 100 mb-5 font-semi leading-normal text-white sans-serif ml-2 mt-14">
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
                    </p>
                    <span className="text-white sans-serif">Tan Doris</span>
                </div>
                <div className="h-64 flex flex-col items-center bg-[#7c71a3]">
                    <span className="text-yellow-200 mt-8">★★★★★</span>
                    <p className="max-w-lg text-lg font-weight: 100 mb-5 font-semi leading-normal text-white sans-serif ml-2 mt-14">
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    </p>
                    <span className="text-white sans-serif">Max Lin</span>
                </div>
            </div>
        </div>
    );
};

export default Reviews;