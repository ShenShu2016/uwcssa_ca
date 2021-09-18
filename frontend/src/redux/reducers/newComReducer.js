import { ActionTypes } from "../contants/news-action-types";

const initialState = {
  newsComments: [],
};

export const newsCommentsReducer = (
  state = initialState,

  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_NEWSCOMMENTS:
      return { ...state, newsComments: payload };

    default:
      return state;
  }
};

export const selectedNewsCommReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_NEWSCOMMENTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_NEWSCOMMENTS:
      return {};
    default:
      return { state };
  }
};
export const newsCommPostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.NEWSCOMMPOST_SUCCESS:
      return { ...state, ...payload };
    default:
      return { state };
  }
};
