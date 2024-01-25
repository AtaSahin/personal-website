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
            to="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/adil+ata-%C5%9Fahin/6c56461a-7034-48be-b033-e6801854f397?view=html"
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
