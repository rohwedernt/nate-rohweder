import React, { Component } from 'react';

import './expander.css';

class Expander extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "",
      expanded: false
    };

    this.animate = this.animate.bind(this);
  }

  animate() {
    if (!this.state.expanded) {
      this.setState({ class: "expanded", expanded: true })
    } else {
      this.setState({ class: "", expanded: false })
    }
  }

  render() {
    return (
      <div className="expand-box" onClick={this.animate} >
        <div className={`square-root ${this.state.class}`}  />
        <div className={`round-part ${this.state.class}`}>
          <div className="wrapper">
            <span>Lorem Ipsum at dolorem lupus est.</span>
          </div>
        </div>
        <div className="expand-button" onClick={this.animate}>+</div>
      </div>
    );
  }
}

export default Expander;


// $(function () {

//   $(document).on('click', '.expand-box .expand-button', function () {
//     $(this).removeClass('doubleclicked').addClass('clicked');
//     $(".square-part, .round-part").addClass("expanded");
//   });

//   $(document).on('click', '.expand-button.clicked', function () {
//     $(this).removeClass('clicked').addClass('doubleclicked');
//     $(".square-part.expanded, .round-part.expanded").removeClass("expanded");
//   });

// });
