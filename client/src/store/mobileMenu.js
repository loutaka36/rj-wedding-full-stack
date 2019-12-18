const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';

export const toggleMobileMenu = () => ({
  type: TOGGLE_MOBILE_MENU
})

const reducer = (isMobileMenuOpen = false, action) => {
  switch(action.type) {
    case TOGGLE_MOBILE_MENU:
      return !isMobileMenuOpen;
    default:
      return isMobileMenuOpen;
  }
}

export default reducer;
