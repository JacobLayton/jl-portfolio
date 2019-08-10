import React, { Component } from "react";
import "../styles/landing.css";
import { Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div class="landing-container">
        <div class="parallax" />
        <div class="name-title">
          <span class="name-headline">Hello, I am Jacob</span>
          <span class="title-headline">FULL STACK WEB DEVELOPER</span>
          <Button>VIEW WORK</Button>
        </div>
        <div>
          <div class="about-me">
            <div class="about-me-contents">
              <h4>Featured Work</h4>
              <p>
                Hello, I'm Jacob. I am a Web Designer & Developer who is
                passionate about crafting clean interfaces that provide user
                friendly experiences. Below you can observe some of the projects
                that I've had the privilege of building recently.
              </p>
            </div>
          </div>
          <div class="featured-content" />
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
