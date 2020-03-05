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
        <div className="rsvp">
          <div className="rsvp-top">
            <div className="rsvp-top_title">RSVP</div>
            <div className="rsvp-top_text">Thanks for submitting! Here is a confirmation of your submission: </div>
          </div>
          <RSVPComplete />
        </div>
      );
    } else if (this.props.guest.guestData.groupId) {
      return (
        <div className="rsvp">
          <div className="rsvp-top">
            <div className="rsvp-top_title">RSVP</div>
            <div className="rsvp-top_text">{`Hi, ${this.props.guest.guestData.firstName}! Who will be attending?`}</div>
          </div>
          <RSVPSelect />
        </div>
      );
    } else {
      return (
        <div className="rsvp">
          <div className="rsvp-top">
            <div className="rsvp-top_title">RSVP</div>
          </div>
          <RSVPFind />
        </div>
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
