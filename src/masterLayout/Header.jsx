import React from "react";

import Navigation from "./Navigation";

import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <React.Fragment>
      <div className="headerWrap" id="header">
        <div className="header">
          <div className="logo"><img src={logo} alt="" /></div>
          <Navigation />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;