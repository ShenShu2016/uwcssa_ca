import { ActionTypes } from "../constants/user-action-types";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};
