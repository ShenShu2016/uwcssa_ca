import {
  articleReducer,
  postArticleReducer,
  selectedArticleReducer,
} from "./articleReducer";

import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { uwcssaJobReducer } from "./uwcssaJobReducer";
import { forumReducer, selectedForumPostCommentReducer, selectedForumPostReducer } from "./forumReducer";

const reducers = combineReducers({
  userAuth: authReducer,
  allArticles: articleReducer,
  article: selectedArticleReducer,
  postArticle: postArticleReducer,
  allUwcssaJobs: uwcssaJobReducer,
  forum: forumReducer,
  forumPost: selectedForumPostReducer,
  forumPostComment: selectedForumPostCommentReducer,
});
export default reducers;
