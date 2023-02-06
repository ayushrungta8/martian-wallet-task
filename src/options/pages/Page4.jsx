import React from "react";
import close from "../../assets/images/close.png";
import back from "../../assets/images/back.png";
import "./Page4.css";
import Button from "../components/Button";
import NotificationCard from "../components/NotificationCard";
import martian from "../../assets/images/martian.svg";
import tortuga from "../../assets/images/tortuga.png";
import topaz from "../../assets/images/topaz.png";
import souffl3 from "../../assets/images/souffl3.png";
const Page4 = ({ setPage }) => {
  const notificatonCards = [
    {
      logo: martian,
      heading: "Martian",
      subheading: "Stay updated with Martian",
      available: true,
    },
    {
      logo: tortuga,
      heading: "Tortuga",
      subheading: "Get notifications about TAPT",
      available: false,
    },
    {
      logo: topaz,
      heading: "Topaz",
      subheading: "Get notified of bids and sales from Topaz",
      available: false,
    },
    {
      logo: souffl3,
      heading: "Souffl3",
      subheading: "Get notifications from Souffl3",
      available: false,
    },
  ];
  return (
    <div className="content-modal">
      <img src={close} alt="" className="close-btn" />
      <img
        src={back}
        alt=""
        className="back-btn"
        onClick={() => setPage((page) => page - 1)}
      />
      <div className="heading">Setup Notifications</div>
      <p className="sub-heading">
        Get Web3 notifications directly in your wallet.
      </p>
      <div className="notification-cards">
        {notificatonCards.map((card) => {
          return (
            <NotificationCard
              logo={card.logo}
              heading={card.heading}
              subheading={card.subheading}
              available={card.available}
            />
          );
        })}
      </div>
      <Button onClick={() => setPage((page) => page + 1)}>Continue</Button>
    </div>
  );
};

export default Page4;
