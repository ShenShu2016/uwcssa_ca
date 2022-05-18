/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 19:42:53
 * @FilePath: \uwcssa_ca\frontend\src\index.tsx
 * @Description:
 *
 */

import Amplify from 'aws-amplify';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import config from './aws-exports';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';

const updatedAwsConfig = {
  ...config,
};
Amplify.configure(updatedAwsConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
