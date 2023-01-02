import React, { useState } from "react";
import "./index.css";

const Tabs = ({ items, defaultActiveKey }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const [inkbarWidth, setInkbarWidth] = useState(null);
  const [inkbarLeft, setInkbarLeft] = useState(null);
  const content = items.find((item) => item.key === activeKey);

  function handleClick(e, key) {
    const width = e?.nativeEvent?.srcElement?.clientWidth;
    setInkbarWidth(width)
    setActiveKey(key);
    setInkbarLeft(e.target.offsetLeft);
  }

  return (
    <div className="tabs">
      <div className="tabs-nav"
      >
        <div className="nav-container">
          {items.map((item) => (
            <div
              key={item.key}
              className="tab"
              onClick={(e) => handleClick(e, item.key)}
            >
              {item.label}
            </div>
          ))}
          <div className="ink-bar" style={{width: inkbarWidth, left : inkbarLeft}}></div>
        </div>
      </div>
      <div className="content-container">{content?.children}</div>
    </div>
  );
};

export default Tabs;
