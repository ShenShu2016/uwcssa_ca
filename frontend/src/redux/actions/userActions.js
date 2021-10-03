import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/user-action-types";
import { getUser } from "../../graphql/queries";

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
      variables: { username: username },
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
