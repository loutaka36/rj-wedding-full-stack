import axios from 'axios';

const SET_GROUP = 'SET_GROUP';
const SET_GROUP_ERROR = 'SET_GROUP_ERROR';
const RESET_GROUP = 'RESET_GROUP';

const setGroup = (group) => ({
  type: SET_GROUP,
  group
})

const setGroupError = (error) => ({
  type: SET_GROUP_ERROR,
  error
})

export const resetGroup = () => ({
  type: RESET_GROUP
})

export const fetchGroup = (groupId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/guest/group/${groupId}`)
      dispatch(setGroup(data))
    } catch (err) {
      if (err.response) {
        dispatch(setGroupError(err.response.data));
      } else {
        dispatch(setGroupError('Network Error'));
      }
    }
  }
}

const reducer = (group = {groupMembers: [], error: ''}, action) => {
  switch(action.type) {
    case SET_GROUP:
      return {
        groupMembers: action.group,
        error: ''
      };
    case SET_GROUP_ERROR:
      return {
        groupMembers: action.group,
        error: action.error
      }
    case RESET_GROUP:
      return {
        groupMembers: [],
        error: ''
      }
    default:
      return group;
  }
}

export default reducer
