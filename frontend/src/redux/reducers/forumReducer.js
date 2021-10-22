import { ActionTypes } from "../constants/forum-action-types";

const initialState = {
  forumTopics: [],
  forumSubTopics: [],
  forumPosts: [],
};
const initialStateSelectedForumTopic = {
  forumTopic: {},
}
const initialStateSelectedForumSubTopic = {
  forumSubTopic: {},
}
const initialStateSelectedForumPost = {
  forumPost: {},
  // forumPostComments: {},
  // forumPostCommentsNextToken: {},

}
const initialStatePUDForumPost = {
  postForumPost: {},
  postImage: {},

}

export const forumReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FORUMTOPICS:
      return { ...state, forumTopics: payload };
    case ActionTypes.SET_FORUMSUBTOPICS:
      return { ...state, forumSubTopics: payload };
    case ActionTypes.SET_FORUMPOSTS:
      return { ...state, forumPosts: payload };
    default:
      return state;
  }
};

export const selectedForumTopicReducer = (state = initialStateSelectedForumTopic, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_FORUMTOPIC:
      return { ...state, forumTopic:payload };
    default:
      return state;
  }
};

export const selectedForumSubTopicReducer = (state = initialStateSelectedForumSubTopic, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_FORUMSUBTOPIC:
      return { ...state, forumSubTopic:payload };
    default:
      return state;
  }
};


export const pudForumPostReducer = (state = initialStatePUDForumPost, { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_FORUMPOST_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.POST_FORUMPOST_FAIL:
      return { ...state, ...payload };
    case ActionTypes.POST_FORUMPOST_IMG_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.POST_FORUMPOST_IMG_FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};


export const selectedForumPostReducer = (state = initialStateSelectedForumPost, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_FORUMPOST:
      return { ...state, forumPost:payload };
    case ActionTypes.SELECTED_FORUMPOSTCOMMENTS:
      return {
        ...state,
        forumPostComments: payload.items,
        forumPostCommentsNextToken: payload.nextToken,
      }
    case ActionTypes.REMOVE_SELECTED_FORUMPOST:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_FORUMPOST_FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const selectedForumPostCommentReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_FORUMPOST_COMMENT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
