import "./App.css";
import aptosMainnet from "./assets/images/aptos-mainnet.svg";
import down from "./assets/images/down.svg";
import notificationBell from "./assets/images/notification-bell.png";
import copyLight from "./assets/images/copy-light.svg";
import accountImage from "./assets/images/account-image.png";
import Button from "./components/Button";
import usdc from "./assets/images/usdc.png";
import usdt from "./assets/images/usdt.png";
import walletDark from "./assets/images/wallet-dark.png";
import grid from "./assets/images/grid.png";
import transfer from "./assets/images/transfer.png";
import search from "./assets/images/search.png";
import settings from "./assets/images/settings.png";
function App() {
  return (
    <div className="container">
      <div className="app-header">
        <div className="chain-dropdown">
          <div className="chain-icon-container">
            <img src={aptosMainnet} alt="" className="chain-icon" />
          </div>
          <div className="chain-name">Aptos</div>
          <div className="dropdown-arrow">
            <img src={down} alt="" />
          </div>
        </div>
        <div className="notification-bell-container">
          <img src={notificationBell} alt="" className="notification-bell" />
        </div>
      </div>
      <div className="account-card">
        <div className="account-image-container">
          <img src={accountImage} alt="" className="account-image" />
        </div>
        <div className="account-details">
          <div className="account-name">
            Martian Test
            <div className="dropdown-arrow">
              <img src={down} alt="" />
            </div>
          </div>
          <div className="account-address">
            0x00sd...3xc2
            <img src={copyLight} alt="" className="copy-icon" />
          </div>
        </div>
      </div>
      <div className="balance">
        $23,450.
        <span className="decimal-part">23</span>
      </div>
      <div className="btn-container">
        <Button>BUY</Button>
        <Button variant={"light"}>SEND</Button>
      </div>
      <div className="token-card-container">
        <div className="token-card">
          <div className="token-card-icon">
            <img src={aptosMainnet} alt="" className="token-card-icon-image" />
          </div>
          <div className="token-card-details">
            <div className="token-card-heading">Aptos</div>
            <div className="token-card-subheading">Stake & earn 7.2% APY</div>
          </div>
          <div className="token-card-balance">
            <div className="token-card-heading">5268 APT</div>
            <div className="token-card-subheading">~$8242.12</div>
          </div>
        </div>
        <div className="token-card">
          <div className="token-card-icon">
            <img src={usdc} alt="" className="token-card-icon-image" />
          </div>
          <div className="token-card-details">
            <div className="token-card-heading">USD Coin</div>
            <div className="token-card-subheading">USDC</div>
          </div>
          <div className="token-card-balance">
            <div className="token-card-heading">5268 USDC</div>
            <div className="token-card-subheading">~$8242.12</div>
          </div>
        </div>
        <div className="token-card">
          <div className="token-card-icon">
            <img src={usdt} alt="" className="token-card-icon-image" />
          </div>
          <div className="token-card-details">
            <div className="token-card-heading">Tether</div>
            <div className="token-card-subheading">USDT</div>
          </div>
          <div className="token-card-balance">
            <div className="token-card-heading">5268 USDT</div>
            <div className="token-card-subheading">~$8242.12</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-icon-container">
          <img src={walletDark} alt="" className="footer-icon" />
        </div>
        <div className="footer-icon-container">
          <img src={grid} alt="" className="footer-icon" />
        </div>
        <div className="footer-icon-container">
          <img src={transfer} alt="" className="footer-icon" />
        </div>
        <div className="footer-icon-container">
          <img src={search} alt="" className="footer-icon" />
        </div>
        <div className="footer-icon-container">
          <img src={settings} alt="" className="footer-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
