import React from "react";

const Article = ({ image, name, description, position }) => {
  const imagePosition = position === "left" ? "order-1" : "order-2";
  const textPosition = position === "left" ? "order-2" : "order-1";

  return (
    <div className="w-full mx-4 my-2 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
      <div className={`w-full lg:w-1/2 h-64 ${imagePosition}`}>
        <img
          src={image}
          className="w-full h-60 object-cover rounded-lg"
          alt="Article"
        />
      </div>
      <div className={`w-full lg:w-1/2 p-6 ${textPosition}`}>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Article;