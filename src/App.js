import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";

export default class App extends Component {

  render() {
    return <Provider store={SportsStoreDataStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/shop" component={ShopConnector} />
          <Redirect to="/shop" />
        </Switch>
      </BrowserRouter>
    </Provider>
  }
}
