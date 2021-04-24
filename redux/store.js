import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import rootReducer from './reducers';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from "redux-persist";

const persistenceConfigs = {
  key: "order", // whatever you want to keep as your key
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistenceConfigs, rootReducer);

const middleWare = [thunkMiddleware ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
export const persistedStore = persistStore(store);

export default store;