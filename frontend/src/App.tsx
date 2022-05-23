/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-22 22:19:56
 * @FilePath: /uwcssa_ca/frontend/src/App.tsx
 * @Description:
 *
 */

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Page from './components/Page';
import Routes from './Routes';
import { loadUser } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      dispatch(loadUser());
    };
    getUser();
  }, []);

  return (
    <Page>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Page>
  );
};

export default App;
