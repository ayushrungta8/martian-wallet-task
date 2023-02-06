import React, { useEffect, useState } from "react";
import wallet from "../../assets/images/wallet.png";
import close from "../../assets/images/close.png";
import cloud from "../../assets/images/cloud.png";
import "./Page1.css";
import Button from "../components/Button";
const Page1 = ({ setPage }) => {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div className="content-modal">
      <img src={close} alt="" className="close-btn" />
      <div className="heading">Welcome to Martian</div>
      <p className="sub-heading">
        The Aptos wallet reimagined; hold crypto, NFTs, swap
        <br />
        assets and track past activity
      </p>
      <div
        className={`card ${selected === 0 && "card-selected"}`}
        onClick={() => setSelected(0)}
      >
        <div className="card-icon">
          <img src={wallet} alt="" />
        </div>
        <div className="card-content">
          <div className="card-content-heading">Create a New Wallet</div>
          <div className="card-content-sub-heading">
            Get started by creating your very first wallet to hold, trade and
            exchange crypto assets
          </div>
        </div>
      </div>
      <div
        className={`card ${selected === 1 && "card-selected"}`}
        onClick={() => setSelected(1)}
      >
        <div className="card-icon">
          <img src={cloud} alt="" />
        </div>
        <div className="card-content">
          <div className="card-content-heading">I already have a Wallet</div>
          <div className="card-content-sub-heading">
            Import your seed phrase from an existing account and to holdin,
            trade and exchange assets from Martian
          </div>
        </div>
      </div>
      <Button onClick={() => setPage((page) => page + 1)}>Continue</Button>
    </div>
  );
};

export default Page1;
