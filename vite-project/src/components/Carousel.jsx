
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const handleSlideClick = (idx) => {
    setSlide(idx);
  };

  return (
    <div>
      <div class="mt-6 px-12">
        <p class="font-extrabold text-3xl">What Tekamp Students Are Saying</p>
        <p>See some testimonials from our former students that have benfitted greatly from the bootcamp.</p>
      </div>
      <div className="carousel">

         
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
        {data.map((item, idx) => {

          return (

            <div key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} onClick={() => handleSlideClick(idx)}>

              <img src={item.src} alt={item.alt} />
              <p className="title mt-4 font-medium md:font-semibold text-center" key={idx}>"{item.comment}"</p>
              <p key={idx} class="font-extrabold mt-4 text-center">{item.name}</p>
            </div>
          );
        })}
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        <span className="indicators">

          {data.map((_, idx) => {
            return (
              <button
              key={idx}
              className={slide === idx ? "indicator" : "indicator indicator-inactive"}
              onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </div>

  );
};

export default Carousel;
