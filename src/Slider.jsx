import React, { useState } from "react";
import "./style/Slider.css";

export default function Slider({
  images,
  closeSlider,
  isSliderOpen,
  setIsSliderOpen,
  currentImage,
  setCurrentImage,
  currentIndex,
  setCurrentIndex,
}) {
  const nextImage = () => {
    // move to next image by adding 1 to the current index
    if (currentIndex === images.length) {
      setCurrentImage(() => "photo" + currentIndex);
    } else {
      setCurrentImage(() => "photo" + (currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevImage = () => {
    // move to previous image by decreasing 1 from th current index
    if (currentIndex === 1) {
      setCurrentImage(() => "photo" + currentIndex);
    } else {
      setCurrentImage(() => "photo" + (currentIndex - 1));
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className="slider-warpper"
      style={{ display: isSliderOpen ? "block" : "none" }}
    >
      <div className="slider-content">
        <i
          className="fa-solid fa-angle-left previous-button"
          onClick={() => prevImage()}
        ></i>
        <img
          className="slider-image"
          src={`src/assets/images/${currentImage}.jpg`}
          alt=""
        />
        <i
          class="fa-solid fa-angle-right next-button"
          onClick={() => nextImage()}
        ></i>
      </div>
      <i
        class="fa-solid fa-xmark close-button"
        onClick={() => closeSlider()}
      ></i>
    </div>
  );
}
