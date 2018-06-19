import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
// import Blog from './Blog'

const Main = () => (
  <div style={{ height: "100px", width: "100px" }}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path='/blog' component={Blog}/> */}
    </Switch>
  </div>
);

export default Main;
