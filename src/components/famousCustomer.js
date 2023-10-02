import React from "react";

const FamousCustomer = () => {
    for (let index = 1; index <= 5; index++) {
        <img
            src={
                process.env.PUBLIC_URL +
                `/assets/famousCustomers/fc${index}.png`
            }
            className="h-10 object-contain"
            alt="stat_img"
        />;
    }

    return (
        <div className="flex p-6 justify-center font-WorkSans pt-12">
            <div className="flex flex-col w-full lg:w-10/12 justify-center items-center gap-6">
                <h1 className="text-4xl text-center font-bold">
                    Ceux qui nous soutiennent
                </h1>
                <div className="flex justify-between overflow-x-hidden w-full">
                    <div className="flex w-full justify-between overflow-x-auto [&>div]:flex-shrink-0 gap-8">
                        {Array.apply(1, Array(4)).map(function (x, i) {
                            return (
                                <img
                                    key={i}
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/assets/famousCustomers/fc${i+1}.JPEG`
                                    }
                                    className="object-contain"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamousCustomer;
