import React from "react";
import "./Input.css";

const Input = ({ label, type }) => {
  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input type={type} className="input" />
    </div>
  );
};

export default Input;
