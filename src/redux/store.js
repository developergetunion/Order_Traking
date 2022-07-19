import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducers from './rootReducers';
import {rootSaga} from './productList/reduxSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

const store = createStore(rootReducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
