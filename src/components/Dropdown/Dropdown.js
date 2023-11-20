import React, { useState, useRef } from "react";
import useOnClickOutside from '../../hooks/useClickOutside';
import './index.css';

export default function Dropdown({ items, children, className, renderItems, trigger = 'hover' }) {
    const [showDropdownItems, setShowDropdownItems] = useState(false);
    const dropdownRef = useRef();
    useOnClickOutside(dropdownRef, handleMouseLeave);
  
  
    function handleClick() {
      setShowDropdownItems(!showDropdownItems);
    }
  
    function handleMouseEnter() {
      setShowDropdownItems(true);
    }
  
    function handleMouseLeave() {
      setShowDropdownItems(false);
    }
  
    const prefixClass = "appdropdown";
    const classes = [prefixClass, className].filter(Boolean).join(" ");
    return (
      <div
        className={classes}
        onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
        onMouseLeave={trigger === 'hover' ? handleMouseLeave : undefined}
        onClick={trigger === 'click' ? handleClick : undefined}
        ref={dropdownRef}
      >
        {children}
        <div
          className={`${prefixClass}-items`}
          style={{
            // display: showDropdownItems ? "block" : "none",
            opacity: showDropdownItems ? 1 : 0,
          }}
        >
          {items.map((item) => renderItems(item))}
        </div>
      </div>
    );
  }
  
 export function DropdownItem({ title }) {
    return <div className="appdropdown-item">{title}</div>;
  }
  
  /**
   The transition property in CSS doesn't directly work with the display property, so using display: none and display: block won't create a smooth transition effect. The display property doesn't transition between values like opacity or height would.
   */