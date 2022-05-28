/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 15:21:55
 * @LastEditors: 李佳修
 * @LastEditTime: 2022-05-28 17:11:09
 * @FilePath: /uwcssa_ca/src/views/ReduxCounter/ReduxCounter.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Counter } from '../../redux/counter/Counter';
import Box from '@mui/material/Box';
import React from 'react';
import logo from './logo.svg';

function ReduxCounter() {
  return (
    <Box>
      <div className="ReduxCounter">
        <img src={logo} className="ReduxCounter-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="ReduxCounter-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="ReduxCounter-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="ReduxCounter-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="ReduxCounter-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </div>
    </Box>
  );
}

export default ReduxCounter;
