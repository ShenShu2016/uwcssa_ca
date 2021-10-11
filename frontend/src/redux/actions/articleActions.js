import {
  articleByCreatedAt,
  listTopics,
  listTypes,
} from "../../graphql/queries";
import { createArticle, createArticleComment } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/article-action-types";
import Storage from "@aws-amplify/storage";
import { getArticle } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

export const setArticles = () => async (dispatch) => {
  try {
    const articleData = await API.graphql({
      query: articleByCreatedAt,
      variables: { ByCreatedAt: "Article", sortDirection: "DESC" },
      authMode: "AWS_IAM",
    });
    console.log("articleData", articleData);
    dispatch({
      type: ActionTypes.SET_ARTICLES,
      payload: articleData.data.articleByCreatedAt.items,
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

export const setTopics = () => async (dispatch) => {
  try {
    const topicData = await API.graphql({
      query: listTopics,
      authMode: "AWS_IAM",
    });
    console.log("topicData", topicData);
    dispatch({
      type: ActionTypes.SET_TOPICS,
      payload: topicData.data.listTopics.items,
    });
  } catch (error) {
    console.log("error on fetching Topics", error);
  }
};

export const setTypes = () => async (dispatch) => {
  try {
    const typeData = await API.graphql({
      query: listTypes,
      authMode: "AWS_IAM",
    });
    console.log("typeData", typeData);
    dispatch({
      type: ActionTypes.SET_TYPES,
      payload: typeData.data.listTypes.items,
    });
  } catch (error) {
    console.log("error on fetching Type", error);
  }
};

export const postArticle = (createArticleInput) => async (dispatch) => {
  try {
    const response = await API.graphql(
      graphqlOperation(createArticle, { input: createArticleInput })
    );
    dispatch({
      type: ActionTypes.POST_ARTICLE_SUCCESS,
      payload: response,
    });
    return {
      result: true,
      response: response,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_ARTICLE_FAIL,
      payload: error,
    });
    return {
      result: false,
      response: error,
    };
  }
};
export const postArticleImg = (imgData) => async (dispatch) => {
  try {
    const response = await Storage.put(
      `article/${uuid()}${imgData.name}`,
      imgData,
      {
        contentType: "image/*",
      }
    );
    dispatch({
      type: ActionTypes.POST_ARTICLE_IMG_SUCCESS,
      payload: response,
    });
    return response;
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_ARTICLE_IMG_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
