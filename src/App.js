import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { withRouter } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Bookmaps from "./components/Bookmaps";
import Tkbot from "./components/Tkbot";
import Farmfresh from "./components/Farmfresh";
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
          <Route exact path="/bookmaps" component={Bookmaps} />
          <Route exact path="/tkbot" component={Tkbot} />
          <Route exact path="/farmfresh" component={Farmfresh} />
          <Route exact path="/contact" component={Contact} />
          {/* <Footer /> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
