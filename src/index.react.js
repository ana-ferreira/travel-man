import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';


// Redux
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from 'reducers';

let middlwares = applyMiddleware([
  thunk,
  promise()
]);
if(process.env.NODE_ENV !== 'production'){
  middlwares = middlwares( reduxLogger());
}

const store = createStore(reducers, middlwares);



ReactDOM.render(<App store={store}/> , document.getElementById('app'))
