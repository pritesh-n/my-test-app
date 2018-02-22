import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import FunFacts from './FunFacts'
import Contact from './Contact'
import Games from './Games'
import Navigation from './Navigation';
import { Router, Route, Link, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/fun-facts' component={FunFacts} />
        <Route path='/contact' component={Contact} />
        <Route path='/games' component={Games} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
