import { ActionTypes } from "../constants/article-action-types";

const initialState = {
  articles: [],
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ARTICLES:
      return { ...state, articles: payload };

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
