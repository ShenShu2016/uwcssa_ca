import { ActionTypes } from "../contants/news-action-types";

export const setNews = (news) => {
  return {
    type: ActionTypes.SET_NEWS,
    payload: news,
  };
};

export const selectedNew = (new12) => {
  return {
    type: ActionTypes.SELECTED_NEW,
    payload: new12,
  };
};

export const removeSelectedNew = (new12) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_NEW,
  };
};
