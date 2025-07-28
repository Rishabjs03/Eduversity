import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [DarkNav, setDarkNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setDarkNav(true) : setDarkNav(false);
    });
  }, []);
  return (
    <nav className={`container ${DarkNav ? "dark-nav" : ""}`}>
      <img src={Logo} alt="weblogo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
