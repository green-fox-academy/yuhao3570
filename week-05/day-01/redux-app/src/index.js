import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tagsReducer from './reducers/reducer';

const store= createStore(
    tagsReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // counter action test
// store.dispatch({type: 'SET', amount: 6});
// console.log(store.getState());

// store.dispatch({type: 'INCREASE'});
// console.log(store.getState());

// store.dispatch({type: 'INCREASE', amount: 2});
// console.log(store.getState());

// store.dispatch({type: 'RESET'});
// console.log(store.getState());

// store.dispatch({type: 'INCREASE'});
// console.log(store.getState());

// store.dispatch({type: 'DECREASE', amount: 4});
// console.log(store.getState());

// // tag actions test
// store.dispatch({type: 'ADD_TAG', tag: 'blue'});
// console.log(store.getState());

// store.dispatch({type: 'ADD_TAG', tag: 'bold'});
// console.log(store.getState());

// store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
// console.log(store.getState());

// store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
// console.log(store.getState());

// store.dispatch({type: 'ADD_TAG', tag: 'bold'});
// console.log(store.getState());

// store.dispatch({type: 'REMOVE_TAGS'});
// console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA