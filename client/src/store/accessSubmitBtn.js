const TOGGLE_ACCESS_SUBMIT_BTN = 'TOGGLE_ACCESS_SUBMIT_BTN';

export const toggleAccessSubmitBtn = () => ({
  type: TOGGLE_ACCESS_SUBMIT_BTN
});

const reducer = (isAccessSubmitDisabled = false, action) => {
  switch(action.type) {
    case TOGGLE_ACCESS_SUBMIT_BTN:
      return !isAccessSubmitDisabled;
    default:
      return isAccessSubmitDisabled;
  }
}

export default reducer
