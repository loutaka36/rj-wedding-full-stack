import React from 'react';
import './RSVP.css';
import { connect } from 'react-redux';
import RSVPFind from './RSVPFind';
import RSVPSelect from './RSVPSelect';
import RSVPComplete from './RSVPComplete';
import { resetSingleGuest } from './store/singleGuest';
import { resetSubmission } from './store/rsvpSubmission';
import { resetGroup } from './store/group';

class RSVP extends React.Component {

  componentWillUnmount() {
    this.props.resetSingleGuest();
    this.props.resetSubmission();
    this.props.resetGroup();
  }

  render() {
    if (this.props.guest.guestData.groupId && (this.props.rsvpSubmission.submission.accepted|| this.props.rsvpSubmission.submission.declined)) {
      return (
        <RSVPComplete />
      );
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
  guest: state.guest,
  rsvpSubmission: state.rsvpSubmission
});

const mapDispatchToProps = (dispatch) => ({
  resetSingleGuest: () => dispatch(resetSingleGuest()),
  resetSubmission: () => dispatch(resetSubmission()),
  resetGroup: () => dispatch(resetGroup())
});

export default connect(mapStateToProps, mapDispatchToProps)(RSVP);
