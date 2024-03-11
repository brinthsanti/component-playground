import React from "react";


// Reusable CheckboxGroup component
export const CheckboxGroup = ({ legend, name, options, selectedValues, onChange }) => (
    <div className="formGroup">
      <fieldset>
        <legend>{legend}</legend>
        {options.map((option) => (
          <label key={option.value}>
            {option.label}
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={onChange}
            />
          </label>
        ))}
      </fieldset>
    </div>
  );