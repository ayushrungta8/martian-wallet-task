import React from "react";
import close from "../../assets/images/close.png";
import back from "../../assets/images/back.png";
import "./Page5.css";
import Button from "../components/Button";
const Page5 = ({ setPage }) => {
  return (
    <div className="content-modal">
      <img src={close} alt="" className="close-btn" />
      <img
        src={back}
        alt=""
        className="back-btn"
        onClick={() => setPage((page) => page - 1)}
      />
      <div className="heading">One last thing</div>
      <p className="sub-heading">
        You can open Martian at any time by using this handy keyboard shortcut
      </p>
      <div className="key-container">
        <div className="key">Alt/Opt</div>
        <div className="key">Shift</div>
        <div className="key">X</div>
      </div>
      <div className="try">Try: Alt + Shift + M</div>
      <Button
        onClick={() => setPage((page) => page + 1)}
        style={{ marginTop: "auto" }}
      >
        Continue
      </Button>
    </div>
  );
};

export default Page5;
