import { ActionTypes } from "../constants/user-action-types";

const initialState = {
  userCounts: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER_COUNTS:
      return { ...state, userCounts: payload };
    default:
      return state;
  }
};
