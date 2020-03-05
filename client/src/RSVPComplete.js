import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './RSVPComplete.css';

const RSVPComplete = (props) => {
  let accepted = props.rsvpSubmission.submission.accepted.map(submission => (
    <div className="rsvp-complete-accepted">
      <p>{submission.firstName} {submission.lastName}</p>
      <p>Attendence: {submission.attendence[0].toUpperCase() + submission.attendence.slice(1)}</p>
      <p>Entree: {submission.entree[0].toUpperCase() + submission.entree.slice(1)}</p>
      <p>Dietary Restrictions: {submission.restrictions || "None"}</p>
    </div>
  ));

  let declined = props.rsvpSubmission.submission.declined.map(submission => (
    <div className="rsvp-complete-declined">
      <p>{submission.firstName} {submission.lastName}</p>
      <p>Attendence: {submission.attendence[0].toUpperCase() + submission.attendence.slice(1)}</p>
    </div>
  ));

  return (
    <div className="rsvp-complete">
      <div className="rsvp-complete-message">Thanks for submitting! Here is a confirmation of your submission: </div>
      {accepted}
      {declined}
      <div className="rsvp-complete-link">
        <Link to="/home">Back to home</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  rsvpSubmission: state.rsvpSubmission
})

export default withRouter(connect(mapStateToProps)(RSVPComplete));
