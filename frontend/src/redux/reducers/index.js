import { articleReducer, selectedArticleReducer } from "./articleReducer";
// import {
//   newsCommPostReducer,
//   newsCommentsReducer,
//   selectedNewsCommReducer,
// } from "./newComReducer";
import { productReducer, selectedProductReducer } from "./productReducer";

import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  userAuth: authReducer,
  allUsers: userReducer,
  allProducts: productReducer,
  product: selectedProductReducer,
  allArticles: articleReducer,
  article: selectedArticleReducer,
  // allNewsComments: newsCommentsReducer,
  // newsComment: selectedNewsCommReducer,
  // newsCommentPost: newsCommPostReducer,
});
export default reducers;
