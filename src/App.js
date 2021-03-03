import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import bg from "./components/bgVideo.mp4";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter basename="/">
      {/* Navigation Bar */}
      <Nav />

      {/* Background video */}
      <video autoPlay muted loop id="bgVideo">
        <source src={bg} type="video/mp4" />
      </video>

      <Switch>
        <Route exact path={[process.env.PUBLIC_URL + "/", process.env.PUBLIC_URL + "/home"]} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
        <Route component={NoMatch} />
      </Switch>

      <Footer />
    </HashRouter>
  );
}

export default App;
