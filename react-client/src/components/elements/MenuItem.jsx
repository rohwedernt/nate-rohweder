import React, {Component} from 'react';

import './menuItem.css';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false
    };

    this.expand = this.expand.bind(this);
    this.close = this.close.bind(this);

  }

  expand() {
    if (!this.state.showContent) {
      this.setState({ showContent: true })
    } else {
      this.setState({ showContent: false })
    }
  }

  close() {
    this.setState({ showContent: false })
  }

  render() {
    const expanded = this.state.showContent;
    const about = "Matilda and Lola are sweet angels.";

    return (
      <div>
        { expanded ? 
        <div className="menu-item open" onClick={this.expand}>{this.props.text}</div> : 
        <div className="menu-item no" onClick={this.expand}>{this.props.text}</div> }

        <div className="box">
          <div className="box-header"> 
            {this.props.text}
            <span className="close" onClick={this.close} />
          </div>
        </div>
        <p className="text">{about}</p>
      </div>
    );
  }
}

export default MenuItem;
