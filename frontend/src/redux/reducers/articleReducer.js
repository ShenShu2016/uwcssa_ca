import { ActionTypes } from "../constants/article-action-types";

const initialState = {
  articles: [],
  topics: [],
  types: [],
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ARTICLES:
      return { ...state, articles: payload };
    case ActionTypes.SET_TOPICS:
      return { ...state, topics: payload };
    case ActionTypes.SET_TYPES:
      return { ...state, types: payload };
    default:
      return state;
  }
};

export const selectedArticleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ARTICLE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_ARTICLE:
      return {};
    default:
      return state;
  }
};

export const postArticleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_ARTICLE_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.POST_ARTICLE_FAIL:
      return { ...state, ...payload };
    case ActionTypes.POST_ARTICLE_IMG_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.POST_ARTICLE_IMG_FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};
