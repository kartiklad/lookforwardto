import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieApp from './reducers';
import App from './components/App';

let store = createStore(movieApp);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
