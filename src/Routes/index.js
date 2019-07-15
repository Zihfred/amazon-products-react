import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import AppContainer from "../View/AppContainer";

const routes = {
  products: "/"
};

const Router = () => (
  <BrowserRouter>
    <Route path={routes.products} component={AppContainer} />
  </BrowserRouter>
);

export default Router;
