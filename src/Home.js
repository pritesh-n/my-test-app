import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import coverImage from './images/cover.jpg';
import Navigation from './Navigation';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Home extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Space</h1>
          <h3 className="App-sub-title">Explorer</h3>
        </header>
        <p className="App-intro">
          Get to know some interesting facts and explore space like never before!
        </p>
        <Content />
      </div>
    );
  }
}

export default Home;