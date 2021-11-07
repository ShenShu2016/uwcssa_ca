import articleReducer from "./articleSlice";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";
import { forumReducer } from "./forumReducer";
import generalReducer from "./generalSlice";
// import { generalReducer } from "./generalReducer";
// import marketReducer from "./marketSlice";
import { profileReducer } from "./profileReducer";
import { uwcssaJobReducer } from "./uwcssaJobReducer";

const reducers = combineReducers({
  general: generalReducer,
  userAuth: authReducer,
  profile: profileReducer,
  article: articleReducer,
  allUwcssaJobs: uwcssaJobReducer,
  forum: forumReducer,
  // market: marketReducer,
  event: eventReducer,
});
export default reducers;
