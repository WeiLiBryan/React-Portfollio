import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import bg from "./components/bgVideo.mp4";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      {/* Navigation Bar */}
      <Nav />

      {/* Background video */}
      <video autoPlay muted loop id="bgVideo">
        <source src={bg} type="video/mp4" />
      </video>

      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path={"/projects"} component={Projects} />
        <Route component={NoMatch} />
      </Switch>

      <Footer />
    </HashRouter>
  );
}

export default App;
