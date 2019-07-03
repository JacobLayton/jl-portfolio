import React from "react";
import "./App.css";
import hammer from "./img/hammergif.gif";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
        <img src={hammer} alt="hammer" />
        <p>Jacob's portfolio is currently under construction</p>
      </header>
    </div>
  );
}

export default App;
