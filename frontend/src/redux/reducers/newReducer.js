import { ActionTypes } from "../contants/news-action-types";

const initialState = {
  news: [],
};

export const newReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NEWS:
      return { ...state, news: payload };

    default:
      return state;
  }
};

export const selectedNewReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_NEW:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_NEW:
      return {};
    default:
      return { state };
  }
};
