import React, { Component } from "react";
import { Button } from "reactstrap";
import proj1 from "../img/proj1.jpg";
import proj2 from "../img/proj2.jpg";
import proj5 from "../img/proj5.jpg";

class Farmfresh extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <h2>Farm Fresh</h2>
            <h4>Case Study</h4>
          </div>
          <div>
            <div>
              <h6>PROJECT DESCRIPTION</h6>
              <p>
                This will be a lengthy project description of Farm Fresh. You
                will talk about who helped build the project and what your role
                was. Feel free to describe any and all deatils that you think
                are important to know about this project. Let's make this
                paragraph jsut a little bit longer to make it more realistic and
                easier to style when the time comes.
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <h7>CLIENT:</h7>
                  <span>Public Use</span>
                </li>
                <li>
                  <h7>WEBSITE:</h7>
                  <a href="https://bookmaps.netlify.com" target="_blank">
                    Launch Site
                  </a>
                  <li>
                    <h7>CATEGORY:</h7>
                    <span>Web Development</span>
                  </li>
                  <li>
                    <h7>TECH & TOOLS:</h7>
                    <span>HTML, JQuery, LESS, PHP, Responsive, WordPress</span>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <img src={proj1} />
          <img src={proj2} />
          <img src={proj5} />
        </section>
        <div>
          <Button>PREV PROJECT</Button>
        </div>
      </div>
    );
  }
}

export default Farmfresh;
