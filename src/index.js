import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers'
import middleware from './middleware';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.scss';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


