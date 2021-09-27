import { ActionTypes } from "../constants/auth-action-types";

const initialState = {
  isAuthenticated: null,
  user: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case ActionTypes.SIGNIN_SUCCESS:
    case ActionTypes.GOOGLE_AUTH_SUCCESS:
    case ActionTypes.FACEBOOK_AUTH_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };
    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case ActionTypes.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case ActionTypes.AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case ActionTypes.USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    case ActionTypes.GOOGLE_AUTH_FAIL:
    case ActionTypes.FACEBOOK_AUTH_FAIL:
    case ActionTypes.SIGNIN_FAIL:
    case ActionTypes.SIGNUP_FAIL:
    case ActionTypes.SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case ActionTypes.PASSWORD_RESET_SUCCESS:
    case ActionTypes.PASSWORD_RESET_FAIL:
    case ActionTypes.PASSWORD_RESET_CONFIRM_SUCCESS:
    case ActionTypes.PASSWORD_RESET_CONFIRM_FAIL:
    case ActionTypes.ACTIVATION_SUCCESS:
    case ActionTypes.ACTIVATION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
