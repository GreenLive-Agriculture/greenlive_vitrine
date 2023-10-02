import React from "react";

const Objectif = ({ solutionimage, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="w-full h-1/2 overflow-hidden">
        <img
          src={solutionimage}
          className="w-full h-full object-cover"
          alt="solution"
        />
      </div>
      <div className="w-full h-1/2 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
      </div>
    </div>
  );
};

export default Objectif;

