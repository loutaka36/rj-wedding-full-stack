import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './MobileMenu.css';
import { toggleMobileMenu } from './store/mobileMenu';

const MobileMenu = (props) => {
  let menuClass = ["mobile-menu"];
  let menuExitClass1 = ["mobileMenuX-bar1"]
  let menuExitClass2 = ["mobileMenuX-bar2"]
  if (props.isMobileMenuOpen) {
    menuClass.push("open");
    menuExitClass1.push("x1-open")
    menuExitClass2.push("x2-open")
  }
  return (
    <div className={menuClass.join(" ")}>
      <div className="mobileMenu-top">
        <div className="mobileMenuX" onClick={props.toggleMobileMenu}>
          <div className={menuExitClass1.join(" ")}></div>
          <div className={menuExitClass2.join(" ")}></div>
        </div>
      </div>
      <div className="mobileMenu-items">
        <div className="mobileMenu-item" onClick={props.toggleMobileMenu}>
          <Link to="/">Home</Link>
        </div>
        <hr/>
        <div className="mobileMenu-item" onClick={props.toggleMobileMenu}>
          <Link to="/details">Details</Link>
        </div>
        <hr/>
        <div className="mobileMenu-item" onClick={props.toggleMobileMenu}>
          <Link to="/accommodations">Accommodations</Link>
        </div>
        <hr/>
        <div className="mobileMenu-item" onClick={props.toggleMobileMenu}>
          <Link to="/gallery">Gallery</Link>
        </div>
        <hr/>
        <div className="mobileMenu-item" onClick={props.toggleMobileMenu}>
          <Link to="/rsvp">RSVP</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isMobileMenuOpen: state.isMobileMenuOpen
});

const mapDispatchToProps = (dispatch) => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobileMenu));

