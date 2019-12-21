import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import './Navbar.css'
import { toggleMobileMenu } from './store/mobileMenu';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-rj">
        <Link to="/">Ryunoshin & Joyce</Link>
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
      <div className="navbar-hamburger" onClick={props.toggleMobileMenu}>
        <div className="navbar-hamburger_bar"></div>
        <div className="navbar-hamburger_bar"></div>
      </div>
    </nav>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu())
})

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
