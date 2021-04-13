import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Stories from "./components/Stories";
import Visit from "./components/Visit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Merchandise from "./components/Merchandise";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/stories">
          <Stories />
        </Route>
        <Route path="/visit">
          <Visit />
        </Route>
        <Route path="/merchandise">
          <Merchandise />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
