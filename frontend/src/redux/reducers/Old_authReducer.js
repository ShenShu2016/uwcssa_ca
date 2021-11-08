import { ActionTypes } from "../constants/Old_auth-action-types";

const initialState = {
  isAuthenticated: null,
  user: { username: "", attributes: { email: "" } },
  cognitoGroup: [null],
  userProfile: { username: "" },
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_AUTHENTICATED_LOADED_SUCCESS:
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        cognitoGroup:
          payload.signInUserSession.accessToken.payload["cognito:groups"],
      };
    case ActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    case ActionTypes.SET_USER_PROFILE_Fail:
      return {
        ...state,
        user: { username: "", attributes: { email: "" } },
      };
    case ActionTypes.USER_AUTHENTICATED_LOADED_FAIL:
    case ActionTypes.SIGN_IN_FAIL:
    case ActionTypes.SIGN_UP_FAIL:
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: { username: "", attributes: { email: "" } },
        cognitoGroup: ["unAuthenticated"],
        userProfile: { username: "" },
      };

    case ActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
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
