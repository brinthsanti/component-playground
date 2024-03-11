import React from 'react';

export const Textarea = ({ label, name, value, onChange }) => (
  <div className="formGroup">
    <label>{label}</label>
    <textarea name={name} value={value} onChange={onChange} />
  </div>
);

export default Textarea;
