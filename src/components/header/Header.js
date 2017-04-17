import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import {TweenMax, Power3} from 'gsap';

export default class Header extends Component{

  componentDidMount() {

    //TweenMax.fromTo("#header ul li", .5, {opacity:0, x:0, y:-10}, {opacity:1, x:0, y:0, ease:Power3.easeOut, delay: 0.2} );
    TweenMax.fromTo("#header ul li", .5, {opacity:0, x:0, y:-10}, {opacity:1, x:0, y:0, ease:Power3.easeOut, delay: 0.2} );
  }

  render() {
    return (
      <div id="header">
        <div className="serach"></div>
        <div className="logo">Logo</div>
        <div className="overlay-trigger" data-overlay="main-menu"></div>
        <ul className="">
          <li className=""><Link to="/">Home</Link></li>
          <li className=""><Link to="/about">About</Link></li>
          <li className=""><Link to="/search">Search</Link></li>
          <li className=""><Link to="/filter">Filter</Link></li>
          <li className=""><Link to="/topics">Topics</Link></li>
          <li className=""><Link to="/gjhfhghj">404</Link></li>
        </ul>
      </div>
    )
  }
}
