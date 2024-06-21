import apiReducer from './reducer';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

const store = createStore(apiReducer, applyMiddleware(thunk));

export default store;
