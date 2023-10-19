import React, { useEffect, useState } from "react";
import ImageSlider from "../widgets/imageslide"

import { useMediaQuery } from 'react-responsive';

const Article = ({ images, name, description, position }) => {
  const imagePosition = position === "left" ? "order-1" : "order-2";
  const textPosition = position === "left" ? "order-2" : "order-1";

  const [currentImage, setCurrentImage] = useState(0);

  function handleNextImage() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  function handlePreviousImage() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="gre-aeticle my-2 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row" style={{ minWidth: '200px' }} >
      <div className={`relative w-full lg:w-1/2 h-84 ${imagePosition}`}>
          {images.map((image,index) => (
          <img
            key={index}
            alt={`Image ${index + 1}`}
            src={image}
            className={`w-full h-80 object-contain rounded-lg mx-auto my-4 transition-opacity duration-3000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          />
        ))}
        <div>
        <button onClick={handleNextImage} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
    </button>
        </div>
      </div>
      <div className={`w-full lg:w-1/2 p-6 ${textPosition}`}>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Article;