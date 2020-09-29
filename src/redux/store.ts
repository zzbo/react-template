import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = process.env.NODE_ENV !== 'production'
  ? composeEnhancers(applyMiddleware(thunkMiddleware))
  : applyMiddleware(thunkMiddleware);

export default createStore(reducer, middleware);
