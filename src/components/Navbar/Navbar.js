import React from "react";
import { useSelector } from "react-redux";

import "./nav.css";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h2 className="logo">Zahid Account</h2>
      </div>

      <div className="account-balance">
        <h2 className="balance">Balance: {amount}$</h2>
      </div>
    </div>
  );
};

export default Navbar;
