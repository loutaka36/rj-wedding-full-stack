import React from 'react';
import './Gallery.css';

const photoUrls = [
  'JR_0001.jpg',
  'JR_0005.jpg',
  'JR_0014.jpg',
  'JR_0023.jpg',
  'JR_0034.jpg',
  'JR_0078.jpg',
  'JR_0083.jpg',
  'JR_0129.jpg',
  'JR_0133.jpg',
  'JR_0153.jpg',
  'JR_0206.jpg',
]

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-top">
        <div className="gallery-top_text">Photo Gallery</div>
      </div>
      <div className="gallery-photos">
        {
          photoUrls.map(photo =>
            <div className="gallery-photo">
              <img src={require(`./engagement-pics/${photo}`)}/>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Gallery;
