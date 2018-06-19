import React, { Component } from 'react';
import Navigation from './pages/Navigation.jsx';
import Main from './pages/Main.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    )
  }
}

export default App;
