/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 18:10:27
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-26 17:52:25
 * @FilePath: /uwcssa_ca/src/redux/store.ts
 * @Description:
 *
 */

import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import alertReducer from './alert/alertSlice';
import articleReducer from './article/articleSlice';
import authReducer from './auth/authSlice';
import commentReducer from './comment/commentSlice';
import contactUsReducer from './contactUs/ContactUsSlice';
import counterReducer from './counter/counterSlice';
import userImageReducer from './userImage/userImageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    article: articleReducer,
    comment: commentReducer,
    contactUs: contactUsReducer,
    alert: alertReducer,
    userImage: userImageReducer,
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
