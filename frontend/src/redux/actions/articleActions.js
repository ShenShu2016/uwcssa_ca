import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/article-action-types";
import { createArticleComment } from "../../graphql/mutations";
import { getArticle } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
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

export const postArticleComment = (createArticleInput) => async (dispatch) => {
  try {
    const response = await API.graphql(
      graphqlOperation(createArticleComment, { input: createArticleInput })
    );

    dispatch({
      type: ActionTypes.ARTICLECOMMPOST_SUCCESS,
      payload: response,
    });
    dispatch(selectedArticle(createArticleInput.articleCommentArticleId));
  } catch (error) {
    console.log("error on posting ArticleComment", error);
    dispatch({
      type: ActionTypes.ARTICLECOMMPOST_FAIL,
    });
  }
};
