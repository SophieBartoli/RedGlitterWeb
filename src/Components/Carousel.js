import React, { useState, useEffect, useRef, useCallback } from "react";
import slideUne from "../Assets/Slide1.webp";
import slideDeux from "../Assets/Slide2.webp";
import slideTrois from "../Assets/Slide3.webp";
import slideQuatre from "../Assets/Slide4.webp";
import slideCinq from "../Assets/Slide5.webp";



const images = [slideUne, slideDeux, slideTrois, slideQuatre, slideCinq];


const slides = [
  images[images.length - 1],
  ...images,
  images[0], 
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);
  const trackRef = useRef(null);

  const slideCount = slides.length;

  const goToNext = useCallback(() => {
  if (currentIndex >= slideCount - 1) return;
  setCurrentIndex((prev) => prev + 1);
}, [currentIndex, slideCount]);

  const goToPrevious = () => {
    if (currentIndex <= 0)
    setCurrentIndex((prev) => prev - 1);
  };


 useEffect(() => {
  intervalRef.current = setInterval(goToNext, 5000);
  return () => clearInterval(intervalRef.current);
}, [goToNext]);
  
  const handleTransitionEnd = () => {
    if (currentIndex === slideCount - 1) {
      
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      
      setIsTransitioning(false);
      setCurrentIndex(slideCount - 2);
    }
  };

  
  useEffect(() => {
    if (!isTransitioning) {
      
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        ref={trackRef}
        style={{
          width: `${slideCount * 100}%`,
          transform: `translateX(-${currentIndex * (100 / slideCount)}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="carousel-image"
            style={{ width: `${100 / slideCount}%` }}
          />
        ))}
      </div>
      <button className="prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;