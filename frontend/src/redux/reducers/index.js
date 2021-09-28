import { articleReducer, selectedArticleReducer } from "./articleReducer";

import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  userAuth: authReducer,
  allArticles: articleReducer,
  article: selectedArticleReducer,
});
export default reducers;
