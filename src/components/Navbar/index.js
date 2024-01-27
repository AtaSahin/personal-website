import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <Bars onClick={toggleMenu} />

        <NavMenu isOpen={isOpen}>
          <NavLink to="/" className="welcome-text" onClick={toggleMenu}>
            About Me
          </NavLink>

          <NavLink
            to="/contact-me"
            activeStyle={{ textDecoration: "underline" }}
            className="welcome-text"
            onClick={toggleMenu}
          >
            Contact Me
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            target="_blank"
            href="https://drive.google.com/file/d/1pCyrTCbgzlO9adKztKhxNAbSojqnW-Ax/view?usp=drive_link"
            className="welcome-text"
          >
            Preview Resume
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
