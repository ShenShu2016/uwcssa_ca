import { ActionTypes } from "../constants/article-action-types";

const initialState = {
  articleComments: [],
};

export const newsCommentsReducer = (
  state = initialState,

  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_ARTICLECOMMENTS:
      return { ...state, articleComments: payload };

    default:
      return state;
  }
};

export const selectedArticleCommReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ARTICLECOMMENTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_ARTICLECOMMENTS:
      return {};
    default:
      return { state };
  }
};
export const newsCommPostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ARTICLECOMMPOST_SUCCESS:
      return { ...state, ...payload };
    default:
      return { state };
  }
};
