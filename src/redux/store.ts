/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 18:10:27
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-26 16:23:30
 * @FilePath: /uwcssa_ca/src/redux/store.ts
 * @Description:
 *
 */

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import addressReducer from "./address/addressSlice";
import alertReducer from "./alert/alertSlice";
import articleReducer from "./article/articleSlice";
import authReducer from "./auth/authSlice";
import commentReducer from "./comment/commentSlice";
import contactUsReducer from "./contactUs/ContactUsSlice";
import countReducer from "./count/countSlice";
import eventParticipantReducer from "./eventParticipant/eventParticipantSlice";
import eventReducer from "./event/eventSlice";
import formReducer from "./form/formSlice";
import likeReducer from "./like/likeSlice";
import researchDevelopmentTeamReducer from "./researchDevelopmentTeam/researchDevelopmentTeamSlice";
import resumeReducer from "./resume/resumeSlice";
import tagReducer from "./tag/tagSlice";
import userImageReducer from "./userImage/userImageSlice";
import userProfileReducer from "./userProfile/userProfileSlice";
import uwcssaCareerReducer from "./uwcssaCareer/uwcssaCareerSlice";
import uwcssaDepartmentReducer from "./uwcssaDepartment/uwcssaDepartmentSlice";
import uwcssaMemberReducer from "./uwcssaMember/uwcssaMemberSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
    article: articleReducer,
    event: eventReducer,
    eventParticipant: eventParticipantReducer,
    comment: commentReducer,
    contactUs: contactUsReducer,
    alert: alertReducer,
    userImage: userImageReducer,
    uwcssaCareer: uwcssaCareerReducer,
    resume: resumeReducer,
    uwcssaDepartment: uwcssaDepartmentReducer,
    uwcssaMember: uwcssaMemberReducer,
    researchDevelopmentTeam: researchDevelopmentTeamReducer,
    form: formReducer,
    count: countReducer,
    like: likeReducer,
    address: addressReducer,
    tag: tagReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
