/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 18:10:27
 * @LastEditors: 李佳修
 * @LastEditTime: 2022-05-21 17:22:15
 * @FilePath: /uwcssa_ca/frontend/src/redux/store.ts
 * @Description:
 *
 */

import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import articleReducer from './article/articleSlice';
import authReducer from './auth/authSlice';
import contactUsReducer from './contactUs/ContactUsSlice';
import counterReducer from './counter/counterSlice';
import alertSlice from './alert/alertSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    article: articleReducer,
    contactUs: contactUsReducer,
    alert: alertSlice
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
