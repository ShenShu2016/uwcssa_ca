import {
  articleReducer,
  postArticleReducer,
  selectedArticleReducer,
} from "./articleReducer";

import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  userAuth: authReducer,
  allArticles: articleReducer,
  article: selectedArticleReducer,
  postArticle: postArticleReducer,
});
export default reducers;
