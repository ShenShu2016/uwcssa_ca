import { ActionTypes } from "../contants/news-action-types";

const initialState = {
  news: [],
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NEWS:
      return { ...state, news: payload };

    default:
      return state;
  }
};

export const selectedSingleNewsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_SINGLENEWS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_SINGLENEWS:
      return {};
    default:
      return { state };
  }
};
