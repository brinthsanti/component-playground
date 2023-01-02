import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const Carousel = ({ children, style }) => {
  const containerRef = useRef();
  const [trackWidth, setContainerWidth] = useState(0);
  const [transformRange, setTransformRange] = useState(1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (containerRef.current)
      setContainerWidth(containerRef.current.clientWidth);
  }, []);

  const childCount = React.Children.count(children);
  const cc = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      style: {
        width: `${containerRef.current?.clientWidth}px`,
        display: "inline-block",
      },
    });
  });

  function handleClick(index) {
    const val = -(index * trackWidth);
    setTransformRange(val);
    setActive(index);
  }
  
  function getHandleButtons() {
    const buttons = [];
    for (let i = 0; i < childCount; i++) {
      const classes = classNames({ active: active === i });
      buttons.push(
        <li key={i}>
          <button className={classes} onClick={() => handleClick(i)}>
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  }
  return (
    <div className="carousel" ref={containerRef} style={style}>
      <div
        className="carousel-track"
        style={{
          width: `${trackWidth * childCount}px`,
          transform: `translate3d(${transformRange}px, 0, 0)`,
        }}
      >
        {cc}
      </div>
      <ul className="handles">{getHandleButtons()}</ul>
    </div>
  );
};

export default Carousel;
