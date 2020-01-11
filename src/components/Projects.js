import React, { Component } from "react";
import Navbar2 from "./Navbar2";
import "../styles/projects.css";
import proj6 from "../img/proj6.jpg";
import proj5 from "../img/proj5.jpg";
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
            <h2>Projects</h2>
            <p>
              This will be a description of my projects I guess? Defintiely want
              a short paragraph about what I like to work on and blah blah blah
            </p>
          </section>
          <section class="project-images">
            <div class="single-project project1">
              <img src={proj6} alt="project image" class="image" />
              <div class="middle">
                <Link to="/bookmaps">
                  <button class="button">View Project</button>
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
                  <button class="button">View Project</button>
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
