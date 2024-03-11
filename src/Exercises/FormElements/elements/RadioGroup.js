import React from "react";


// Reusable RadioGroup component
export const RadioGroup = ({ legend, name, options, selectedValue, onChange }) => (
    <div className="formGroup">
      <fieldset>
        <legend>{legend}</legend>
        {options.map((option) => (
          <label key={option.value}>
            {option.label}
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
            />
          </label>
        ))}
      </fieldset>
    </div>
  );