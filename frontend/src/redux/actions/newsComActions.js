import { ActionTypes } from "../constants/news-action-types";
import axios from "axios";
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
export const postNewsComments =
  (comment, article_id, created_by_id, updated_by_id) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      comment,
      article_id,
      created_by_id,
      updated_by_id,
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/news/articlecomment_create/`,
        body,
        config
      );

      dispatch({
        type: ActionTypes.NEWSCOMMPOST_SUCCESS,
        payload: res.data,
      });

      dispatch(setNewsComments());
    } catch (err) {
      dispatch({
        type: ActionTypes.NEWSCOMMPOST_FAIL,
      });
    }
  };
