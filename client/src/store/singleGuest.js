import axios from 'axios';

const SET_SINGLE_GUEST = 'SET_SINGLE_GUEST';
const SET_SINGLE_GUEST_ERROR = 'SET_SINGLE_GUEST_ERROR';

const setSingleGuest = (guest) => ({
  type: SET_SINGLE_GUEST,
  guest
})

const setSingleGuestError = (error) => ({
  type: SET_SINGLE_GUEST_ERROR,
  error
})

export const fetchSingleGuest = (firstName, lastName) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/guest/name/${firstName}_${lastName}`)
      dispatch(setSingleGuest(data))
    } catch (err) {
      if (err.response) {
        dispatch(setSingleGuestError(err.response.data));
      } else {
        dispatch(setSingleGuestError('Network Error'));
      }
    }
  }
}

const reducer = (guest = {guestData: {}, error: ''}, action) => {
  switch(action.type) {
    case SET_SINGLE_GUEST:
      return {
        guestData: action.guest,
        error: ''
      };
    case SET_SINGLE_GUEST_ERROR:
      return {
        guestData: {},
        error: action.error
      }
    default:
      return guest;
  }
}

export default reducer
