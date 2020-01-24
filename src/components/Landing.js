import React, { Component } from "react";
import { Element } from "react-scroll";
import "../styles/landing.css";
import { Button } from "reactstrap";
import Carousel from "./Carousel";
import me from "../img/me.JPG";
import proj1 from "../img/bm-web-ready3.jpg";
import { withRouter, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Link as ScrollLink } from "react-scroll";

// const FeaturedProj = withRouter(({ history }) => (
//   <img
//     src={proj1}
//     onClick={() => {
//       history.push("/bookmaps");
//       window.scrollTo(0, 0);
//     }}
//   />
// ));

class Home extends Component {
  render() {
    console.log();
    return (
      <div class="landing-container">
        <Navbar />
        <div class="parallax">
          <div class="name-title">
            <div class="filler" />
            <span class="name-headline">Hello, I am Jacob</span>
            <span class="title-headline">FULL STACK WEB DEVELOPER</span>
            <Link to="/projects">
              <Button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                VIEW WORK
              </Button>
            </Link>
            <ScrollLink
              activeClass="active"
              to="featured-scroll"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div class="arrow bounce">
                <a class="fa fa-chevron-down fa-1x" href="#"></a>
              </div>
            </ScrollLink>
          </div>
        </div>
        <div>
          <Element id="featured-scroll" name="featured-scroll">
            <section class="about-featured">
              <div class="about-featured-contents">
                <h4>Featured Project</h4>
                <h5>BookMaps</h5>
                <h4>___</h4>
                <p>
                  Hello, I'm Jacob. I am a Web Developer & Designer who is
                  passionate about building intuitive and purposeful websites.
                  One of my favorites is featured below!
                </p>
              </div>
              <div class="featured-content">
                {/* <FeaturedProj /> */}
                <div class="image-container">
                  <img src={proj1} alt="project image" class="image" />
                  <div class="middle2">
                    <Link to="/bookmaps">
                      <Button
                        class="button"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
                <Link to="/projects">
                  <Button
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    VIEW ALL WORK
                  </Button>
                </Link>
              </div>
            </section>
          </Element>
          <React.Fragment>
            <Element id="about-me-scroll" name="about-me-scroll">
              <section class="about-me">
                <h4>About Me</h4>
                <div className="upper">
                  <img className="portrait" src={me} alt="Me" />
                  <p className="main-paragraph">
                    Born and raised in Portland, Oregon - I appreciate all that
                    the Pacific Northwest has to offer. Whether it's
                    snowboarding on Mt. Hood or hiking through the Columbia
                    River Gorge, I love to get out and experience as much as
                    possible. I bring the same disposition to the world of
                    coding. I'm passionate about learning new technoglogies,
                    understanding how they work under the hood, and then using
                    them creatively to produce something new and different. I
                    find inspiration in music, film, and nature. Die-hard Blazer
                    fan.
                  </p>
                </div>
                <div className="lower">
                  <p>Skills</p>
                  <p>JavaScript | React/Redux | Node/Express | Jest</p>
                  <p>HTML5 | CSS | Python | C</p>
                  <p>____</p>
                  <p>Other Interests</p>
                  <p>Photoshop | Ableton Live | Basketball | Snowboarding</p>
                </div>
                <Link to="/contact">
                  <Button>Contact Me</Button>
                </Link>
              </section>
            </Element>
          </React.Fragment>
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
