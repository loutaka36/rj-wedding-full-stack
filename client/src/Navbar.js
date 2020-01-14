import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import './Navbar.css'
import { toggleMobileMenu } from './store/mobileMenu';
import { scrolling, atTop } from './store/scroll';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 70) {
      this.props.scrolling();
    } else {
      this.props.atTop();
    }
  }

  render() {
    let navbarClass = "navbar";
    if (this.props.isScrolling) {
      navbarClass += " scrolling";
    }

    return (
      <nav className={navbarClass}>
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
            <Link to="/accommodations">Accommodations</Link>
          </div>
          <div className="navbar-item" >
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="navbar-item" >
            <Link to="/rsvp">RSVP</Link>
          </div>
        </div>
        <div className="navbar-hamburger" onClick={this.props.toggleMobileMenu}>
          <div className="navbar-hamburger_bar"></div>
          <div className="navbar-hamburger_bar"></div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isScrolling: state.isScrolling
})

const mapDispatchToProps = (dispatch) => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu()),
  scrolling: () => dispatch(scrolling()),
  atTop: () => dispatch(atTop())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
