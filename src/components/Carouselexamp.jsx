import React, { useState, useEffect} from 'react';
import "./imageslider.css";
import dora from "../Images/dora.jpg";
import journey from "../Images/journey.jpg";
import lost from "../Images/lost.jpg";
import bison from "../Images/bison movie poster.jpg";
import dhurandhar from "../Images/dhurandhar.jpg";
import parasakthi from "../Images/parasakthi.jpg";

export default function Carouselexamp() {

  const images = [dora, journey, lost,bison,dhurandhar,parasakthi];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>❮</button>

      <img
        src={images[current]}
        alt="slide"
        className="slider-img"
      />

      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}
