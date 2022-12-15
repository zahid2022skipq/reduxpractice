import React from "react";

import "./nav.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h2 className="logo">Zahid Account</h2>
      </div>

      <div className="account-balance">
        <h2 className="balance">Balance: 0$</h2>
      </div>
    </div>
  );
};

export default Navbar;
