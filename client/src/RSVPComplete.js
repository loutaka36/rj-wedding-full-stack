import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const RSVPComplete = (props) => {
  let accepted = props.rsvpSubmission.submission.accepted.map(submission => (
    <div className="rsvp-complete-accepted">
      <p>{submission.firstName} {submission.lastName}</p>
      <p>Attendence: {submission.attendence}</p>
      <p>Entree: {submission.entree}</p>
      <p>Dietary Restrictions: {submission.restrictions}</p>
    </div>
  ));

  let declined = props.rsvpSubmission.submission.declined.map(submission => (
    <div className="rsvp-complete-declined">
      <p>{submission.firstName} {submission.lastName}</p>
      <p>Attendence: {submission.attendence}</p>
    </div>
  ));

  return (
    <div className="rsvp-complete">
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
