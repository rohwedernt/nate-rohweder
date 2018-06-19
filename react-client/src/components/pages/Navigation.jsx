import React, { Component } from "react";
import { Link } from 'react-router-dom';
import MenuItemRefactor from "../elements/MenuItemRefactor.jsx";
import Nav from "../elements/Nav.jsx";

import "./navTitle.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "2em" }} />

        <Link className="title" to="/">Nate Rohweder</Link>

        <Nav>
          <MenuItemRefactor 
            destination="/about" 
            text="about" 
          />
          <MenuItemRefactor 
            destination="/blog" 
            text="blog" 
          />
          <MenuItemRefactor
            destination="/programmingThings"
            text="programmingThings"
          />
          <MenuItemRefactor 
            destination="/musicThings" 
            text="musicThings" 
          />
          <MenuItemRefactor
            destination="/craftBeerThings"
            text="craftBeerThings"
          />
        </Nav>

      </div>
    );
  }
}

export default Navigation;
