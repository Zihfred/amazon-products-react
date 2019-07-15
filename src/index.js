import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import AppContainer from "./View/AppContainer";
import {BrowserRouter, Route} from "react-router-dom";



const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Route path='/' component={AppContainer} />
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
