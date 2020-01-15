import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/logo1.png";
import { Link } from "react-scroll";
import "../styles/navbar.css";

class Navbar2 extends Component {
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
          <NavHomeWrapper>
            <NavLinkWrapper exact to="/home" className="navlink">
              Home
              {/* <NavLogoWrapper src={Logo} alt="Logo of J L" /> */}
            </NavLinkWrapper>
          </NavHomeWrapper>
          <NavLinks>
            <NavLinkWrapper to="/projects" className="navlink">
              Projects
            </NavLinkWrapper>
            <NavLinkWrapper className="navlink">
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
            <NavLinkWrapper to="/contact" className="navlink">
              Contact
            </NavLinkWrapper>
          </NavLinks>
        </NavBarWrapper>
      </div>
    );
  }
}

const NavBarWrapper = styled.div`
  height: 7vh;
  width: 100%;
  background: transparent;
  // border: 1px solid red;
  // border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  position: fixed;
  top: 0;
  transition: top 0.3s;
  padding-right: 3%;
  padding-left: 1%;
`;

const NavLinkWrapper = styled(NavLink)`
  font-family: "Noto Serif", serif;
  font-size: 1rem;
  // color: #757582;
  color: white;
  margin: 0 1.5rem;
  // border: 1px solid green;
`;

const NavHomeWrapper = styled.div`
  display: flex;
  // border: 1px solid yellow;
  align-items: center;
`;

// const ScrollLinkWrapper = styled(Link)`
//   font-size: 1.2rem;
//   color: #757582;
//   margin: 0 0.5rem;
//   border: 1px solid green;
// `;

const NavLogoWrapper = styled.img`
  height: 90px;
  // border: 1px solid blue;
  margin-top: -15px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // border: 1px solid purple;
`;

export default withRouter(Navbar2);
