import React, { Component } from "react";
import jumbo2 from "../img/jumbo2.jpg";
import styled from "styled-components";
import "../styles/landing.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default Home;

const Jumbotron = styled.div`
  border: 1px solid yellow;
  background-image: url(${jumbo2});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  max-width: 100%;
  max-height: 100%;
`;

// const Jumbotron = styled.img`
//   z-index: 0;
//   // margin-top: -50px;
//   max-width: 100%;
// `;
