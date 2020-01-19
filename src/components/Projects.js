import React, { Component } from "react";
import Navbar2 from "./Navbar2";
import "../styles/projects.css";
import proj6 from "../img/bm-web-ready1.jpg";
import proj5 from "../img/tk-web-read1.jpg";
import proj4 from "../img/proj4.jpg";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <div class="projects-main">
          <section class="title-description">
            <h2 class="proj-title">PROJECTS</h2>
            <p class="project-info">
              Below are a few projects I've had the privelege of working on
              recently. Please feel free to browse through and send me a message
              if you have questions about their implementations.
            </p>
            <div class="separator" />
          </section>
          <section class="project-images">
            <div class="single-project project1">
              <img src={proj6} alt="project image" class="image" />
              <div class="middle">
                <Link to="/bookmaps">
                  <Button class="button">View Project</Button>
                </Link>
              </div>
            </div>
            <div class="single-project project2">
              <img src={proj5} alt="project image" class="image" />
              <div class="middle">
                <Link to="/tkbot">
                  <Button class="button">View Project</Button>
                </Link>
              </div>
            </div>
            <div class="single-project project3">
              <img src={proj4} alt="project image" class="image" />
              <div class="middle">
                <Link to="/farmfresh">
                  <Button class="button">View Project</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
