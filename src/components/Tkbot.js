import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/bookmaps.css";
import { Button } from "reactstrap";
import proj1 from "../img/tk-web-ready2.jpg";
import proj2 from "../img/tk-web-read1.jpg";
import proj5 from "../img/tk-web-ready3.jpg";
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
            <div class="separator3" />
          </div>
          <div class="about-project">
            <div class="description">
              <h6>PROJECT DESCRIPTION</h6>
              <div class="separator2" />
              <p>
                Curriculum Bot is a useful tool for students at Lambda School to
                easily find the module they're looking for. This project
                includes a search engine built in Python which uses Natural
                Language Processing to find matches to keywords in the user's
                search. We created a second backend using Node.js to handle a
                Slackbot, which enabled students to use the search functionality
                directly from our main slack channel. They just need to type a
                simple slash command followed by a keyword or question, and the
                bot will return links to the top 3 related modules. The final
                part of this project was building a useful web application, this
                allows students to securely login using their Slack credentials
                and make new searches, view search history, and take notes using
                a markdown editor. Unfortunately, only Lambda School students
                have access to this service. I've included plenty of pictures
                below to show its functionality.
              </p>
            </div>
            <div class="tech-info">
              <ul>
                <li>
                  <span class="info-category">CLIENT: </span>
                  <span class="info-details">Public Use</span>
                </li>
                <li>
                  <span class="info-category">WEBSITE: </span>
                  <span class="info-details">n/a</span>
                </li>
                <li>
                  <span class="info-category">CATEGORY: </span>
                  <span class="info-details">Web Development</span>
                </li>
                <li>
                  <span class="info-category">TECH & TOOLS: </span>
                  <span class="info-details">
                    Python, Node, React, Javascript, HTML, CSS
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="project-images">
          <img src={proj1} alt="Mobile view" />
          <img src={proj2} alt="Laptop view" />
          <img src={proj5} alt="Tablet view" />
          <div class="other-projects">
            <Link to="/bookmaps">
              <Button>PREV PROJECT</Button>
            </Link>
            {/* <Link to="/farmfresh">
              <Button>NEXT PROJECT</Button>
            </Link> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Tkbot;
