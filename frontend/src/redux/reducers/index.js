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
  profileReducer,
  putUserEducationReducer,
  putUserExperienceReducer,
} from "./profileReducer";

import { articleReducer } from "./articleReducer";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { generalReducer } from "./generalReducer";
import { uwcssaJobReducer } from "./uwcssaJobReducer";

const reducers = combineReducers({
  general: generalReducer,
  userAuth: authReducer,
  profile: profileReducer,

  article: articleReducer,

  allUwcssaJobs: uwcssaJobReducer,

  forum: forumReducer,
  forumTopic: selectedForumTopicReducer,
  forumSubTopic: selectedForumSubTopicReducer,
  forumPost: selectedForumPostReducer,
  forumPostComment: selectedForumPostCommentReducer,

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
