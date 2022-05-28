/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-28 01:36:43
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
import { getAuthState, getOwnerUserName } from 'redux/auth/authSlice';

import { BrowserRouter } from 'react-router-dom';
import Page from './components/Page';
import Routes from './Routes';
import { fetchUserProfile } from 'redux/userProfile/userProfileSlice';
import { loadUser } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { useAppSelector } from 'redux/hooks';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const ownerUser = useAppSelector(getOwnerUserName);
  useEffect(() => {
    const getUser = async () => {
      await dispatch(loadUser());
    };
    getUser();
  }, []);

  useEffect(() => {
    if (ownerUser) {
      dispatch(fetchUserProfile(ownerUser));
    }
  }, [ownerUser]);

  return (
    <Page>
      <BrowserRouter>{isAuth !== null && <Routes />}</BrowserRouter>
    </Page>
  );
};

export default App;
