import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Nav />

      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={["/projects"]} component={Projects} />
        <Route exact path={["/Contact"]} component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
