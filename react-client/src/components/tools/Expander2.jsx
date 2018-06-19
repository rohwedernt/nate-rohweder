import React, { Component } from "react";

import "./expander2.css";

class Expander2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };

    this.animate = this.animate.bind(this);
  }

  animate() {
    if (!this.state.expanded) {
      this.setState({ expanded: true });
    } else {
      this.setState({ expanded: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.expanded ? (
          <div className="open-close open" onClick={this.animate} />
        ) : (
          <div className="open-close no" onClick={this.animate} />
        )}
        <div className="box">Hey Folks</div>
        <p className="text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    );
  }
}

export default Expander2;

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
