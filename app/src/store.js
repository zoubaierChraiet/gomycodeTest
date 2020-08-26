import  promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import {createLogger} from "redux-logger"

import rootReducer from './reducers' ;

const middleware = applyMiddleware(
  promiseMiddleware(),
  thunk,
  createLogger()
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {} ,
    composeEnhancers(middleware) 
);


export default store;
