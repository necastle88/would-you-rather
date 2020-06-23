import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { handleInitData } from './actions/shared';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.scss';
import configureStore from './config/store.config';


const { persistor, store } = configureStore()

const onBeforeLift = () => {
  handleInitData();
}

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} onBeforeLift={onBeforeLift} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);


