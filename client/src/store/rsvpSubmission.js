import axios from 'axios';
import { toggleRSVPSubmitBtn } from './rsvpSubmitBtn';

const SET_SUCCESS = 'SET_SUCCESS';
const SET_SUBMISSION_ERROR = 'SET_SUBMISSION_ERROR';
const RESET_SUBMISSION =  'RESET_SUBMISSION';

const setSuccess = (submission) => ({
  type: SET_SUCCESS,
  submission
});

export const setSubmissionError = (error) => ({
  type: SET_SUBMISSION_ERROR,
  error
});

export const resetSubmission = () => ({
  type: RESET_SUBMISSION
})

export const postSubmission = (submissions) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put('/api/guest/rsvp', {submissions});
      dispatch(toggleRSVPSubmitBtn())
      dispatch(setSuccess(data));
    } catch (err) {
      if (err.response) {
        dispatch(toggleRSVPSubmitBtn())
        dispatch(setSubmissionError(err.response.data));
      } else {
        dispatch(toggleRSVPSubmitBtn())
        dispatch(setSubmissionError('Network Error'));
      }
    }
  }
}

const reducer = (rsvpSubmission = {submission: {}, error: ''}, action) => {
  switch(action.type) {
    case SET_SUCCESS:
      return {
        submission: action.submission,
        error: ''
      };
    case SET_SUBMISSION_ERROR:
      return {
        submission: {},
        error: action.error
      }
    case RESET_SUBMISSION:
      return {
        submission: {},
        error: ''
      }
    default:
      return rsvpSubmission;
  }
}

export default reducer
