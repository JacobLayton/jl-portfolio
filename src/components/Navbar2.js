import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/logo1.png";
import { Link } from "react-scroll";

class Navbar extends Component {
  render() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      console.log(prevScrollpos);
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    };

    return (
      <div>
        <NavBarWrapper id="navbar">
          <NavLinkWrapper exact to="/home">
            <NavLogoWrapper src={Logo} alt="Logo of J L" />
          </NavLinkWrapper>
          <NavLinks>
            {/* <NavLinkWrapper to="/projects">Projects</NavLinkWrapper>
            <NavLinkWrapper>
              <Link
                activeClass="active"
                to="about-me-scroll"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
            </NavLinkWrapper>
            <NavLinkWrapper to="/contact">Contact</NavLinkWrapper> */}
            <NavLinkWrapper to="/home">&lt;Back</NavLinkWrapper>
          </NavLinks>
        </NavBarWrapper>
      </div>
    );
  }
}

const NavBarWrapper = styled.div`
  height: 7vh;
  width: 100%;
  background: white;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  position: fixed;
  top: 0;
  transition: top 0.3s;
`;

const NavLinkWrapper = styled(NavLink)`
  font-size: 1.2rem;
  color: #3b3e43;
  margin: 0 0.5rem;
  border: 1px solid green;
`;

// const ScrollLinkWrapper = styled(Link)`
//   font-size: 1.2rem;
//   color: #757582;
//   margin: 0 0.5rem;
//   border: 1px solid green;
// `;

const NavLogoWrapper = styled.img`
  height: 40px;
  border: 1px solid blue;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid purple;
`;

export default withRouter(Navbar);
