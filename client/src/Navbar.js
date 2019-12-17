import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-rj">
        <Link to="/">R&J</Link>
      </div>
      <div className="navbar-items">
        <div className="navbar-item" >
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item" >
          <Link to="/details">Details</Link>
        </div>
        <div className="navbar-item" >
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="navbar-item" >
          <Link to="/rsvp">RSVP</Link>
        </div>
      </div>
      <div className="navbar-hamburger" onClick={props.handleClick}>
        <div className="navbar-hamburger_bar"></div>
        <div className="navbar-hamburger_bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
