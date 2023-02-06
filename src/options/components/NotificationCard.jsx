import React from "react";
import "./NotificationCard.css";
import Toggle from "./Toggle";
const NotificationCard = ({
  checked,
  logo,
  heading,
  subheading,
  available,
}) => {
  return (
    <div className="notification-card">
      <div className="notification-card-icon-container">
        <img src={logo} alt="" />
      </div>
      <div className="notification-card-content">
        <div className="notification-card-content-heading">{heading}</div>
        <div className="notification-card-content-subheading">{subheading}</div>
      </div>
      <div className="notification-card-switch">
        {available ? (
          <Toggle checked={checked} />
        ) : (
          <div className="notification-card-coming-soon">Coming soon</div>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
