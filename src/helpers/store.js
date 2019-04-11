import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import createSagaMiddleware from 'redux-saga';
import startForman from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

sagaMiddleware.run(startForman);
