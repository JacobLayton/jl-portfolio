import React, { Component } from "react";
import jumbo2 from "../img/jumbo2.jpg";
import styled from "styled-components";
import "../styles/landing.css";

class Home extends Component {
  render() {
    return (
      <div class="landing-container">
        <div class="parallax" />
        <div class="nameTitle">
          <h1>Jacob Layton</h1>
          <h3>Full Stack Web Developer</h3>
        </div>
        <div>
          <p>Hello,my name is Jacob.</p>
          <p>I'm a Full Stack Web Developer</p>
          <div class="box1">Hello1</div>
          <div class="box2">Hello2</div>
          <div class="box3">Hello3</div>
          <div class="box4">Hello4</div>
        </div>
      </div>
    );
  }
}

export default Home;

// const Jumbotron = styled.div`
//   border: 1px solid yellow;
//   background-image: url(${jumbo2});
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   // background-attachment: fixed;
//   max-width: 100%;
//   max-height: 100%;
// `;

// const Jumbotron = styled.img`
//   z-index: 0;
//   // margin-top: -50px;
//   max-width: 100%;
// `;
