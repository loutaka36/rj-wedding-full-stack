import React from 'react';
import { connect } from 'react-redux';
import { setSinglePhoto, removeSinglePhoto } from './store/singlePhoto';
import './Gallery.css';

const photoUrls = [
  'JR_0001.jpg',
  'JR_0005.jpg',
  'JR_0014.jpg', //v
  'JR_0129.jpg', //v
  'JR_0078.jpg',
  'JR_0083.jpg',
  'JR_0133.jpg',
  'JR_0153.jpg',
  'JR_0206.jpg', //v
  'JR_0023.jpg', //bw
  'JR_0034.jpg', //bw
]

const Gallery = (props) => {
  let singlePhotoClass = 'gallery-single-photo';
  if (props.singlePhoto) {
    singlePhotoClass += ' gallery-single-photo_open'
  }

  const checkTarget = (event) => {
    if (event.target.tagName === 'IMG') {
      props.setSinglePhoto(event.target.attributes.getNamedItem('index').value)
    }
  }

  const toNextPhoto = (direction) => {
    if (props.singlePhoto === '10' && direction === 'increment') {
      props.setSinglePhoto('0')
    } else if (props.singlePhoto === '0' && direction === 'decrement') {
      props.setSinglePhoto('10')
    } else if (direction === 'increment') {
      props.setSinglePhoto(String(parseInt(props.singlePhoto, 10) + 1))
    } else {
      props.setSinglePhoto(String(parseInt(props.singlePhoto, 10) - 1))
    }
  }

  const exitSinglePhoto = (event) => {
    if (event.target.className !== 'chevron' && event.target.tagName !== 'IMG') {
      props.removeSinglePhoto();
    }
  }

  return (
    <div className="gallery">
      {/* <div className={singlePhotoClass} onClick={(event) => exitSinglePhoto(event)}>
        <div className="chevron" onClick={() => toNextPhoto('decrement')}>{'<'}</div>
        <img src={props.singlePhoto ? require(`./engagement-pics/${photoUrls[parseInt(props.singlePhoto, 10)]}`) : ''}/>
        <div className="chevron" onClick={() => toNextPhoto('increment')}>{'>'}</div>
      </div>
      <div className="gallery-top">
        <div className="gallery-top_text">Photo Gallery</div>
      </div>
      <div className="gallery-photos">
        <div className="gallery-photo-hstack" onClick={(event) => checkTarget(event)}>
          <div className="gallery-photo-vstack">
            <img index="0" src={require('./engagement-pics/JR_0001.jpg')}/>
            <img index="1" src={require('./engagement-pics/JR_0005.jpg')}/>
          </div>
          <img index="2" className="v_img" src={require('./engagement-pics/JR_0014.jpg')}/>
        </div>
        <div className="gallery-photo-hstack" onClick={(event) => checkTarget(event)}>
          <img index="3" className="v_img" src={require('./engagement-pics/JR_0129.jpg')}/>
          <div className="gallery-photo-vstack">
            <img index="4" src={require('./engagement-pics/JR_0078.jpg')}/>
            <img index="5" src={require('./engagement-pics/JR_0083.jpg')}/>
          </div>
        </div>
        <div className="gallery-photo-hstack" onClick={(event) => checkTarget(event)}>
          <div className="gallery-photo-vstack">
            <img index="6" src={require('./engagement-pics/JR_0133.jpg')}/>
            <img index="7" src={require('./engagement-pics/JR_0153.jpg')}/>
          </div>
          <img index="8" className="v_img" src={require('./engagement-pics/JR_0206.jpg')}/>
        </div>
        <div className="gallery-photo-hstack" onClick={(event) => checkTarget(event)}>
          <img index="9" src={require('./engagement-pics/JR_0023.jpg')}/>
          <img index="10" src={require('./engagement-pics/JR_0034.jpg')}/>
        </div>
      </div> */}
    </div>
  );
}

const mapStateToProps = state => ({
  singlePhoto: state.singlePhoto
});

const mapDispatchToProps = dispatch => ({
  setSinglePhoto: (photo) => dispatch(setSinglePhoto(photo)),
  removeSinglePhoto: () => dispatch(removeSinglePhoto())
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
