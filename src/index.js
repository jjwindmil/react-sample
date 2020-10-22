import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Root from "./components/Root";

//createStore와 rootReducer 호출
import {createStore } from 'redux';
import {Provider } from 'react-redux';
import rootReducer from './store/redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools());
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
