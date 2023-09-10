import React from "react";

const InfoContact = () => {
    return (
        <div className="relative flex justify-center font-WorkSans pt-12">
            <div className="relative h-96 w-full flex justify-center">
                <img
                    src={process.env.PUBLIC_URL + "/assets/agriculture.png"}
                    className="absolute h-full w-full object-cover"
                    alt="field"
                />
                <div className="absolute w-full h-full bg-[#779341] bg-opacity-60"></div>
                <div className="absolute w-11/12 md:w-6/12 h-full flex flex-col text-center text-white items-center justify-center gap-6">
                    <h1 className="text-4xl font-bold">Ready to get started? Get your Finance out of the way</h1>
                    <p> If you deliver enough value, making money becomes the easy part. Why should you be stressful? Let us make this easier for you.</p>
                    <button className="w-auto px-8 py-3 bg-nav rounded-3xl shadow-lg">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoContact;
