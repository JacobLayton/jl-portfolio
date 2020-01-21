import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/logo1.png";
import { Link } from "react-scroll";
import "../styles/navbar.css";

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
          <NavHomeWrapper>
            <NavLinkWrapper exact to="/" className="navlink">
              Home
              {/* <NavLogoWrapper src={Logo} alt="Logo of J L" /> */}
            </NavLinkWrapper>
          </NavHomeWrapper>
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
            <NavLinkWrapper
              to="/"
              className="navlink"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              &lt;Back
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
  background: white;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  position: fixed;
  top: 0;
  transition: top 0.3s;
  border-bottom: 1px solid lightgray;
  padding-right: 3%;
  padding-left: 1%;
  border-bottom: 1px solid lightgray;
`;

const NavLinkWrapper = styled(NavLink)`
  font-family: "Noto Serif", serif;
  font-size: 1.2rem;
  color: #757582;
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
  height: 40px;
  // border: 1px solid blue;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // border: 1px solid purple;
`;

export default withRouter(Navbar);
