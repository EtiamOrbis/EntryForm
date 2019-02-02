import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import initialState from './initialState';

function configureStore(_initialState) {
  return createStore(reducer, _initialState, applyMiddleware(thunkMiddleware));
}

const store = configureStore(initialState);

export default store;
