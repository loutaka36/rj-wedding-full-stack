import React from 'react';
import './Details.css';

const Details = () => {
  return (
    <div className="details">
      <div className="details-top">
        <div className="details-top_text">Details</div>
      </div>
      <div className="details-ceremony">
        <div className="details-ceremony_title">
          <div className="details-ceremony_title__text">Ceremony</div>
          <div className="details-ceremony_title__time">2 pm</div>
        </div>
        <div className="details-ceremony_text">
          <div className="details-ceremony_text__title">Trinity Chapel</div>
          <div className="details-ceremony_text__item">130 N West Street<br/>Wheaton, Illinois 60187</div>
          <div className="details-ceremony_text__item">
            <a href="https://www.google.com/maps/place/Trinity+Episcopal+Church/@41.8657196,-88.1141642,17z/data=!3m1!4b1!4m5!3m4!1s0x880e54f50aba627d:0x2ef9e72acd27ba18!8m2!3d41.8657156!4d-88.1119755" target="_blank" rel="noopener noreferrer">Directions</a>
          </div>
        </div>
      </div>
      <div className="details-divider">
        <div className="details-divider_image"></div>
      </div>
      <div className="details-reception">
        <div className="details-reception_title">
          <div className="details-reception_title__text">Reception</div>
          <div className="details-reception_title__time">
            5 pm cocktail hour
          </div>
          <div className="details-reception_title__time">
            6 pm dinner
          </div>
        </div>
        <div className="details-reception_text">
          <div className="details-reception_text__title">Hyatt Regency  Lisle Near Naperville</div>
          <div className="details-reception_text__item">1400 Corporetum Drive<br/>Lisle, Illinois 60532</div>
          <div className="details-reception_text__item">
            <a href="https://www.google.com/maps/place/Hyatt+Regency+Lisle+Near+Naperville/@41.806982,-88.0814548,17z/data=!3m1!4b1!4m8!3m7!1s0x880e5147b5a4f947:0x5399292de51430f1!5m2!4m1!1i2!8m2!3d41.806982!4d-88.0792661" target="_blank" rel="noopener noreferrer">Directions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
