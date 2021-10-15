import {
  createUserEducation,
  createUserExperience,
  updateUserEducation,
  updateUserExperience,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/user-action-types";
import { getUser } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const userCountsQuery = `query ListUsers {
    listUsers {
        items {
            username
        }
    }
}`;
export const setUserCounts = () => async (dispatch) => {
  try {
    const userData = await API.graphql({
      query: userCountsQuery,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_USER_COUNTS,
      payload: userData.data.listUsers.items.length,
    });
  } catch (error) {
    console.log("error on fetching Users", error);
  }
};

export const selectedUser = (username) => async (dispatch) => {
  try {
    const response = await API.graphql({
      query: getUser,
      variables: { id: username },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SELECTED_USER,
      payload: response.data.getUser,
    });
  } catch (error) {
    console.log("error on selecting User", error);
  }
};

export const removeSelectedUser = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.REMOVE_SELECTED_USER,
  });
};
export const postUserEducation =
  (createUserEducationInput) => async (dispatch) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createUserEducation, {
          input: createUserEducationInput,
        })
      );
      dispatch({
        type: ActionTypes.POST_USER_EDUCATION_SUCCESS,
        payload: response,
      });
      dispatch(selectedUser(response.data.createUserEducation.user.username));
    } catch (error) {
      console.log("error on posting User Education", error);
      dispatch({
        type: ActionTypes.POST_USER_EDUCATION_FAIL,
        payload: error,
      });
    }
  };
export const putUserEducation =
  (updateUserEducationInput) => async (dispatch) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateUserEducation, {
          input: updateUserEducationInput,
        })
      );
      dispatch({
        type: ActionTypes.UPDATE_USER_EDUCATION_SUCCESS,
        payload: response.data.updateUserEducation,
      });
      dispatch(selectedUser(response.data.updateUserEducation.user.username));
      //用来刷新页面的
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_USER_EDUCATION_FAIL,
        payload: error,
      });
      console.log("error on update User Education", error);
    }
  };

export const postUserExperience =
  (createUserExperienceInput) => async (dispatch) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createUserExperience, {
          input: createUserExperienceInput,
        })
      );
      dispatch({
        type: ActionTypes.POST_USER_EXPERIENCE_SUCCESS,
        payload: response,
      });
      dispatch(selectedUser(response.data.createUserExperience.user.username));
    } catch (error) {
      console.log("error on posting User Experience", error);
      dispatch({
        type: ActionTypes.POST_USER_EXPERIENCE_FAIL,
        payload: error,
      });
    }
  };

export const putUserExperience =
  (updateUserExperienceInput) => async (dispatch) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateUserExperience, {
          input: updateUserExperienceInput,
        })
      );
      dispatch({
        type: ActionTypes.UPDATE_USER_EXPERIENCE_SUCCESS,
        payload: response.data.updateUserExperience,
      });
      dispatch(selectedUser(response.data.updateUserExperience.user.username));
      //用来刷新页面的
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_USER_EXPERIENCE_FAIL,
        payload: error,
      });
      console.log("error on update User EXPERIENCE", error);
    }
  };
