import {
  articleReducer,
  postArticleReducer,
  selectedArticleReducer,
} from "./articleReducer";

import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { uwcssaJobReducer } from "./uwcssaJobReducer";

const reducers = combineReducers({
  userAuth: authReducer,
  allArticles: articleReducer,
  article: selectedArticleReducer,
  postArticle: postArticleReducer,
  allUwcssaJobs: uwcssaJobReducer,
});
export default reducers;
