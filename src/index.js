import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import Router from "./Routes";
import configureStore from "./redux/configureStore";



const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
   <Router/>
  </Provider>,
  document.getElementById("root")
);
