const TOGGLE_RSVP_SUBMIT_BTN = 'TOGGLE_SINGLE_GUEST_SUBMIT_BTN';

export const toggleRSVPSubmitBtn = () => ({
  type: TOGGLE_RSVP_SUBMIT_BTN
});

const reducer = (isRSVPSubmitDisabled = false, action) => {
  switch(action.type) {
    case TOGGLE_RSVP_SUBMIT_BTN:
      return !isRSVPSubmitDisabled;
    default:
      return isRSVPSubmitDisabled;
  }
}

export default reducer;
