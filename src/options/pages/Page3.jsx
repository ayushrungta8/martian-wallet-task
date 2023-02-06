import React from "react";
import close from "../../assets/images/close.png";
import back from "../../assets/images/back.png";
import "./Page3.css";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import Input from "../components/Input";
const Page3 = ({ setPage }) => {
  return (
    <div className="content-modal">
      <img src={close} alt="" className="close-btn" />
      <img
        src={back}
        alt=""
        className="back-btn"
        onClick={() => setPage((page) => page - 1)}
      />
      <div className="heading">Create a Password</div>
      <p className="sub-heading">
        You will use the password to unlock your wallet. Do not
        <br />
        share your password with others
      </p>
      <Input label="Password" type="password" />
      <div className="spacer"></div>
      <Input label="Confirm Password" type="password" />
      <div className="checkbox-container">
        <input type="checkbox" id="tos" className="tos-checkbox" />
        <label htmlFor="tos">
          I have read and agree to the
          <a href="#!" className="link">
            Terms of Service
          </a>
          and
          <a href="#!" className="link">
            Privacy Policy
          </a>
        </label>
      </div>
      <div className="spacer"></div>
      <InfoCard>
        For your protection, Martian locks your wallet after 15 minutes of
        inactivity. You will need this password to unlock it. The password is
        stored securely on your device. We cannot recover the password for you,
        if it is lost.
      </InfoCard>
      <Button onClick={() => setPage((page) => page + 1)}>Continue</Button>
    </div>
  );
};

export default Page3;
