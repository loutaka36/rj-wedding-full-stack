import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Details from './Details';
import Gallery from './Gallery';
import RSVP from './RSVP';
import MobileMenu from './MobileMenu';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMoblieMenuOpen: false
    }
    this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
  }

  handleMobileMenuClick = () => {
    this.setState((prevState) => {
      return {
        isMobileMenuOpen: !prevState.isMobileMenuOpen
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar handleClick={this.handleMobileMenuClick}/>
        <MobileMenu handleClick={this.handleMobileMenuClick} isOpen={this.state.isMobileMenuOpen}/>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/rsvp">
            <RSVP />
          </Route>
          <Route exact path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    );
  }
}


export default App;
