import React from "react";
import "./Button.css";
const Button = ({ children, onClick, style }) => {
  return (
    <div className="btn-container" style={style}>
      <button className="btn-dark" onClick={onClick}>
        <a href="#!" className="btn-link">
          {children}
        </a>
      </button>
    </div>
  );
};

export default Button;
