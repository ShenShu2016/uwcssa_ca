import articleReducer from "./reducers/articleSlice";
// import { authReducer } from "./reducers/authReducer";
import authReducer from "./reducers/authSlice";
import careerSlice from "./reducers/careerSlice";
import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./reducers/eventSlice";
import forumReducer from "./reducers/forumSlice";
import generalReducer from "./reducers/generalSlice";
// import { generalReducer } from "./reducers/generalReducer";
import marketReducer from "./reducers/marketSlice";
import profileReducer from "./reducers/profileSlice";

export default configureStore({
  reducer: {
    general: generalReducer,
    userAuth: authReducer,
    profile: profileReducer,
    article: articleReducer,
    career: careerSlice,
    forum: forumReducer,
    market: marketReducer,
    event: eventReducer,
  },
});
