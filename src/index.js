import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import movieApp from './reducers';
import App from './components/App';
import { isFetching, receiveMovies, fetchMovies } from './actions';

const loggerMiddleware = createLogger();

let store = createStore(
  movieApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
