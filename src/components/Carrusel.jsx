import React, { useState, useEffect, useRef } from "react";

const Carrusel = () => {
  // Array de imágenes y frases
  const images = ["fondo1.jpg", "fondo2.avif", "fondo3.jpg", "fondo4.jpg"];
  const frases = [
    "Flores que hablan por ti.",
    "Haz cada momento inolvidable.",
    "La belleza natural en cada pétalo.",
    "Tu floristería de confianza.",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        activeIndex * 100
      }%)`;
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full overflow-hidden h-[400px] lg:h-[300px] font-fuen">
      {/* Carrusel de imágenes */}
      <div
        ref={carouselRef}
        className="flex w-full h-full transition-transform ease-in-out"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="flex-shrink-0 object-cover w-full h-full"
          />
        ))}
      </div>

      {/* Texto centrado */}
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <h2 className="px-4 py-2 text-2xl font-bold text-center text-white bg-black rounded bg-opacity-40">
          {frases[activeIndex]}
        </h2>
      </div>

      {/* Controles */}
      <button
        onClick={prevImage}
        className="absolute p-3 text-white transition duration-500 transform -translate-y-1/2 bg-black rounded-full top-1/2 left-4 opacity-60 hover:opacity-100"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute p-3 text-white transition duration-500 transform -translate-y-1/2 bg-black rounded-full top-1/2 right-4 opacity-60 hover:opacity-100"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carrusel;
