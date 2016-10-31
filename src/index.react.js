import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';


// Redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import promise from 'redux-promise';

import places from 'reducers/places';


const logger = reduxLogger();
const store = createStore(combineReducers({places}), applyMiddleware(thunk, promise, logger));



ReactDOM.render(<App store={store}/> , document.getElementById('app'))
