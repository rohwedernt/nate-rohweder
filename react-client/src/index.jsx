import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';


import '../dist/styles.css'

ReactDOM.render(<BrowserRouter><App id="app" /></BrowserRouter>, document.getElementById('app'));
