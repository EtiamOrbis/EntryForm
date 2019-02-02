import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import initialState from './initialState';

function configureStore(_initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware));
  return createStore(reducer, _initialState, enhancer);
}

const store = configureStore(initialState);

export default store;
