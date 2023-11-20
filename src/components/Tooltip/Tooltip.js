import React, { useEffect, useRef, useState } from "react";

import "./index.css";
const Tooltip = ({ children, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className="tooltip">{title}</div>}
    </div>
  );
};

export default Tooltip;
