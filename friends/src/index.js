import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import combineReducers from './reducer'

const store = createStore(
    combineReducers,
    applyMiddleware(thunk, logger)
)

ReactDOM.render(<Router><Provider store={store} ><App /></Provider></Router>, document.getElementById('root'));


