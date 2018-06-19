import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./menuItem.css";

class MenuItemRefactor extends Component {
  render() {
    return (

        <li className="menu-item">
          <Link to={this.props.destination}>{this.props.text}</Link>
        </li>
    );
  }
}

export default MenuItemRefactor;
