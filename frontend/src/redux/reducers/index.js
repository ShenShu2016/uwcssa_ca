import {
  articleReducer,
  pudArticleReducer,
  selectedArticleReducer,
} from "./articleReducer";
import {
  eventReducer,
  pudEventReducer,
  selectedEventReducer,
} from "./eventReducer";
import {
  forumReducer,
  selectedForumPostCommentReducer,
  selectedForumPostReducer,
  selectedForumSubTopicReducer,
  selectedForumTopicReducer,
} from "./forumReducer";
import {
  marketItemReducer,
  selectedMarketItemReducer,
} from "./marketItemReducer";
import {
  postUserEducationReducer,
  postUserExperienceReducer,
  putUserEducationReducer,
  putUserExperienceReducer,
  selectedUserReducer,
  urlReducer,
  userReducer,
} from "./userReducer";

import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { uwcssaJobReducer } from "./uwcssaJobReducer";

const reducers = combineReducers({
  userAuth: authReducer,
  user: selectedUserReducer,
  url: urlReducer,
  allArticles: articleReducer,
  article: selectedArticleReducer,
  pudArticle: pudArticleReducer,
  allUwcssaJobs: uwcssaJobReducer,

  forum: forumReducer,
  forumTopic: selectedForumTopicReducer,
  forumSubTopic: selectedForumSubTopicReducer,
  forumPost: selectedForumPostReducer,
  forumPostComment: selectedForumPostCommentReducer,

  allUsers: userReducer,
  createUserEducation: postUserEducationReducer,
  updateUserEducation: putUserEducationReducer,
  createUserExperience: postUserExperienceReducer,
  updateUserExperience: putUserExperienceReducer,
  allMarketItems: marketItemReducer,
  marketItem: selectedMarketItemReducer,

  allEvents: eventReducer,
  event: selectedEventReducer,
  pudEvent: pudEventReducer,
});
export default reducers;
