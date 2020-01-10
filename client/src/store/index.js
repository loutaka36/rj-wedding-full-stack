import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import accessReducer from './access';
import mobileMenuReducer from './mobileMenu';
import accessSubmitBtnReducer from './accessSubmitBtn';
import singleGuestReducer from './singleGuest';
import groupReducer from './group';
import singleGuestSubmitBtnReducer from './singleGuestSubmitBtn';
import rsvpSubmissionReducer from './rsvpSubmission';
import rsvpSubmitBtnReducer from './rsvpSubmitBtn';
import singlePhotoReducer from './singlePhoto';

const rootReducer = combineReducers({
  access: accessReducer,
  isMobileMenuOpen: mobileMenuReducer,
  isAccessSubmitDisabled: accessSubmitBtnReducer,
  guest: singleGuestReducer,
  group: groupReducer,
  isSingleGuestSubmitDisabled: singleGuestSubmitBtnReducer,
  rsvpSubmission: rsvpSubmissionReducer,
  isRSVPSubmitBtnDisabled: rsvpSubmitBtnReducer,
  singlePhoto: singlePhotoReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);

const store = createStore(rootReducer, middleware);

export default store;
