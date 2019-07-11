import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Products from "./Products/Products";

const routes = {
  products: "/"
};

const Router = () => (
  <BrowserRouter>
    <Route path={routes.products} component={Products} />
  </BrowserRouter>
);

export default Router;
