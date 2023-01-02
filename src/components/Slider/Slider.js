import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const Slider = () => {
    const [trackWidth, setTrackWidth] = useState(50);
    const [mouseIn, setMouseIn] = useState(false);
    const sliderRef = useRef();

    useEffect(() => {
        function handleMouseUp(e) {
            setMouseIn(false);
        }

        function handleMouseMove(e) {
            console.log(mouseIn);
            if (!mouseIn) return;
            setWidth(e);
        }

        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseIn]);

    function setWidth(e) {
        const width = sliderRef.current.clientWidth;
        const current = e.clientX;
        setTrackWidth(Math.round((current / width) * 100));
    }

    function handleMouseDown(e) {
        setMouseIn(true);
    }

    function handleClick(e) {
        setWidth(e);
    }
    return (
        <div className="slider" onClick={handleClick} ref={sliderRef}>
            <div className="slider-rail"></div>
            <div className="slider-track" style={{ width: `${trackWidth}%` }}></div>
            <div
                className="slider-handle"
                onMouseDown={handleMouseDown}
                style={{ left: `${trackWidth}%` }}
            ></div>
        </div>
    );
};

export default Slider;
