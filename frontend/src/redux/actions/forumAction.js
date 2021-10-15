import {
  createForumPost,
  createForumPostComment,
  createForumPostSubComment,
  // createForumSubTopic,
  // createForumTopic,
  deleteForumPost,
} from "../../graphql/mutations";
import {
  getForumPost,
  getForumPostComment,
  // getForumTopic,
  // listForumPostComments,
  // listForumPostSubComments,
  listForumPosts,
  listForumSubTopics,
  listForumTopics,
} from "../../graphql/queries";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/forum-action-types";
import Storage from "@aws-amplify/storage";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

export const setForumTopics = () => async (dispatch) => {
  try {
    const forumTopicData = await API.graphql({
      query: listForumTopics,
      authMode: "AWS_IAM",
    });
    console.log("forumTopicData", forumTopicData);
    dispatch({
      type: ActionTypes.SET_FORUMTOPICS,
      payload: forumTopicData.data.listForumTopics.items,
    });
  } catch (error) {
    console.log("error on fetching Forum Topics", error);
  }
};

export const setForumSubTopics = () => async (dispatch) => {
  try {
    const forumSubTopicData = await API.graphql({
      query: listForumSubTopics,
      authMode: "AWS_IAM",
    });
    console.log("forumSubTopicData", forumSubTopicData);
    dispatch({
      type: ActionTypes.SET_FORUMSUBTOPICS,
      payload: forumSubTopicData.data.listForumSubTopics.items,
    });
  } catch (error) {
    console.log("error on fetching Forum Sub Topics", error);
  }
};

export const setForumPosts = () => async (dispatch) => {
  try {
    const forumPostData = await API.graphql({
      query: listForumPosts,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_FORUMPOSTS,
      payload: forumPostData.data.listForumPosts.items,
    });
  } catch (error) {
    console.log("error on fetching Article", error);
  }
};

export const postForumPost = (createForumPostInput) => async (dispatch) => {
  try {
    const response = await API.graphql(
      graphqlOperation(createForumPost, { input: createForumPostInput })
    );
    dispatch({
      type: ActionTypes.POST_FORUMPOST_SUCCESS,
      payload: response,
    });
    return {
      result: true,
      response: response,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_FORUMPOST_FAIL,
      payload: error,
    });
    return {
      result: false,
      response: error,
    };
  }
};
export const postForumPostImg = (imgData) => async (dispatch) => {
  try {
    const response = await Storage.put(
      `forumPost/${uuid()}${imgData.name}`,
      imgData,
      {
        contentType: "image/*",
      }
    );
    dispatch({
      type: ActionTypes.POST_FORUMPOST_IMG_SUCCESS,
      payload: response,
    });
    return response;
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_FORUMPOST_IMG_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

export const selectedForumPost = (forumPostId) => async (dispatch) => {
  try {
    console.log(forumPostId);
    const response = await API.graphql({
      query: getForumPost,
      variables: { id: forumPostId },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SELECTED_FORUMPOST,
      payload: response.data.getForumPost,
    });
  } catch (error) {
    console.log("error on selecting ForumPost", error);
  }
};

export const removeSelectedForumPost = (forumPostId) => async (dispatch) => {
  try {
    const { id } = { id: forumPostId };
    console.log("DelForumTopicId", id);
    const delForumPostInput = { id };
    const response = await API.graphql(
      graphqlOperation(deleteForumPost, { input: delForumPostInput })
    );
    dispatch({
      type: ActionTypes.REMOVE_SELECTED_FORUMPOST,
      payload: response,
    });
    return {
      result: true,
      response: response,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.REMOVE_SELECTED_FORUMPOST_FAIL,
      payload: error,
    });
    return {
      result: false,
      response: error,
    };
  }
};

export const postForumPostComment =
  (createForumPostCommentInput) => async (dispatch) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createForumPostComment, {
          input: createForumPostCommentInput,
        })
      );

      dispatch({
        type: ActionTypes.POST_FORUMPOST_COMMENT_SUCCESS,
        payload: response,
      });
      dispatch(
        selectedForumPost(
          createForumPostCommentInput.forumPostCommentForumPostId
        )
      );
    } catch (error) {
      console.log("error on posting ForumPostComment", error);
      dispatch({
        type: ActionTypes.POST_FORUMPOST_COMMENT_FAIL,
      });
    }
  };

export const selectedForumPostComment =
  (forumPostCommentId) => async (dispatch) => {
    try {
      const response = await API.graphql({
        query: getForumPostComment,
        variables: { id: forumPostCommentId },
        authMode: "AWS_IAM",
      });
      dispatch({
        type: ActionTypes.SELECTED_FORUMPOST_COMMENT,
        payload: response.data.getForumPostComment,
      });
    } catch (error) {
      console.log("error on selecting ForumPostComment", error);
    }
  };

export const postForumPostSubComment =
  (createForumPostSubCommentInput) => async (dispatch) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createForumPostSubComment, {
          input: createForumPostSubCommentInput,
        })
      );

      dispatch({
        type: ActionTypes.POST_FORUMPOST_SUBCOMMENT_SUCCESS,
        payload: response,
      });

      dispatch(
        selectedForumPostComment(
          createForumPostSubCommentInput.forumPostSubCommentForumPostCommentId
        )
      );
    } catch (error) {
      console.log("error on posting ForumPostSubComment", error);
      dispatch({
        type: ActionTypes.POST_FORUMPOST_SUBCOMMENT_FAIL,
      });
    }
  };
//Delete the forum post SubComment
export const deleteForumPostSubComment =
  (deleteForumPostSubCommentInput) => async (dispatch) => {
    try {
      console.log(deleteForumPostSubCommentInput);
      const response = await API.graphql(
        graphqlOperation(deleteForumPostSubComment, {
          input: deleteForumPostSubCommentInput,
        })
      );
      dispatch({
        type: ActionTypes.REMOVE_FORUMPOST_SUBCOMMENT_SUCCESS,
        payload: response,
      });
      dispatch(
        selectedForumPostComment(
          deleteForumPostSubCommentInput.forumPostSubCommentForumPostCommentId
        )
      );
    } catch (error) {
      console.log("error on delete ForumPostSubComment", error);
      dispatch({
        type: ActionTypes.REMOVE_FORUMPOST_SUBCOMMENT_FAIL,
      });
    }
  };
