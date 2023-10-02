import React from "react";

const Article = ({ image, name, price, description }) => {
  const handleMouseOver = () => {
    console.log("L'utilisateur survole l'article");
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
      onMouseOver={handleMouseOver}
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <h2 className="text-lg font-bold mt-4">{name}</h2>
      <p className="text-gray-500 mt-2">{price}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default Article;