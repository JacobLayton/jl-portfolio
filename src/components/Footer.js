import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div>
          <a href="https://github.com/JacobLayton" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jacob-layton/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>Copyright © Jacob Layton 2019. All Rights Reserved.</span>
      </section>
    );
  }
}

export default Footer;
