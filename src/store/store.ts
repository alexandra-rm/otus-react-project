import { applyMiddleware, createStore, Store } from "redux";
import { reducer } from "store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import {
    startAction,
    watchSagaConwayStart,
    watchSagaInit,
    watchSagaUpdate,
} from "smart/ConwayLife/saga";
import { watchSagaChangeSetting } from "smart/ControlsForm/saga";
import {
    sagaRestoreSessionAction,
    watchSagaLogin,
    watchSagaLogout,
    watchSagaRestoreSession
} from "smart/ConnectedLogin/saga";

const sagaMiddleware = createSagaMiddleware();

export const store: Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchSagaUpdate);
sagaMiddleware.run(watchSagaConwayStart);
sagaMiddleware.run(watchSagaInit);
sagaMiddleware.run(watchSagaChangeSetting);
sagaMiddleware.run(watchSagaLogin);
sagaMiddleware.run(watchSagaLogout);
sagaMiddleware.run(watchSagaRestoreSession);
store.dispatch(startAction());
store.dispatch(sagaRestoreSessionAction());
