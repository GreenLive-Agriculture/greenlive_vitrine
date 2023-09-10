import React from "react";

const Statistic = () => {
    return (
        <div className="flex flex-col w-full items-center font-WorkSans py-10 gap-6">
            <div className="flex flex-col w-full lg:w-10/12 text-center text-4xl font-bold p-6">
                Couverture mondiale et résultats prouvés
            </div>
            <div className="relative w-full h-[30rem] flex">
                <img
                    src={process.env.PUBLIC_URL + "/assets/world.png"}
                    className="absolute w-full h-full object-cover object-top"
                    alt="world"
                />
                <div className="absolute w-full h-full flex flex-col items-center gap-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 w-full lg:w-10/12 mt-6 gap-4 justify-center">
                        <div className="w-full md:w-auto flex justify-center">
                            <div className="w-40 md:w-48 px-6 py-4 bg-white rounded-md flex flex-col text-center shadow-lg">
                                <h1 className="text-lg sm:text-2xl font-bold">
                                    200+
                                </h1>
                                <p className="text-xs sm:text-sm">
                                    Expertise agricoles
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-auto flex justify-center">
                            <div className="w-40 md:w-48 px-6 py-4 bg-white rounded-md flex flex-col text-center shadow-lg">
                                <h1 className="text-lg sm:text-2xl font-bold">
                                    200+
                                </h1>
                                <p className="text-xs sm:text-sm">
                                    Expertise agricoles
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-auto flex justify-center">
                            <div className="w-40 md:w-48 px-6 py-4 bg-white rounded-md flex flex-col text-center shadow-lg">
                                <h1 className="text-lg sm:text-2xl font-bold">
                                    200+
                                </h1>
                                <p className="text-xs sm:text-sm">
                                    Expertise agricoles
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-auto flex justify-center">
                            <div className="w-40 md:w-48 px-6 py-4 bg-white rounded-md flex flex-col text-center shadow-lg">
                                <h1 className="text-lg sm:text-2xl font-bold">
                                    200+
                                </h1>
                                <p className="text-xs sm:text-sm">
                                    Expertise agricoles
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full lg:w-10/12 gap-4 md:gap-8 lg:gap-12 overflow-x-auto">
                        <div className="flex flex-col items-center w-[60rem] bg-white p-6 rounded-md gap-4 shadow-md">
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/assets/image1.png"
                                }
                                className="w-full h-64 object-cover"
                                alt="stat_img"
                            />
                            <p className="font-semibold">Augmentation de la productivité</p>
                        </div>
                        <div className="flex flex-col items-center w-[60rem] bg-white p-6 rounded-md gap-4 shadow-md">
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/assets/image1.png"
                                }
                                className="w-full h-64 object-cover"
                                alt="stat_img"
                            />
                            <p className="font-semibold">Augmentation de la productivité</p>
                        </div>
                        <div className="flex flex-col items-center w-[60rem] bg-white p-6 rounded-md gap-4 shadow-md">
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/assets/image1.png"
                                }
                                className="w-full h-64 object-cover"
                                alt="stat_img"
                            />
                            <p className="font-semibold">Augmentation de la productivité</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
