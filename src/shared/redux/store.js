import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootReducers from "./rootReducers";
import rootSaga from "./rootSagas";

const sagaMiddleWare = createSagaMiddleware()

export default createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(rootSaga)