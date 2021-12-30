import React from "react";
import smallLogo from "../Images/HLL.png";
// import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="navbar">
      <img src={smallLogo} alt="logo" id="small-logo" />
      <button class="navbutt">Contact Us</button>
      {/* <Link activeClass="active" to="NavBar" spy={true} smooth={true}> */}
      <button class="navbutt">Back to Top</button>
      {/* </Link> */}
    </footer>
  );
}

export default Footer;
