import React, { Component } from "react";
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
        </NavBarWrapper>
      </div>
    );
  }
}

const NavBarWrapper = styled.div`
  height: 30px;
  background: white;
`;

const NavLinkWrapper = styled.div`
  margin: 10px;
`;

const NavLogoWrapper = styled.img`
  height: 20px;
`;

export default Navbar;
