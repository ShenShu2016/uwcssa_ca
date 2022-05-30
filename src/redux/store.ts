/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 18:10:27
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 22:53:20
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
import researchDevelopmentTeamReducer from './researchDevelopmentTeam/researchDevelopmentTeamSlice';
import userImageReducer from './userImage/userImageSlice';
import userProfileReducer from './userProfile/userProfileSlice';
import uwcssaDepartmentReducer from './uwcssaDepartment/uwcssaDepartmentSlice';
import uwcssaMemberReducer from './uwcssaMember/uwcssaMemberSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
    counter: counterReducer,
    article: articleReducer,
    comment: commentReducer,
    contactUs: contactUsReducer,
    alert: alertReducer,
    userImage: userImageReducer,
    uwcssaDepartment: uwcssaDepartmentReducer,
    uwcssaMember: uwcssaMemberReducer,
    researchDevelopmentTeam: researchDevelopmentTeamReducer,
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
