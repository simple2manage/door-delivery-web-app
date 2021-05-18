import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./config/storeConfig";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import "./resources/fonts/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/antd/dist/antd.css";
import "./containers/home/User/userlist.scss";
import "./containers/home/User/userlist.css";
import "./style/common.scss";
import { Router } from "react-router-dom";

const app = (
  <Provider store={store}>

    <App />

  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
