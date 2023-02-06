import React from "react";
import "./Toggle.css";
const Toggle = ({ checked }) => {
  return (
    <>
      <input type="checkbox" id="switch" checked={checked} defaultChecked />
      <label for="switch" className="toggle">
        Toggle
      </label>
    </>
  );
};

export default Toggle;
