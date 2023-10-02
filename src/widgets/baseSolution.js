import React from "react";

const BaseSolution = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col gap-4 w-full rounded-lg px-6 py-10 font-WorkSans">
            <div className="flex">
                <div className="p-4 bg-primary text-white">{icon}</div>
            </div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>
                {description}
            </p>
        </div>
    );
};

export default BaseSolution;
