import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

class Content extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <ul className="nav">
        <li><Link to={'/'} >Home</Link></li>
        <li><Link to={'/about'} >About</Link></li>
        <li><Link to={'/fun-facts'} >Fun Facts</Link></li>
        <li><Link to={'/contact'} >Contact</Link></li>
        <li><Link to={'/games'} >Games</Link></li>
        </ul>
      </div>
    );
  }
}

export default Content;
