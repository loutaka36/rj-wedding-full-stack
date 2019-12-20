const TOGGLE_SINGLE_GUEST_SUBMIT_BTN = 'TOGGLE_SINGLE_GUEST_SUBMIT_BTN';

export const toggleSingleGuestSubmitBtn = () => ({
  type: TOGGLE_SINGLE_GUEST_SUBMIT_BTN
});

const reducer = (isSingleGuestSubmitDisabled = false, action) => {
  switch(action.type) {
    case TOGGLE_SINGLE_GUEST_SUBMIT_BTN:
      return !isSingleGuestSubmitDisabled;
    default:
      return isSingleGuestSubmitDisabled;
  }
}

export default reducer;
