import React, { Component } from "react";
import hammer from "../img/hammergif.gif";
import "../App.css";

class Construction extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hammer} alt="hammer" />
          <p>Jacob's portfolio is currently under construction</p>
        </header>
      </div>
    );
  }
}

export default Construction;
