import React, { useState, useRef } from "react";
import useOnClickOutside from '../../hooks/useClickOutside';
import './index.css';

export default function Dropdown({ items, children, className, renderItems, trigger = 'hover' }) {
    const [showDropdownItems, setShowDropdownItems] = useState(false);
    const dropdownRef = useRef();
    useOnClickOutside(dropdownRef, handleMouseLeave);
  
  
    function handleClick(event) {
      event.stopPropagation();
      console.log('clicked', event.nativeEvent.currentTarget);
      setShowDropdownItems(!showDropdownItems);
    }
  
    function handleMouseEnter() {
      setShowDropdownItems(true);
    }
  
    function handleMouseLeave() {
      setShowDropdownItems(false);
    }
  
    const prefixClass = "dropdown";
    const classes = [prefixClass, className].filter(Boolean).join(" ");
    const dropdownClasses = [
      `${prefixClass}-items`,
      showDropdownItems ? 'open' : '',
    ].filter(Boolean).join(" ");
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
          className={dropdownClasses}
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
   The transition property in CSS doesn't directly work with the display property,
    so using display: none and display: block won't create a smooth transition effect. 
    The display property doesn't transition between values like opacity or height would.
   */