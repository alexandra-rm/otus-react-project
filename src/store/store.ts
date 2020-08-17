import { applyMiddleware, createStore, Store } from "redux";
import { reducer } from "store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import {
  startAction,
  watchSagaChangeSetting,
  watchSagaConwayStart,
  watchSagaInit,
  watchSagaUpdate,
} from "smart/ConwayLife/saga";

const sagaMiddleware = createSagaMiddleware();

export const store: Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchSagaUpdate);
sagaMiddleware.run(watchSagaConwayStart);
sagaMiddleware.run(watchSagaInit);
sagaMiddleware.run(watchSagaChangeSetting);
store.dispatch(startAction());
