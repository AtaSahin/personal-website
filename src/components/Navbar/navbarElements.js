import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.9);
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 12;
  position: relative;
  border-radius: 30px;
  width: 90%;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 3D gölge */
  border: 1px solid #fff; /* İnce beyaz sınır */
`;

export const ContactSection = styled.div`
  background: #63d471;
  padding: 10px;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
`;

export const ContactLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  &.active {
    color: #fff;
    text-decoration: underline;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    color: black;
    border-radius: 30px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 30px;
  background: black;
  color: white;
  padding: 10px 22px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`;
