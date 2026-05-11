import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { actionMetadataMiddleware } from './actionMetadataMiddleware';
import createReducerManager from './reducermanager';
import createSagaManager from './sagamanager';

const sagaMiddleware = createSagaMiddleware();
const reducerManager = createReducerManager();
const sagaManager = createSagaManager();

const store = configureStore({
  reducer: reducerManager.reduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(actionMetadataMiddleware, sagaMiddleware),
  preloadedState: {},
});

sagaManager.setAddSagaListener((saga) => {
  sagaMiddleware.run(saga);
});

store.reducerManager = reducerManager;
store.sagaManager = sagaManager;

export default store;
