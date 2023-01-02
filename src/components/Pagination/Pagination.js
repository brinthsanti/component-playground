import React, { useEffect, useState } from "react";
import classNames from "classnames";
import LeftOutlined from "@ant-design/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/RightOutlined";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";

import "./index.css";

const prefixClass = "pagination-item";
const activeClass = `${prefixClass}-active`;
const Pagination = ({ total, defaultCurrent }) => {
  const [activeItem, setActiveItem] = useState(defaultCurrent);
  const [showPrevious, setShowPrevious] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const [midStart, setMidStart] = useState(0);
  const [midEnd, setMidEnd] = useState(0);

  useEffect(() => {
    const endThreshold = total - 4;
    if (activeItem <= 4) {
      setShowPrevious(false);
      setShowNext(true);
      return;
    }

    if (activeItem >= endThreshold) {
      setShowNext(false);
      setShowPrevious(true);
      return;
    }

    if(activeItem > 4 && activeItem < endThreshold){
      setShowPrevious(true);
      setShowNext(true);
    }

  }, [activeItem]);


  useEffect(()=>{
   if(activeItem > 4 && activeItem < (total - 4)){
    setMidStart(activeItem-2);
    setMidEnd(activeItem+2);
   }
  }, [activeItem]);


  function handleChange(action) {
    if (action === "increment") {
      if (activeItem === total) {
        return;
      }
      setActiveItem((activeItem) => activeItem + 1);
    } else {
      if (activeItem === 1) {
        return;
      }
      setActiveItem((activeItem) => activeItem - 1);
    }
  }

  function handlePreviousNext(action){
    const activeItem = Math.floor(((midStart + 5) + (midEnd+5))/2);

    if(action === 'previous'){
      const activeItem = Math.floor(((midStart - 5) + (midEnd-5))/2) || 1;
      setMidStart(midStart => midStart - 5);
      setMidEnd(midEnd => midEnd - 5);
      setActiveItem(activeItem)
      return;
    }

    setMidStart(midStart => midStart + 5);
    setMidEnd(midEnd => midEnd + 5);
    setActiveItem(activeItem)
  }
  
  function renderItems() {
    const previousItems = [];
    const middleItems = [];
    const nextItems = [];

    if (activeItem <= 4) {
      for (let i = 1; i <= 4; i++) {
        previousItems.push(
          <li
            key={i}
            className={classNames(prefixClass, {
              [activeClass]: i === activeItem,
            })}
            onClick={() => setActiveItem(i)}
          >
            {i}
          </li>
        );
      }
    } 

    if (activeItem >= (total - 4)) {
      for (let i = total-4; i <= total; i++) {
        nextItems.push(
          <li
            key={i}
            className={classNames(prefixClass, {
              [activeClass]: i === activeItem,
            })}
            onClick={() => setActiveItem(i)}
          >
            {i}
          </li>
        );
      }
    } 

    if(activeItem > 4 && activeItem < (total - 4)){
      for (let i = midStart; i <= midEnd; i++) {
        middleItems.push(
          <li
            key={i}
            className={classNames(prefixClass, {
              [activeClass]: i === activeItem,
            })}
            onClick={() => setActiveItem(i)}
          >
            {i}
          </li>
        );
      }
    }

  return <>
      {previousItems}
      {showPrevious && <Previous onClick={()=>handlePreviousNext('previous')}/>}
      {middleItems}
      {showNext && <Next onClick={handlePreviousNext} />}
      {nextItems}
  </>
  }

  console.log(activeItem);
  return (
    <ul className="pagination">
      <li
        className={classNames(prefixClass, {
          ["pagination-disabled"]: activeItem === 1,
        })}
        onClick={handleChange}
      >
        <LeftOutlined />
      </li>
      {renderItems()}
      <li
        className={classNames(prefixClass, {
          ["pagination-disabled"]: activeItem === total,
        })}
        onClick={() => handleChange("increment")}
      >
        <RightOutlined />
      </li>
    </ul>
  );
};

export default Pagination;

const Previous = ({
  onClick,
}) => {
  const [toggle, setToggle] = useState(false);
  function handlePrevious() {
    onClick();
   }
  return (
    <li
      className={classNames(prefixClass, "pagination-item-ellipsis")}
      onClick={handlePrevious}
      onMouseLeave={() => setToggle(false)}
      onMouseEnter={() => setToggle(true)}
    >
      {toggle ? <DoubleLeftOutlined /> : <span>•••</span>}
    </li>
  );
};

const Next = ({
  onClick,
}) => {
  const [toggle, setToggle] = useState(false);
  function handleNext() {
    onClick();
   }
  return (
    <li
      className={classNames(prefixClass, "pagination-item-ellipsis")}
      onClick={handleNext}
      onMouseLeave={() => setToggle(false)}
      onMouseEnter={() => setToggle(true)}
    >
      {toggle ? <DoubleRightOutlined /> : <span>•••</span>}
    </li>
  );
};
