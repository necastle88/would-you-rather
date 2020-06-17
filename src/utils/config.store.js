import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
 
import middleware from '../middleware';
import reducer from '../reducers';
 
export const store = createStore(reducer, middleware);

export const persistor = persistStore(store);

export default { store, persistStore };