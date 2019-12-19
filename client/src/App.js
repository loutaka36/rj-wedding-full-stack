import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AccessPage from './AccessPage';
import Navbar from './Navbar';
import Home from './Home';
import Details from './Details';
import Gallery from './Gallery';
import RSVP from './RSVP';
import MobileMenu from './MobileMenu';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.access.allow) {
      return (
        <div className="App">
          <Navbar />
          <MobileMenu />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/rsvp">
              <RSVP />
            </Route>
            <Route exact path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/">
            <AccessPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  access: state.access
});

export default withRouter(connect(mapStateToProps)(App));
