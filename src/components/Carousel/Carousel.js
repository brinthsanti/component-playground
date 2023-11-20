import React, { useEffect, useRef, useState } from "react";
import "./index.css";

function Carousel({ children, width, auto = false, delay = 1000 }) {
  const [translate, setTranslate] = useState(0);

  function handleClick(index) {
    setTranslate(index * width);
  }

  // auto functionality
  useEffect(() => {
    let intervalId;
    const childCount = React.Children.count(children);
    if (auto) {
      let counter = 0;
      intervalId = setInterval(() => {
        setTranslate(counter * width);
        if (counter === childCount - 1) {
          counter = 0;
          return;
        }
        counter++;
      }, delay);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const childCount = React.Children.count(children);

  return (
    <div
      className="carousel"
      style={{
        width: `${width}px`
      }}
    >
      <div
        className="carousel_track"
        style={{
          width: `${childCount * width}px`,
          transform: `translateX(-${translate}px)`
        }}
      >
         {React.Children.map(children, child =>
        <div style={{width: `${width}px`}}>
          {child}
        </div>
      )}
      </div>
      <div className="carousel_handles">
        {Array(childCount)
          .fill("_")
          .map((d, index) => {
            return <button onClick={() => handleClick(index)}></button>;
          })}
      </div>
    </div>
  );
}

export default Carousel;
