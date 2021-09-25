import { ActionTypes } from "../constants/article-action-types";

export const setArticles = (articles) => {
  return {
    type: ActionTypes.SET_ARTICLES,
    payload: articles,
  };
};

export const selectedArticle = (article) => {
  return {
    type: ActionTypes.SELECTED_ARTICLE,
    payload: article,
  };
};

export const removeSelectedArticle = (article) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ARTICLE,
  };
};
