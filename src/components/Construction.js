import React, { Component } from "react";
import hammer from "../img/hammergif.gif";
import "../styles/construction.css";

class Construction extends Component {
  render() {
    return (
      <div className="construction">
        <header className="App-header">
          <img src={hammer} alt="hammer" />
          <p>Jacob's portfolio is currently under construction</p>
        </header>
      </div>
    );
  }
}

export default Construction;
