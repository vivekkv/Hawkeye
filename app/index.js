import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import routes from './routes';
import store from './reduxImplementations/configureStore';
import { readSentinelCookie } from 'utils/authRegistry';
import { logError } from 'utils/errorLog';
import { sentinelHomeUrl } from 'utils/apiConfig';

(() => { 

    readSentinelCookie().then(() => {
        
        const history = syncHistoryWithStore(hashHistory, store);
        ReactDOM.render(<Provider store={store}><Router history={history} routes={routes}></Router></Provider>, document.getElementById('root'));
        
    }).catch((e) => {

        window.location = sentinelHomeUrl;
        logError(e);
    });

})();
