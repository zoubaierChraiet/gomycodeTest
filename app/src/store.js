import  promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import {createLogger} from "redux-logger"
import createSaga from "redux-saga"

import rootReducer from './reducers' ;
import {rootSega} from "./sega/rootSaga"

const sagaMiddleware = createSaga() ;

const middleware = applyMiddleware(
  promiseMiddleware(),
  thunk,
  sagaMiddleware,
  createLogger()
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {} ,
    composeEnhancers(middleware) 
);

sagaMiddleware.run(rootSega)

export default store;
