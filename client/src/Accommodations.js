import React from 'react';
import './Accommodations.css';

const Accommodations = () => {
  return (
    <div className="accommodations">
      <div className="accommodations-top">
        <div className="accommodations-top_text">Accomodations</div>
      </div>
      <div className="accommodations-hotel">
        <p>
        We have a hotel block at Hyatt Regency Lisle. Yes, this is the same location as the reception, so if you book a hotel room here, you can just enjoy the reception and then go upstairs to your hotel room to sleep!<br/><br/>

        Single and double rooms are $110. Triple rooms are $120. Breakfast is included.<br/><br/>

        Please book your rooms <a href="#" target="_blank" rel="noopener noreferrer">here</a>.<br/><br/>

        If you plan to explore the area, Hyatt Regency Lisle offers a free shuttle within a 5-mile radius of the hotel.<br/><br/>

        Please reach out to us if you have any questions!
        </p>
      </div>
    </div>
  );
}

export default Accommodations;
