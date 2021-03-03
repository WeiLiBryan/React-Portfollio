import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import bg from "./components/bgVideo.mp4";
// import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>

      {/* Navigation Bar */}
      <Nav />

      {/* Background video */}
      <video autoPlay muted loop id="bgVideo">
        <source src={bg} type="video/mp4" />
      </video>

      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={"/projects"} component={Projects} />
        {/* <Route exact path={"/Contact"} component={Contact} /> */}
        <Route component={ NoMatch } />
      </Switch>
    </Router>
  );
}

export default App;
