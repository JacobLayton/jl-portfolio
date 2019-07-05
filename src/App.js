import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import hammer from "./img/hammergif.gif";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Construction from "./components/Construction";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <Navbar /> */}
          <Route exact path="/" component={Construction} />
          <Route exact path="/home" component={Landing} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          {/* <Footer /> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
