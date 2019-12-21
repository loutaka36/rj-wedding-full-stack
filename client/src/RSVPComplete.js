import React from 'react';
import { Link } from 'react-router-dom';

const RSVPComplete = () => {
  return (
    <div className="rsvp-complete">
      <div>Thanks for the submission!</div>
      <Link to="/home">Back to home</Link>
    </div>
  );
}

export default RSVPComplete;
