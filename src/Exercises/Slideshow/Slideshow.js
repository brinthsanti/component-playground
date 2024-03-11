import React from "react";
import "./index.css";

export default function Slideshow({ images }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleArrowClick(val) {
    if (val === "next") {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    } else {
      if (activeIndex === 0) {
        setActiveIndex(images.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    }
  }

  return (
    <div className="slideshow">
      {images.map((image) => (
        <Slide
          key={image.id}
          image={image}
          isActive={image.id === `${activeIndex}`}
        />
      ))}
      <div className="controls">
        {images.map((image, index) => (
          <button
            className={`${image.id === `${activeIndex}` ? "active" : ""}`}
            key={image.id}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
      <div className="arrows">
        <div className="next" onClick={() => handleArrowClick("next")}>
          &gt;
        </div>
        <div className="prev" onClick={() => handleArrowClick("prev")}>
          &lt;
        </div>
      </div>
    </div>
  );
}

function Slide({ image, isActive }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <img src={image.download_url} />
    </div>
  );
}
