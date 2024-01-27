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
          <NavLink to="/" className="welcome-text">
            About Me
          </NavLink>

          <NavLink to="/contact-me" activeStyle className="welcome-text">
            Contact Me
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            target="_blank"
            to="https://drive.google.com/file/d/1pCyrTCbgzlO9adKztKhxNAbSojqnW-Ax/view?usp=drive_link"
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
