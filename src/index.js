import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store';
import { loadTodos } from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const store = configureStore();

store.dispatch(loadTodos());

// Wrap app in <Provider> to give access to Redux to component tree
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
