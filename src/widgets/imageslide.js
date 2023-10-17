import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center" style={{ textAlign: 'center' , display:'inline-block', verticalAlign:'middle'}} >
      <div className="grid grid-cols-5 gap-4">
        {images.map((image,index) => (
          <img
            key={index}
            alt={`Image ${index + 1}`}
            src={image}
            className={`w-full h-60 object-cover rounded-lg mx-auto my-4 transition-opacity duration-500 ${
              index === currentImage ? 'opacity-100' : 'opacity-0 hidden'
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