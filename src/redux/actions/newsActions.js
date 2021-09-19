import { ActionTypes } from "../contants/news-action-types";

export const setNews = (news) => {
  return {
    type: ActionTypes.SET_NEWS,
    payload: news,
  };
};

export const selectedSingleNews = (singleNews) => {
  return {
    type: ActionTypes.SELECTED_SINGLENEWS,
    payload: singleNews,
  };
};

export const removeSelectedSingleNews = (singleNews) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_SINGLENEWS,
  };
};
