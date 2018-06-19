import React, { Component } from "react";

const style = {
    paddingLeft: '2em'
}

function Nav(props) { return <ul style={style}>{props.children}</ul>; }

export default Nav;
