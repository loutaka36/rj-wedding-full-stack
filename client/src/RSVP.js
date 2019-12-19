import React from 'react';
import './RSVP.css';
import { connect } from 'react-redux';
import RSVPFind from './RSVPFind';
import RSVPSelect from './RSVPSelect';
import RSVPComplete from './RSVPComplete';

class RSVP extends React.Component {

  componentWillUnmount() {

  }

  render() {
    if (this.props.guest.guestData.groupId && false) {
      return //thank you screen
    } else if (this.props.guest.guestData.groupId) {
      return (
        <RSVPSelect />
      );
    } else {
      return (
        <RSVPFind />
      );
    }
  }
}

const mapStateToProps = (state) => ({
  guest: state.guest
})

export default connect(mapStateToProps)(RSVP);
