import {
  articleReducer,
  postArticleReducer,
  selectedArticleReducer,
} from "./articleReducer";
import {
  postUserEducationReducer,
  postUserExperienceReducer,
  putUserEducationReducer,
  putUserExperienceReducer,
  selectedUserReducer,
  userReducer,
} from "./userReducer";

import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { uwcssaJobReducer } from "./uwcssaJobReducer";

const reducers = combineReducers({
  userAuth: authReducer,
  allArticles: articleReducer,
  article: selectedArticleReducer,
  postArticle: postArticleReducer,
  allUwcssaJobs: uwcssaJobReducer,
  allUsers: userReducer,
  user: selectedUserReducer,
  createUserEducation: postUserEducationReducer,
  updateUserEducation: putUserEducationReducer,
  createUserExperience: postUserExperienceReducer,
  updateUserExperience: putUserExperienceReducer,
});
export default reducers;
