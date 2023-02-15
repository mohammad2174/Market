import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'


const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store)
