import {
  articleReducer,
  pudArticleReducer,
  selectedArticleReducer,
} from "./articleReducer";
import {
  forumReducer,
  selectedForumPostCommentReducer,
  selectedForumPostReducer,
  selectedForumSubTopicReducer,
  selectedForumTopicReducer,
} from "./forumReducer";
import {
  postUserEducationReducer,
  postUserExperienceReducer,
  putUserEducationReducer,
  putUserExperienceReducer,
  selectedUserReducer,
  userReducer,
} from "./userReducer";
import {
  marketItemReducer,
  selectedMarketItemReducer,
} from "./marketItemReducer";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { uwcssaJobReducer } from "./uwcssaJobReducer";
import {
  eventReducer,
  pudEventReducer,
  selectedEventReducer,
} from "./eventReducer";

const reducers = combineReducers({
  userAuth: authReducer,
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
  user: selectedUserReducer,
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
