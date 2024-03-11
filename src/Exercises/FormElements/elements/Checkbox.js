import React from 'react';

export const Checkbox = ({ label, name, checked, onChange }) => (
  <div className="formGroup">
    <label>
      {label}
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </label>
  </div>
);

