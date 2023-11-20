import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./index.css";

const AutoComplete = ({
  className,
  placeholder,
  style,
  width,
  options = [],
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const isIncludes = options.map(option => option.label).includes(searchText);
    if (!searchText || isIncludes) {
      setSuggestions([]);
      return;
    }

    //  const suggestion = options.filter((val) => val.includes(inputValue)); // This will not work bcoz of case sensitivity.
    const suggestion = options.filter(
      (data) =>
        data.label.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setSuggestions(suggestion);
  }, [searchText]);

  function handleInput(e) {
    const searchText = e.target.value;
    setSearchText(searchText);
  }

  function handleClick(e, label){
    setSearchText(label);
  }

  const prefixClass = "auto-complete";
  const classes = classNames([prefixClass, className]);
  return (
    <div className={classes} style={{ ...style, width: `${width}px` }}>
      <div className="auto-complete-input-container">
        <input
          type="text"
          placeholder={placeholder}
          onInput={handleInput}
          value={searchText}
        />
        {suggestions.length > 0 &&(
          <div className="auto-complete-dropdown">
            {suggestions.map((option) => {
              return (
                <div
                  className="auto-complete-dropdown-items"
                  key={option.label}
                  onClick={(e)=>handleClick(e, option.label)}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
