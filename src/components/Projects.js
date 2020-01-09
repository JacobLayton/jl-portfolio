import React, { Component } from "react";
import Navbar2 from "./Navbar2";
import "../styles/projects.css";
import proj6 from "../img/proj6.jpg";
import proj5 from "../img/proj5.jpg";
import proj4 from "../img/proj4.jpg";

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
            <div class="single-project">
              <div class="project1">
                <div class="figure">
                  <button>View Project</button>
                </div>
              </div>
            </div>
            <div class="single-project">
              <div class="project2">
                <button>View Project</button>
              </div>
            </div>
            <div class="single-project">
              <div class="project3">
                <button>View Project</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
