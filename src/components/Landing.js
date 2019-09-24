import React, { Component } from "react";
import "../styles/landing.css";
import { Button } from "reactstrap";
import Carousel from "./Carousel";
import me from "../img/me.JPG";

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
          <section class="about-featured">
            <div class="about-featured-contents">
              <h4>Featured Work</h4>
              <h4>___</h4>
              <p>
                Hello, I'm Jacob. I am a Web Designer & Developer who is
                passionate about crafting clean interfaces that provide user
                friendly experiences. Below you can observe some of the projects
                that I've had the privilege of building recently.
              </p>
            </div>
          </section>
          <section class="featured-content">
            <Carousel />
            {/* <div class="project-thumbs">
              <div class="box1">Box1</div>
              <div class="box5">Box2</div>
            </div> */}
            <Button>VIEW ALL WORK</Button>
          </section>
          <section class="about-me">
            <h4>About Me</h4>
            <div className="upper">
              <img className="portrait" src={me} alt="Me" />
              <p className="main-paragraph">
                This is going to be an about me section that will list all the
                important information about me. Something quick and to the point
                but also long enough to give potential employers a good idea of
                who I am in real life. Im a die hard fan of the Portland Trail
                Blazers and I pet every dog that I see.
              </p>
            </div>
            <div className="lower">
              <p>____</p>
              <p>This | Will | Be | A | List | Of</p>
              <p>All | My | Technical | Skills</p>
              <p>____</p>
              <p>Photoshop | Ableton Live | Basketball | Snowboarding</p>
            </div>
            <Button>Contact Me</Button>
          </section>
          {/* <div class="box3">Hello3</div>
          <div class="box4">Hello4</div> */}
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
