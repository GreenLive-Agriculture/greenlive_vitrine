import React, { useEffect, useState } from "react";

const Article = ({ folderPath, name, description, position }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imagePosition = position === "left" ? "order-1" : "order-2";
  const textPosition = position === "left" ? "order-2" : "order-1";

  useEffect(() => {
    const loadImage = async () => {
      const images = await getImagesFromFolder(folderPath);
      if (images.length > 0) {
        let index = 0;
        const timer = setInterval(() => {
          setImageSrc(images[index]);
          index++;
          if (index === images.length) {
            clearInterval(timer);
            setIsLoading(false);
          }
        }, 3000);
      } else {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [folderPath]);

  const getImagesFromFolder = async (folderPath) => {
    const response = await fetch(folderPath);
    const fileNames = await response.json();
    return fileNames
      .filter((fileName) => fileName.startsWith("image"))
      .map((fileName) => `${folderPath}/${fileName}`);
  };

  return (
    <div className="w-full mx-4 my-2 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
      <div className={`w-full lg:w-1/2 h-64 ${imagePosition}`}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <img
            src={imageSrc}
            className="w-full h-60 object-cover rounded-lg mx-auto my-4"
            alt="Article"
          />
        )}
      </div>
      <div className={`w-full lg:w-1/2 p-6 ${textPosition}`}>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Article;