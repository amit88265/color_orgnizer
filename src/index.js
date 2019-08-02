import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colorsReducer } from './reducers/colorsReducer';
import { sortReducer } from './reducers/sortReducer';


const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

//saving but not using 
const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = () =>
    createStore(combineReducers({ colorsReducer, sortReducer }), {}, applyMiddleware(logger, saver));

const store = storeFactory();


const render = () =>
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    )
store.subscribe(render)
render()

