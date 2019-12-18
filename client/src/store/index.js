import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import accessReducer from './access';
import mobileMenuReducer from './mobileMenu';

const rootReducer = combineReducers({
  allowAccess: accessReducer,
  isMobileMenuOpen: mobileMenuReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);

const store = createStore(rootReducer, middleware);

export default store;
