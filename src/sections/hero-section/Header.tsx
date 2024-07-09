import React from "react";
import "./HeaderStyle.scss";
import Button from "../../components/button/Button";

function Header() {
  return (
    <header>
      <div className="header-divs" id="header-div-left">
        <img src="images/vector/header/logo.svg" id="logo" alt="logo" />
        <h1 id="product-name">Spend.In</h1>
      </div>
      <div className="header-divs" id="header-div-center">
        <nav className="drop-menu-nav">
          Products{" "}
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-down"
          >
            <path
              d="M14.9401 7.2124L10.0501 12.1024C9.47256 12.6799 8.52756 12.6799 7.95006 12.1024L3.06006 7.2124"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </nav>
        <nav>Benefit</nav>
        <nav>How it Works</nav>
        <nav>Pricing</nav>
        <nav className="drop-menu-nav">
          Company{" "}
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-down"
          >
            <path
              d="M14.9401 7.2124L10.0501 12.1024C9.47256 12.6799 8.52756 12.6799 7.95006 12.1024L3.06006 7.2124"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </nav>
      </div>
      <div className="header-divs" id="header-div-right">
        <h2 id="login-button">Login</h2>
        <Button buttonColor="primary" buttonText="Get Demo" />
      </div>
    </header>
  );
}

export default Header;
