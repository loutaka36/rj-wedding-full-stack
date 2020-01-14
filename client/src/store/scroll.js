const SCROLLING = 'SCROLLING';
const AT_TOP = 'AT_TOP';

export const scrolling = () => ({
  type: SCROLLING,
})

export const atTop = () => ({
  type: AT_TOP
})

const reducer = (isScrolling = false, action) => {
  switch(action.type) {
    case SCROLLING:
      return true;
    case AT_TOP:
      return false;
    default:
      return isScrolling;
  }
}

export default reducer
