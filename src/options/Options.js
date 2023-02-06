import logo from "../assets/images/logo.svg";

import "./Options.css";
import { useState } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

function Options() {
  const [page, setPage] = useState(6);
  return (
    <div className="App">
      <img src={logo} alt="" className="logo" />
      {page === 1 && <Page1 setPage={setPage} />}
      {page === 2 && <Page2 setPage={setPage} />}
      {page === 3 && <Page3 setPage={setPage} />}
      {page === 4 && <Page4 setPage={setPage} />}
      {page === 5 && <Page5 setPage={setPage} />}
      {page === 6 && <Page6 setPage={setPage} />}
    </div>
  );
}

export default Options;
