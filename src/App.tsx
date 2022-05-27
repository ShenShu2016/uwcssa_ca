/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-27 00:22:29
 * @FilePath: /uwcssa_ca/src/App.tsx
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
import ScrollToTop from 'hooks/ScrollToTop';
import { getAuthState } from 'redux/auth/authSlice';
import { loadUser } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { useAppSelector } from 'redux/hooks';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  useEffect(() => {
    const getUser = async () => {
      dispatch(loadUser());
    };
    getUser();
  }, []);

  return (
    <Page>
      <BrowserRouter>
        <ScrollToTop>{isAuth !== null && <Routes />} </ScrollToTop>
      </BrowserRouter>
    </Page>
  );
};

export default App;
