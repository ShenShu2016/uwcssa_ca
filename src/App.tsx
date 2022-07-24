/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-23 21:59:32
 * @FilePath: /uwcssa_ca/src/App.tsx
 * @Description:
 *
 */

import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import "aos/dist/aos.css";

import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { getAuthState, getOwnerUserName, loadUser } from "redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { BrowserRouter } from "react-router-dom";
import { fetchUserProfile } from "redux/userProfile/userProfileSlice";
import Page from "./components/Page";
import Routes from "./Routes";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const ownerUser = useAppSelector(getOwnerUserName);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (ownerUser) {
      dispatch(fetchUserProfile(ownerUser));
    }
  }, [dispatch, ownerUser]);

  return (
    <Page>
      <BrowserRouter>
        {isAuth !== null ? (
          <Routes />
        ) : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </BrowserRouter>
    </Page>
  );
}

export default App;
