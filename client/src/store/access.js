import axios from 'axios';
import {toggleAccessSubmitBtn} from './accessSubmitBtn';

const ACCESS_GRANTED = 'ACCESS_GRANTED';
const ACCESS_DENIED = 'ACCESS_DENIED';

//REMEMBER COMPONENT WILL UNMOUNT
const grantAccess = () => ({
  type: ACCESS_GRANTED
})

const denyAccess = (error) => ({
  type: ACCESS_DENIED,
  error
})

export const attemptLogin = (inviteCode) => {
  return async (dispatch) => {
    try {
      await axios.put('/auth/access', {inviteCode});
      dispatch(toggleAccessSubmitBtn());
      dispatch(grantAccess());
    } catch (err) {
      if (err.response) {
        dispatch(toggleAccessSubmitBtn());
        dispatch(denyAccess(err.response.data));
      } else {
        dispatch(toggleAccessSubmitBtn());
        dispatch(denyAccess('Network Error'));
      }
    }
  }
}

const reducer = (access = {allow: false, error: ''}, action) => {
  switch(action.type) {
    case ACCESS_GRANTED:
      return {
        allow: true,
        error: ''
      };
    case ACCESS_DENIED:
      return {
        allow: false,
        error: action.error
      };
    default:
      return access;
  }
}

export default reducer
