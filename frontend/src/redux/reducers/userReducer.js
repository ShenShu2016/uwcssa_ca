import { ActionTypes } from "../contants/user-action-types";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
        case ActionTypes.REMOVE_SET_USERS:
      return {};
    default:
      return state;
  }
};
