import { ActionTypes } from "../constants/forum-action-types";

const initialState = {
  forumTopics: [],
  forumSubTopics: [],
  forumPosts: [],
  selectedForumTopic: {},
  selectedForumSubTopic: {
    forumSubTopic: {},
    posts: [],
    postsNextToken: "",
  },
  selectedForumPost: {
    forumPost: {},
    comments: [],
    commentsNextToken: "",
  },
  selectedForumPostComment: {
    forumPostComment: {},
    subComments: [],
    subCommentsNextToken: "",
  },
  mutation: {
    postForumPost: {},
    updateForumPost: [],
    deleteForumPost: [],
    postForumPostComment:[],
    postImage: {},
  },
};

export const forumReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FORUMTOPICS:
      return { ...state, forumTopics: payload };
    case ActionTypes.SET_FORUMSUBTOPICS:
      return { ...state, forumSubTopics: payload };
    case ActionTypes.SET_FORUMPOSTS:
      return { ...state, forumPosts: payload };

    case ActionTypes.SELECTED_FORUMTOPIC:
      return {
        ...state,
        selectedForumTopic: {
          forumTopic: payload,
        },
      };
    case ActionTypes.SELECTED_FORUMSUBTOPIC:
      return {
        ...state,
        selectedForumSubTopic: {
          ...state.selectedForumSubTopic,
          forumSubTopic: payload,
        },
      };
    case ActionTypes.SELECTED_FORUMSUBTOPIC_POSTS:
      return {
        ...state,
        selectedForumSubTopic: {
          ...state.selectedForumSubTopic,
          posts: payload.items,
          postsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.LOAD_MORE_FORUMSUBTOPIC_POSTS:
      return {
        ...state,
        selectedForumSubTopic: {
          ...state.selectedForumSubTopic,
          posts: [...state.selectedForumSubTopic.posts, ...payload.items],
          postsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.POST_FORUMPOST_SUCCESS:
      return {
        ...state,
        mutation: { ...state.mutation, postForumPost: payload },
      };
    case ActionTypes.POST_FORUMPOST_FAIL:
      return {
        ...state,
        mutation: { ...state.mutation, postForumPost: payload },
      };
    case ActionTypes.SELECTED_FORUMPOST:
      return {
        ...state,
        selectedForumPost: { ...state.selectedForumPost, forumPost: payload },
      };
    case ActionTypes.SELECTED_FORUMPOST_COMMENTS:
      return {
        ...state,
        selectedForumPost: {
          ...state.selectedForumPost,
          comments: payload.items,
          commentsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.POST_FORUMPOST_COMMENT_SUCCESS:
      return {
        ...state,
        mutation: { ...state.mutation, postForumPostComment: payload },
      };
    case ActionTypes.POST_FORUMPOST_COMMENT_FAIL:
      return {
        ...state,
        mutation: { ...state.mutation, postForumPostComment: payload },
      };
    case ActionTypes.LOAD_MORE_FORUMPOST_COMMENTS:
      return {
        ...state,
        selectedForumPost: {
          ...state.selectedForumPost,
          comments: [...state.selectedForumPost.comments, ...payload.items],
          commentsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.REMOVE_SELECTED_FORUMPOST:
      return {
        ...state,
        selectedForumPost: {
          forumPost: {},
          comments: [],
          commentsNextToken: "",
        },
      };
    case ActionTypes.SELECTED_FORUMPOST_COMMENT:
      return {
        ...state,
        selectedForumPostComment: {
          ...state.selectedForumPostComment,
          forumPostComment: payload,
        },
      };
    case ActionTypes.SELECTED_FORUMPOST_COMMENT_SUBCOMMENTS:
      return {
        ...state,
        selectedForumPostComment: {
          ...state.selectedForumPostComment,
          subComments: payload.items,
          subCommentsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.LOAD_MORE_FORUMPOST_COMMENT_SUBCOMMENTS:
      return {
        ...state,
        selectedForumPostComment: {
          ...state.selectedForumPostComment,
          subComments: [
            ...state.selectedForumPostComment.subComments,
            ...payload.items,
          ],
          subCommentsNextTkoen: payload.nextToken,
        },
      };
    default:
      return state;
  }
};
