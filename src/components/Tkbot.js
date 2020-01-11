import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/bookmaps.css";
import { Button } from "reactstrap";
import proj1 from "../img/proj1.jpg";
import proj2 from "../img/proj2.jpg";
import proj5 from "../img/proj5.jpg";
import Navbar3 from "./Navbar3";

class Tkbot extends Component {
  render() {
    return (
      <div class="main-body">
        <Navbar3 />
        <section class="about">
          <div class="title">
            <h2>Curriculum Bot</h2>
            <h4>Case Study</h4>
            <h5>____</h5>
          </div>
          <div class="about-project">
            <div class="description">
              <h6>PROJECT DESCRIPTION</h6>
              <h5>____</h5>
              <p>
                This will be a lengthy project description of Curriculum Bot.
                You will talk about who helped build the project and what your
                role was. Feel free to describe any and all deatils that you
                think are important to know about this project. Let's make this
                paragraph jsut a little bit longer to make it more realistic and
                easier to style when the time comes.
              </p>
            </div>
            <div class="tech-info">
              <ul>
                <li>
                  <h7>CLIENT: </h7>
                  <span>Public Use</span>
                </li>
                <li>
                  <h7>WEBSITE: </h7>
                  <a href="https://bookmaps.netlify.com" target="_blank">
                    Launch Site
                  </a>
                </li>
                <li>
                  <h7>CATEGORY: </h7>
                  <span>Web Development</span>
                </li>
                <li>
                  <h7>TECH & TOOLS: </h7>
                  <span>HTML, JQuery, LESS, PHP, Responsive, WordPress</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="project-images">
          <img src={proj1} />
          <img src={proj2} />
          <img src={proj5} />
          <div>
            <Link to="/bookmaps">
              <Button>PREV PROJECT</Button>
            </Link>
            <Link to="/farmfresh">
              <Button>NEXT PROJECT</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Tkbot;
