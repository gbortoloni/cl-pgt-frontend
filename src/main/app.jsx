import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Messages from "../common/msg/messages";

import Routes from "./routes";

export default props => (
  <Router>
    <div className="wrapper">
      <Header />
      <SideBar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </Router>
);
