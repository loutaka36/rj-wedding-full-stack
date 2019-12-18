import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = (props) => {
  let menuClass = ["mobile-menu"];
  let menuExitClass1 = ["mobileMenuX-bar1"]
  let menuExitClass2 = ["mobileMenuX-bar2"]
  if (props.isOpen) {
    menuClass.push("open");
    menuExitClass1.push("x1-open")
    menuExitClass2.push("x2-open")
  }
  return (
    <div className={menuClass.join(" ")}>
      <div className="mobileMenu-top">
        <div className="mobileMenuX" onClick={props.handleClick}>
          <div className={menuExitClass1.join(" ")}></div>
          <div className={menuExitClass2.join(" ")}></div>
        </div>
      </div>
      <div className="mobileMenu-items">
        <div className="mobileMenu-item" onClick={props.handleClick}>
          <Link to="/">Home</Link>
        </div>
        <hr/>
        <div className="mobileMenu-item" onClick={props.handleClick}>
          <Link to="/details">Details</Link>
        </div>
        <hr/>
        <div className="mobileMenu-item" onClick={props.handleClick}>
          <Link to="/gallery">Gallery</Link>
        </div>
        <hr/>
        <div className="mobileMenu-item" onClick={props.handleClick}>
          <Link to="/rsvp">RSVP</Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;

