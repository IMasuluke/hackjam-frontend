import { render } from "@testing-library/react";
import React from "react";
import Logo from "./Logo.png";

const Header = () => {
  render();
  {
    return (
      <div className="headerDiv">
        <img className="headerImage" src={Logo} alt="school_logo" />
      </div>
    );
  }
};

export default Header;
