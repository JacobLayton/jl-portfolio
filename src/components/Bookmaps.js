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
            <h5>____</h5>
          </div>
          <div class="about-project">
            <div class="description">
              <h6>PROJECT DESCRIPTION</h6>
              <h5>____</h5>
              <p>
                BookMaps is a free P2P booksharing application which enables
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
              <p>
                If you want to get past the paywall and use the full site, use
                the development card number "4242 4242 4242 4242" with a valid
                expiration date and cvv
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
                  <span>React/Redux, JavaScript, Node/Express, HTML, CSS</span>
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
