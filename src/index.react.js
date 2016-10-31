import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';


// Redux
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from 'reducers';


const logger = reduxLogger();
const store = createStore(reducers, applyMiddleware(thunk, promise(), logger));



ReactDOM.render(<App store={store}/> , document.getElementById('app'))
