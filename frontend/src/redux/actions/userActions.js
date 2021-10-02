import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/user-action-types";

const userCountsQuery = `query ListUsers {
    listUsers {
        items {
            id
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
