import axios from 'axios';

const SET_SUCCESS = 'SET_SUCCESS';
const SET_SUBMISSION_ERROR = 'SET_SUBMISSION_ERROR';
const RESET_SUBMISSION =  'RESET_SUBMISSION';

const setSuccess = (submission) => ({
  type: SET_SUCCESS,
  submission
});

const setSubmissionError = (error) => ({
  type: SET_SUBMISSION_ERROR,
  error
});

export const resetSubmission = () => ({
  type: RESET_SUBMISSION
})

export const postSubmission = (accept, decline) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put('/api/guest/rsvp', {
        accept,
        decline
      })
      console.log(data)
      dispatch(setSuccess(data));
    } catch (err) {
      if (err.response) {
        dispatch(setSubmissionError(err.response.data));
      } else {
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
