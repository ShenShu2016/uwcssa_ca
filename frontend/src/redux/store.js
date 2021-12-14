import articleReducer from "./reducers/articleSlice";
// import { authReducer } from "./reducers/authReducer";
import authReducer from "./reducers/authSlice";
import careerSlice from "./reducers/careerSlice";
import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./reducers/eventSlice";
import forumReducer from "./reducers/forumSlice";
import generalReducer from "./reducers/generalSlice";
import imageReducer from "./reducers/imageSlice";
// import { generalReducer } from "./reducers/generalReducer";
import marketReducer from "./reducers/marketSlice";
import marketUserReducer from "./reducers/marketUserSlice";
import profileReducer from "./reducers/profileSlice";
import staffReducer from "./reducers/staffSlice";

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === "development",
});
