import React from "react";
import "./Button.css";
const Button = ({ children, onClick, style, variant }) => {
  return (
    <div
      className={
        variant === "light" ? "btn-container-light" : "btn-container-dark"
      }
      style={style}
    >
      <button
        className={variant === "light" ? "btn-light" : "btn-dark"}
        onClick={onClick}
      >
        <a
          href="#!"
          className={variant === "light" ? "btn-link-light" : "btn-link-dark"}
        >
          {children}
        </a>
      </button>
    </div>
  );
};

export default Button;
