import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import moviesReducer from './cinemaApp';

const persistConfig = {
  key: 'moviesStorage',
  storage: AsyncStorage,
  whitelist: ['moviesReducer'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    moviesReducer,
  })
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};
