import React from "react";
import copy from "../../assets/images/copy.svg";
import close from "../../assets/images/close.png";
import back from "../../assets/images/back.png";
import "./Page2.css";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
const Page2 = ({ setPage }) => {
  const recoveryPhraseWords = [
    "flock ",
    "sock",
    "split",
    "pool",
    "organ",
    "innocent",
    "monster",
    "claim",
    "stereo",
    "trim",
    "very",
    "hard",
    "process",
    "ritual",
    "crucial",
    "split",
    "sad",
    "milk",
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
      <div className="heading">Recovery Phrase</div>
      <p className="sub-heading">
        The recovery phrase alone gives you full access to your
        <br />
        wallet and funds. Please save it securely
      </p>
      <div className="recovery-phrase-container">
        <div className="recovery-phrase">
          {recoveryPhraseWords.map((word, index) => {
            return (
              <div className="recovery-phrase-word">
                {index + 1 + ". " + word}
              </div>
            );
          })}
        </div>
        <div className="copy-btn">
          <img src={copy} alt="" />
          Copy to clipboard
        </div>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <InfoCard>
        If you forget your password, you can use the recovery phrase to get back
        into your wallet. Never share it with anyone or enter it into any form.
        Martian support will never ask you for your recovery phrase
      </InfoCard>
      <Button onClick={() => setPage((page) => page + 1)}>Continue</Button>
    </div>
  );
};

export default Page2;
