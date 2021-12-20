import articleReducer from "./slice/articleSlice";
import authReducer from "./slice/authSlice";
import careerSlice from "./slice/careerSlice";
import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from "./slice/departmentSlice";
import eventReducer from "./slice/eventSlice";
import forumReducer from "./slice/forumSlice";
import foundingMemberReducer from "./slice/foundingMemberSlice";
import generalReducer from "./slice/generalSlice";
import imageReducer from "./slice/imageSlice";
import marketReducer from "./slice/marketSlice";
import marketUserReducer from "./slice/marketUserSlice";
import profileReducer from "./slice/profileSlice";
import staffReducer from "./slice/staffSlice";
import uwcssaJobReducer from "./slice/uwcssaJobSlice";
import uwcssaMemberReducer from "./slice/uwcssaMemberSlice";
export default configureStore({
  reducer: {
    general: generalReducer,
    userAuth: authReducer,
    profile: profileReducer,
    article: articleReducer,
    career: careerSlice,
    forum: forumReducer,
    market: marketReducer,
    marketUser: marketUserReducer,
    event: eventReducer,
    staff: staffReducer,
    images: imageReducer,
    foundingMember: foundingMemberReducer,
    uwcssaMember: uwcssaMemberReducer,
    uwcssaJob: uwcssaJobReducer,
    department: departmentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === "development",
});
