import {
  articleByCreatedAt,
  byArticleID,
  getArticle,
  listTopics,
  listTypes,
} from "../../graphql/queries";
import { createArticle, createArticleComment } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/article-action-types";
import Storage from "@aws-amplify/storage";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

export const setArticles = () => async (dispatch) => {
  try {
    const articleData = await API.graphql({
      query: articleByCreatedAt,
      variables: { ByCreatedAt: "Article", sortDirection: "DESC" },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_ARTICLES,
      payload: articleData.data.articleByCreatedAt.items,
    });
  } catch (error) {
    console.log("error on fetching Article setArticles", error);
  }
};

export const selectedArticle = (articleID) => async (dispatch) => {
  try {
    const response = await API.graphql({
      query: getArticle,
      variables: { id: articleID },
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

export const selectedArticleComments = (articleID) => async (dispatch) => {
  console.log("selectedArticleComments,articleID", articleID);
  try {
    const articleCommentData = await API.graphql({
      query: byArticleID,
      variables: {
        articleID: articleID,
        sortDirection: "DESC",
        filter: { active: { eq: 1 } },
        limit: 10,
      },
      authMode: "AWS_IAM",
    });
    console.log("articleCommentData", articleCommentData);
    dispatch({
      type: ActionTypes.SELECTED_ARTICLE_COMMENTS,
      payload: articleCommentData.data.byArticleID,
    });
  } catch (error) {
    console.log("error on selectedArticleComments", error);
  }
};

export const loadMoreArticleComments =
  (articleID, nextToken) => async (dispatch) => {
    console.log("load more date start");
    try {
      const articleCommentData = await API.graphql({
        query: byArticleID,
        variables: {
          articleID: articleID,
          sortDirection: "DESC",
          filter: { active: { eq: 1 } },
          limit: 10,
          nextToken: nextToken,
        },
        authMode: "AWS_IAM",
      });
      console.log("More Articlecomments", articleCommentData);
      dispatch({
        type: ActionTypes.LOAD_MORE_ARTICLE_COMMENTS,
        payload: articleCommentData.data.byArticleID,
      });
      console.log("payload", articleCommentData.data.ArticleCommentByCreatedAt);
    } catch (error) {
      console.log("error on Load more data", error);
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
      type: ActionTypes.ARTICLE_COMMENT_POST_SUCCESS,
      payload: response,
    });
    console.log();
    dispatch(selectedArticleComments(createArticleInput.articleID));
  } catch (error) {
    console.log("error on posting ArticleComment", error);
    dispatch({
      type: ActionTypes.ARTICLE_COMMENT_POST_FAIL,
    });
  }
};

export const setTopics = () => async (dispatch) => {
  try {
    const topicData = await API.graphql({
      query: listTopics,
      authMode: "AWS_IAM",
    });
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
    dispatch({
      type: ActionTypes.SET_TYPES,
      payload: typeData.data.listTypes.items,
    });
  } catch (error) {
    console.log("error on fetching Type", error);
  }
};

export const postArticle = (createArticleInput) => async (dispatch) => {
  console.log("createArticleInput", createArticleInput);
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
  }
};
