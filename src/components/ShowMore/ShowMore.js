import React, { useState } from "react";
import "./index.css"; // Import your CSS file

const ShowMore = ({ items, itemsToShow = 1}) => {
  const [visibleItems, setVisibleItems] = useState(itemsToShow);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsToShow);
  };

  const showLessItems = () => {
    setVisibleItems((prevVisibleItems) =>
      Math.max(prevVisibleItems - itemsToShow, itemsToShow)
    );
  };

  return (
    <div className="show-more-container">
      <div className="show-more-items">
        {items.slice(0, visibleItems).map((item, index) => (
          <div key={index} className="item">
            {/* Render your item content here */}
            {item}
          </div>
        ))}
      </div>
      <div className="button-container">
        {visibleItems >= items.length ? (
          <button className="show-less-button" onClick={showLessItems}>
            Show Less
          </button>
        ) : (
          <button className="show-more-button" onClick={showMoreItems}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowMore;
