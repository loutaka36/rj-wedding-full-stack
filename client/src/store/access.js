const ACCESS_GRANTED = 'ACCESS_GRANTED';
//REMEMBER COMPONENT WILL UNMOUNT
const grantAccess = () => ({
  type: ACCESS_GRANTED
})

const attemptLogin = (inviteCode) => {
  return async (dispatch) => {

  }
}

const reducer = (allowAccess = false, action) => {
  switch(action.type) {
    case ACCESS_GRANTED:
      return true;
    default:
      return allowAccess;
  }
}

export default reducer
