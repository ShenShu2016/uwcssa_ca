/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-08-03 18:21:28
 * @FilePath: /uwcssa_ca/src/index.tsx
 * @Description:
 *
 */

import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import App from "./App";
import config from "./aws-exports";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
// import Message from 'components/Message';

function getUri() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3000/";
  }
  if (window.location.hostname === "devts.uwcssa.ca") {
    return "https://devts.uwcssa.ca/";
  }
  if (window.location.hostname === "production.uwcssa.ca") {
    return "https://production.uwcssa.ca/";
  }
  if (window.location.hostname === "uwcssa.ca") {
    return "https://uwcssa.ca/";
  }
  return undefined;
}

const updatedAwsConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: getUri(),
    redirectSignOut: getUri(),
  },
};

Amplify.configure(updatedAwsConfig);

ReactDOM.render(
  <Provider store={store}>
    {/* https://iamhosseindhv.com/notistack/demos#maximum-snackbars */}
    <SnackbarProvider maxSnack={5}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
