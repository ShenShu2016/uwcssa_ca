import { ActionTypes } from "../contants/news-action-types";

export const setNews = (news) => {
  return {
    type: ActionTypes.SET_NEWS,
    payload: news,
  };
};

export const selectedNew = (news) => {
  return {
    type: ActionTypes.SELECTED_NEW,
    payload: news,
  };
};

export const removeSelectedNew = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_NEW,
  };
};
