import { ActionTypes } from "../contants/news-action-types";

export const setNewsComments = (newsComments) => {
  return {
    type: ActionTypes.SET_NEWSCOMMENTS,
    payload: newsComments,
  };
};
export const selectedNewsComments = (newsComment) => {
  return {
    type: ActionTypes.SELECTED_NEWSCOMMENTS,
    payload: newsComment,
  };
};
export const removeselectedNewsComments = (singleNews) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_NEWSCOMMENTS,
  };
};
