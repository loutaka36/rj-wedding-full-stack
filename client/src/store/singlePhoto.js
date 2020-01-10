const SET_SINGLE_PHOTO = 'SET_SINGLE_PHOTO';
const REMOVE_SINGLE_PHOTO = 'REMOVE_SINGLE_PHOTO';

export const setSinglePhoto = (singlePhoto) => ({
  type: SET_SINGLE_PHOTO,
  singlePhoto
});

export const removeSinglePhoto = () => ({
  type: REMOVE_SINGLE_PHOTO,
});

const reducer = (singlePhoto = '', action) => {
  switch(action.type) {
    case SET_SINGLE_PHOTO:
      return action.singlePhoto;
    case REMOVE_SINGLE_PHOTO:
      return '';
    default:
      return singlePhoto;
  }
}

export default reducer;
