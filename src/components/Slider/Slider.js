import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const RangeSlider = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const [dragging, setDragging] = useState(false);
    const sliderRef = useRef(null);
  
    const handleMouseDown = () => {
      setDragging(true);
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    const handleMouseMove = (event) => {
      if (dragging) {
        const sliderRect = sliderRef.current.getBoundingClientRect();
        const percentage = (event.clientX - sliderRect.left) / sliderRect.width;
        const newValue = Math.min(100, Math.max(0, percentage * 100)); // to maintain slider from 0 to 100
  
        setSliderValue(newValue);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [dragging]);
  
    return (
      <div
        className="custom-range-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
      >
        <div
          className="slider-track"
          style={{ width: `${sliderValue}%` }}
        ></div>
        <div className="slider-thumb" style={{ left: `${sliderValue}%` }}></div>
        <p>Slider Value: {sliderValue}</p>
      </div>
    );
  };

export default RangeSlider;
