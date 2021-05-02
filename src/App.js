import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Stories from "./components/Stories";
import Visit from "./components/Visit";
import Volunteer from "./components/Volunteer";
import Membership from "./components/Membership";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Merchandise from "./components/Merchandise";
import Towntour from "./components/Towntour";
import PictureGallery from "./components/PictureGallery";
import CampMyles from "./components/CampMyles";
import WW2 from "./components/WW2"
function App() {
  return (
    <Router basename="/nhs">
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
        <Route path="/volunteer">
          <Volunteer />
        </Route>
        <Route path="/membership">
          <Membership />
        </Route>
        <Route path="/tour">
          <Towntour />
        </Route>
        <Route path="/gallery">
          <PictureGallery />
        </Route>
        <Route path="/CampMS">
          <CampMyles />
        </Route>
        <Route path="/WW2">
          <WW2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
