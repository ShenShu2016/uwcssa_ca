import { ActionTypes } from "../contants/user-action-types";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};
