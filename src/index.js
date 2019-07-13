import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import createSagaMiddleware from "redux-saga";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/products";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
