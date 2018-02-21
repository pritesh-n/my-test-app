import React, { Component } from 'react';
import Card from './Card.js';
import './content.css';

class Content extends Component {
  render() {
    return (
      <div className="main-content">
        <Card title="milky way" link="https://www.space.com/19915-milky-way-galaxy.html"/>
      </div>
    );
  }
}

export default Content;
