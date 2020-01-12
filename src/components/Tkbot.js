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
                  <h7>CLIENT: </h7>
                  <span>Public Use</span>
                </li>
                <li>
                  <h7>WEBSITE: </h7>
                  <span>n/a</span>
                </li>
                <li>
                  <h7>CATEGORY: </h7>
                  <span>Web Development</span>
                </li>
                <li>
                  <h7>TECH & TOOLS: </h7>
                  <span>Python, Node, React, Javascript, HTML, CSS</span>
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
