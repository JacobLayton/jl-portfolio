import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/bookmaps.css";
import { Button } from "reactstrap";
import proj1 from "../img/proj1.jpg";
import proj2 from "../img/proj2.jpg";
import proj5 from "../img/proj5.jpg";
import Navbar3 from "./Navbar3";

class Bookmaps extends Component {
  render() {
    return (
      <div class="main-body">
        <Navbar3 />
        <section class="about">
          <div class="title">
            <h2>Bookmaps</h2>
            <h4>Case Study</h4>
            <div class="separator3" />
          </div>
          <div class="about-project">
            <div class="description">
              <h6>PROJECT DESCRIPTION</h6>
              <div class="separator2" />
              <p>
                BookMaps is a free P2P book-sharing application which enables
                users to safely lend and borrow books with people near them. It
                serves as a great way for people who may not have access to a
                library or bookstore to explore new books and expand their
                knowledge. I built it in 5 weeks with the help of 4 other
                developers. We used a wide array of technologies and external
                APIs to accomplish an intuitive and effective user experience.
                These include Google Maps, late/damage fees through Stripe,
                automated emails through Sendgrid, Oauth secure login, Goodreads
                book database, and more!
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
                  <a href="https://bookmaps.netlify.com" target="_blank">
                    Launch Site
                  </a>
                </li>
                <li>
                  <span class="info-category">CATEGORY: </span>
                  <span class="info-details">Web Development</span>
                </li>
                <li>
                  <span class="info-category">TECH & TOOLS: </span>
                  <span class="info-details">
                    React/Redux, JavaScript, Node/Express, HTML, CSS
                  </span>
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
            <Link to="/tkbot">
              <Button>NEXT PROJECT</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Bookmaps;
