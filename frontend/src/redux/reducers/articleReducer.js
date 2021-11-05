import { ActionTypes } from "../constants/article-action-types";

const initialState = {
  articles: [],
  topics: [],
  types: [],
  selected: {
    article: {},
    comments: [],
    commentsNextToken: "",
  },
  mutation: {
    postArticle: {},
    updateArticle: [],
    deleteArticle: [],
  },
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ARTICLES:
      return { ...state, articles: payload };
    case ActionTypes.SET_TOPICS:
      return { ...state, topics: payload };
    case ActionTypes.SET_TYPES:
      return { ...state, types: payload };

    case ActionTypes.SELECTED_ARTICLE:
      return { ...state, selected: { ...state.selected, article: payload } };
    case ActionTypes.SELECTED_ARTICLE_COMMENTS:
      return {
        ...state,
        selected: {
          ...state.selected,
          comments: payload.items,
          commentsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.ARTICLE_COMMENT_POST_SUCCESS:
      return {
        ...state,
        selected: {
          ...state.selected,
          comments: [...payload, ...state.selected.comments],
        },
      };
    case ActionTypes.LOAD_MORE_ARTICLE_COMMENTS:
      return {
        ...state,
        selected: {
          ...state.selected,
          comments: [...state.selected.comments, ...payload.items],
          commentsNextToken: payload.nextToken,
        },
      };
    case ActionTypes.REMOVE_SELECTED_ARTICLE:
      return {
        ...state,
        selected: {
          article: {},
          comments: [],
          commentsNextToken: "",
        },
      };
    case ActionTypes.POST_ARTICLE_SUCCESS:
      return {
        ...state,
        mutation: { ...state.mutation, postArticle: payload },
      };
    case ActionTypes.POST_ARTICLE_FAIL:
      return {
        ...state,
        mutation: { ...state.mutation, postArticle: payload },
      };
    default:
      return state;
  }
};
