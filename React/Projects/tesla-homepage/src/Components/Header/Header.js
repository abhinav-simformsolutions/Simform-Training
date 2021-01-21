import React from "react";
import "./Header.css";
import teslalogo from "../../assets/teslaLogoSmall.svg";

function Header() {
  return (
    <div className="header">
      <div className="header--logo">
        <img src={teslalogo} alt="logo" />
      </div>
      <div className="header--center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roofs</p>
        <p>SOlar Panels</p>
      </div>
      <div className="header--right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}

export default Header;
