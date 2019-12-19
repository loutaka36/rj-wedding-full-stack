import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import accessReducer from './access';
import mobileMenuReducer from './mobileMenu';
import accessSubmitBtnReducer from './accessSubmitBtn';

const rootReducer = combineReducers({
  access: accessReducer,
  isMobileMenuOpen: mobileMenuReducer,
  isAccessSubmitDisabled: accessSubmitBtnReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);

const store = createStore(rootReducer, middleware);

export default store;
