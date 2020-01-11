import React, { Component } from "react";
import { Element } from "react-scroll";
import "../styles/landing.css";
import { Button } from "reactstrap";
import Carousel from "./Carousel";
import me from "../img/me.JPG";
import proj1 from "../img/proj1.jpg";
import { withRouter, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Link as ScrollLink } from "react-scroll";

const FeaturedProj = withRouter(({ history }) => (
  <img
    src={proj1}
    onClick={() => {
      history.push("/bookmaps");
      window.scrollTo(0, 0);
    }}
  />
));

class Home extends Component {
  render() {
    console.log();
    return (
      <div class="landing-container">
        <Navbar />
        <div class="parallax" />
        <div class="name-title">
          <span class="name-headline">Hello, I am Jacob</span>
          <span class="title-headline">FULL STACK WEB DEVELOPER</span>
          <Link to="/projects">
            <Button>VIEW WORK</Button>
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
        <div>
          <Element id="featured-scroll" name="featured-scroll">
            <section class="about-featured">
              <div class="about-featured-contents">
                <h4>Featured Project</h4>
                <h4>___</h4>
                <p>
                  Hello, I'm Jacob. I am a Web Developer & Designer who is
                  passionate about crafting clean interfaces that provide user
                  friendly experiences. Below you can observe some of the
                  projects that I've had the privilege of building recently.
                </p>
              </div>
            </section>
            <section class="featured-content">
              {/* <Carousel /> */}
              <FeaturedProj />
              {/* <img class="featured-project" src={proj1} /> */}
              {/* <div class="project-thumbs">
                <div class="box1">Box1</div>
                <div class="box5">Box2</div>
              </div> */}
              <Link to="/projects">
                <Button>VIEW ALL WORK</Button>
              </Link>
              {/* <FeaturedProj /> */}
            </section>
          </Element>
          <React.Fragment>
            <Element id="about-me-scroll" name="about-me-scroll">
              <section class="about-me">
                <h4>About Me</h4>
                <div className="upper">
                  <img className="portrait" src={me} alt="Me" />
                  <p className="main-paragraph">
                    This is going to be an about me section that will list all
                    the important information about me. Something quick and to
                    the point but also long enough to give potential employers a
                    good idea of who I am in real life. Im a die hard fan of the
                    Portland Trail Blazers and I pet every dog that I see.
                  </p>
                </div>
                <div className="lower">
                  <p>____</p>
                  <p>This | Will | Be | A | List | Of</p>
                  <p>All | My | Technical | Skills</p>
                  <p>____</p>
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
