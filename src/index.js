import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieApp from './reducers';
// import App from './containers/App';
import {
  SEARCH_MOVIES, RECEIVE_MOVIES, REMIND_MOVIE, FORGET_MOVIE
} from './actions';

let store = createStore(movieApp);

// console.log(store.getState());

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
