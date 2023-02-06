import React from "react";
import info from "../../assets/images/info.svg";
import "./InfoCard.css";
const InfoCard = ({ children }) => {
  return (
    <div className="info-card">
      <div className="info-icon">
        <img src={info} alt="" />
      </div>
      {children}
    </div>
  );
};

export default InfoCard;
