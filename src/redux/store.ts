/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 18:10:27
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-22 15:26:12
 * @FilePath: /uwcssa_ca/frontend/src/redux/store.ts
 * @Description:
 *
 */

import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import alertSlice from './alert/alertSlice';
import articleReducer from './article/articleSlice';
import authReducer from './auth/authSlice';
import contactUsReducer from './contactUs/ContactUsSlice';
import counterReducer from './counter/counterSlice';
import userImageSlice from './userImage/userImageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    article: articleReducer,
    contactUs: contactUsReducer,
    alert: alertSlice,
    userImage: userImageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), //https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
