import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Card extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="card">
        <p className="card-title">{this.props.title}</p>
        <a href={this.props.link} className="cta">Know More</a>
      </div>
    );
  }
}

export default Card;
