import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getMe} from './store/access';
import AccessPage from './AccessPage';
import Navbar from './Navbar';
import Home from './Home';
import Details from './Details';
import Accommodations from './Accommodations';
import Gallery from './Gallery';
import RSVP from './RSVP';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

class App extends React.Component {
  async componentWillMount() {
    await this.props.getMe()
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
            <Route exact path="/accommodations">
              <Accommodations />
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
          <Footer />
        </div>
      );
    } else {
      return (
        <AccessPage />
      );
    }
  }
}

const mapStateToProps = (state) => ({
  access: state.access
});

const mapDispatchToProps = (dispatch) => ({
  getMe: () => dispatch(getMe())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
