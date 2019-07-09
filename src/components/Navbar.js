import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/logo1.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavBarWrapper>
          <NavLinkWrapper exact to="/home">
            <NavLogoWrapper src={Logo} alt="Logo of J L" />
          </NavLinkWrapper>
          <NavLinks>
            <NavLinkWrapper to="/projects">Projects</NavLinkWrapper>
            <NavLinkWrapper to="/about">About</NavLinkWrapper>
            <NavLinkWrapper to="/contact">Contact</NavLinkWrapper>
          </NavLinks>
        </NavBarWrapper>
      </div>
    );
  }
}

const NavBarWrapper = styled.div`
  height: 30px;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
`;

const NavLinkWrapper = styled(NavLink)`
  font-size: 1.2rem;
  color: #757582;
  margin: 0 0.5rem;
`;

const NavLogoWrapper = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default withRouter(Navbar);
