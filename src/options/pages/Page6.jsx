import React from "react";
import close from "../../assets/images/close.png";
import back from "../../assets/images/back.png";
import "./Page6.css";
import Button from "../components/Button";
import logo from "../../assets/images/logo-img.svg";
import twitter from "../../assets/images/twitter.png";
import discord from "../../assets/images/discord.png";
import aptos from "../../assets/images/aptos.png";
const Page6 = ({ setPage }) => {
  return (
    <div className="content-modal">
      <img src={close} alt="" className="close-btn" />
      <img
        src={back}
        alt=""
        className="back-btn"
        onClick={() => setPage((page) => page - 1)}
      />
      <img src={logo} alt="" className="header-logo" />
      <div className="heading">You're all set!</div>
      <p className="sub-heading">
        Your wallet is ready to use. Follow our socials for exclusive product
        <br />
        updates and reach out for any further queries
      </p>
      <div className="key-container">
        <div className="socials">
          <img src={discord} alt="" className="social-icon" />
          Join Martian’s Discord Server
        </div>
        <div className="socials">
          <img src={twitter} alt="" className="social-icon" />
          Follow Martian on Twitter
        </div>
        <div className="socials">
          <img src={aptos} alt="" className="social-icon" />
          Browse & Shop for Aptos NFTs
        </div>
      </div>

      <Button style={{ marginTop: "auto" }}>Done</Button>
    </div>
  );
};

export default Page6;
