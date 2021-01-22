import createSagaMiddleware from '@redux-saga/core';
import { configureStore, Store } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { counterSaga } from './counter/counterSaga';
import { counterSlice } from './counter/counterSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield all([counterSaga()]);
}

sagaMiddleware.run(rootSaga);

type GetStoreState<S> = S extends Store<infer State, any> ? State : unknown;

export type StoreState = GetStoreState<typeof store>;
