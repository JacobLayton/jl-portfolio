import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div>
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
        <span>Copyright © Jacob Layton 2019. All Rights Reserved.</span>
      </section>
    );
  }
}

export default Footer;
