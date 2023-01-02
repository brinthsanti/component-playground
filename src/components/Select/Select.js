import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./index.css";
import CloseCircleOutlined from "@ant-design/icons/CloseCircleOutlined";

//fix css later

export const SelectContext = React.createContext({
  selectedLabels: [],
});

const Select = ({ style, className, placeholder, children }) => {
  const [options, setOptions] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);

  function handleInput(e) {
    const text = e.target.value;
    setsearchText(text);
  }

  function handleFocus() {
    setSuggestions();
  }

  function handleBlur() {
    setOptions([]);
  }

  function handleClick(e) {
    const text = e.target.outerText;
    setsearchText("");
    if(!selectedLabels.includes(text))
    setSelectedLabels([...selectedLabels, text]);
  }

  function handleRemove(currentLabel){
     const filteredLabels = selectedLabels.filter((label) => label !== currentLabel);
     setSelectedLabels(filteredLabels);
  }

  function handleRemoveAll(){
    setSelectedLabels([]);
  }

  function setSuggestions() {
    const suggestion = React.Children.toArray(children).filter(
      (data) =>
        data.props.value.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    console.log(suggestion);
    setOptions(suggestion);
  }

  useEffect(() => {
    if (searchText) setSuggestions();
  }, [searchText]);

  const prefixClass = "select";
  const classes = classNames(prefixClass, className);

  const contextValue = { selectedLabels };
  // console.log(React.Children.toArray(children))
  return (
    <SelectContext.Provider value={contextValue}>
      <div className={classes} style={style}>
        <div className="select-input-container">
          <div className="select-inner">
            {selectedLabels.length > 0 &&
              selectedLabels.map((label) => (
                <div key={label} className="select-badge">
                  {label}{" "}
                  <span onClick={(e)=>handleRemove(label)}>
                    <CloseCircleOutlined />
                  </span>
                </div>
              ))}
            <input
              placeholder={placeholder}
              onInput={handleInput}
              value={searchText}
              onFocus={handleFocus}
              // onBlur={handleBlur}
            />
            <span>
              <CloseCircleOutlined  onClick={handleRemoveAll} />
            </span>
          </div>
          {options.length > 0 && (
            <div className="select-dropdown" onClick={handleClick}>
              {options}
            </div>
          )}
        </div>
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
