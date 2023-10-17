import React, { useState } from 'react';

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/assets/kits/image1.jpeg',
    '/assets/kits/image2.png',
    '/assets/kits/image3.png'
  ];

  function handleNextImage() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  function handlePreviousImage() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-5 gap-4">
        {images.map((image,index) => (
          <img
          alt={`Image ${index + 1}`}
          src={image}
          className={`w-full h-64 object-cover transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          />
        ))}
      </div>
      <button onClick={handlePreviousImage}>Previous</button>
      <button onClick={handleNextImage}>Next</button>
    </div>
  );
}

export default ImageSlider;
