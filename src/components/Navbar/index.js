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
import { connect } from "react-redux";
import { toggleTheme } from "../../redux/theme";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <>
      <Nav className={`navbar ${darkMode ? "dark" : "light"}`}>
        <Bars onClick={toggleMenu} />

        <NavMenu isOpen={isOpen}>
          <NavLink
            className={`navbar ${darkMode ? "dark" : "light"}`}
            to="/home"
            activeStyle={{ textDecoration: "underline" }}
            onClick={toggleMenu}
          >
            About Me
          </NavLink>

          <NavLink
            className={`navbar ${darkMode ? "dark" : "light"}`}
            to="/contact-me"
            activeStyle={{ textDecoration: "underline" }}
            onClick={toggleMenu}
          >
            Contact Me
          </NavLink>
        </NavMenu>

        {/* Toggle Theme Switcher */}
        <div className="theme-switcher">
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleToggleTheme}
              checked={darkMode}
            />
            <span className="slider"></span>
          </label>
        </div>

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

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
