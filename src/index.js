import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise'

import rootReducer from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

const componseEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
                        rootReducer, 
                        componseEnchancers(applyMiddleware(promise, thunkMiddleware))
                    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
