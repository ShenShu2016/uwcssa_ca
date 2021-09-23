import { ActionTypes } from "../constants/auth-action-types";
import Auth from "@aws-amplify/auth";
import axios from "axios";

export const load_user = () => async (dispatch) => {
  Auth.currentAuthenticatedUser()
    .then((response) => {
      console.log(response);
      dispatch({
        type: ActionTypes.USER_LOADED_SUCCESS,
        payload: response,
      });
    })
    .catch((response) => {
      console.log(response);
      dispatch({
        type: ActionTypes.USER_LOADED_FAIL,
      });
    });
};

export const checkAuthenticated = () => async (dispatch) => {
  Auth.currentAuthenticatedUser()
    .then((response) => {
      dispatch({
        type: ActionTypes.AUTHENTICATED_SUCCESS,
      });
    })
    .catch((response) => {
      dispatch({
        type: ActionTypes.AUTHENTICATED_FAIL,
      });
    });
};

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await Auth.signIn(username, password);
    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: response,
    });
    dispatch(load_user());
  } catch (error) {
    dispatch({
      type: ActionTypes.LOGIN_FAIL,
    });
    console.log("我她吗出错拉", error);
  }
};

export const signUp = (username, password) => async (dispatch) => {
  try {
    console.log("start signed up!");
    const response = await Auth.signUp({
      username,
      password,
    });
    dispatch({
      type: ActionTypes.SIGNUP_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("error signing up:", error);
    dispatch({
      type: ActionTypes.SIGNUP_FAIL,
    });
  }
};

export const emailConfirm =
  (username, authenticationCode) => async (dispatch) => {
    try {
      await Auth.confirmSignUp(username, authenticationCode);
      dispatch({
        type: ActionTypes.EMAILCONFIRM_SUCCESS,
      });
    } catch (error) {
      console.log("error confirming signing up:", error);
      dispatch({
        type: ActionTypes.EMAILCONFIRM_FAIL,
      });
    }
  };

export const reset_password = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/password/reset/`,
      body,
      config
    );

    dispatch({
      type: ActionTypes.PASSWORD_RESET_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.PASSWORD_RESET_FAIL,
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password1, new_password2) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ uid, token, new_password1, new_password2 });

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/password/reset/confirm/`,
        body,
        config
      );

      dispatch({
        type: ActionTypes.PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

export const signOut = () => async (dispatch) => {
  try {
    await Auth.signOut();
    dispatch({
      type: ActionTypes.SIGNOUT,
    });
  } catch (error) {
    console.log("error signing out", error);
  }
};
