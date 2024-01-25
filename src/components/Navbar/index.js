// components/Navbar/index.js

import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/">About Me</NavLink>
          <NavLink to="/contact-me" activeStyle>
            Contact Me
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Download Resume</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
