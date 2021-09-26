import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/article-action-types";
import { getArticle } from "../../graphql/queries";
import { listArticles } from "../../graphql/queries";

export const setArticles = () => async (dispatch) => {
  try {
    const articleData = await API.graphql({
      query: listArticles,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_ARTICLES,
      payload: articleData.data.listArticles.items,
    });
  } catch (error) {
    console.log("error on fetching Article", error);
  }
};

export const selectedArticle = (articleId) => async (dispatch) => {
  try {
    const response = await API.graphql({
      query: getArticle,
      variables: { id: articleId },
      authMode: "AWS_IAM",
    });
    console.log("response", response);
    dispatch({
      type: ActionTypes.SELECTED_ARTICLE,
      payload: response.data.getArticle,
    });
  } catch (error) {
    console.log("error on selecting Article", error);
  }
};

export const removeSelectedArticle = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.REMOVE_SELECTED_ARTICLE,
  });
};
