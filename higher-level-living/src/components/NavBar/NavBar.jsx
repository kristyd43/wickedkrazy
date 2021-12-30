import React from "react";
import "./NavBar.css";
import headerImage from "../Images/oils.jpg";
import smallLogo from "../Images/HLL.png";
import Logo from "../Images/logo2.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const Contact = () => {
    navigate("/contact");
  };
  const Home = () => {
    navigate("/home");
  };

  return (
    <div>
      <img src={Logo} alt="logo" id="logo"></img>
      <h1 id="logo" id="title">
        Higher Level Living
      </h1>

      <nav id="navbar">
        <button class="navbutt">Login/Signup</button>
        <button class="navbutt" onClick={Home}>
          Home
        </button>
        <button class="navbutt">About Us</button>
        <button class="navbutt" onClick={Contact}>
          Contact
        </button>
        <button class="navbutt">Cart</button>
      </nav>
      <div>
        <img src={headerImage} alt="natmedicine" id="header-image" />
      </div>
    </div>
  );
}

export default NavBar;
