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
  profileReducer,
  putUserEducationReducer,
  putUserExperienceReducer,
} from "./profileReducer";

import { articleReducer } from "./articleReducer";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";
import { generalReducer } from "./generalReducer";
import { marketReducer } from "./marketReducer";
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
  market: marketReducer,

  event: eventReducer,
});
export default reducers;
