import React from "react";


// Reusable Input component
export const InputField = ({ label, type, name, value, onChange }) => (
    <div className="formGroup">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
  