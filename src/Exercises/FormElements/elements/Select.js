import React from 'react';

export const Select = ({ label, name, options, value, onChange }) => (
  <div className="formGroup">
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      <option value="" disabled>Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);


