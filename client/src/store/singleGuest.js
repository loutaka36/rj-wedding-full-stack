import axios from 'axios';
import { toggleSingleGuestSubmitBtn } from './singleGuestSubmitBtn';

const SET_SINGLE_GUEST = 'SET_SINGLE_GUEST';
const SET_SINGLE_GUEST_ERROR = 'SET_SINGLE_GUEST_ERROR';
const RESET_SINGLE_GUEST = 'RESET_SINGLE_GUEST';

const setSingleGuest = (guest) => ({
  type: SET_SINGLE_GUEST,
  guest
});

const setSingleGuestError = (error) => ({
  type: SET_SINGLE_GUEST_ERROR,
  error
});

export const resetSingleGuest = () => ({
  type: RESET_SINGLE_GUEST
});

export const fetchSingleGuest = (firstName, lastName) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/guest/name/${firstName}_${lastName}`)
      dispatch(toggleSingleGuestSubmitBtn());
      dispatch(setSingleGuest(data));
    } catch (err) {
      if (err.response) {
        dispatch(toggleSingleGuestSubmitBtn());
        dispatch(setSingleGuestError(err.response.data));
      } else {
        dispatch(toggleSingleGuestSubmitBtn());
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
    case RESET_SINGLE_GUEST:
      return {
        guestData: {},
        error: ''
      }
    default:
      return guest;
  }
}

export default reducer
