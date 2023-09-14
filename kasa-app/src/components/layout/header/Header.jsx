import React from "react";
import Logo from "../../ReusableUI/Logo";
import { LogoImg } from "../../../assets/images";
import Navbar from "./detail/Navbar";

const Header = () => {
  return (
    <header>
      <Logo className="logo-media-size" logo={LogoImg} altLabel={"logo"} />
      <Navbar />
    </header>
  );
};

export default Header;
