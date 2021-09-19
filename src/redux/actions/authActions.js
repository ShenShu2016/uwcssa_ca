import axios from "axios";
import { ActionTypes } from "../contants/auth-action-types";

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/user/`,
        config
      );

      dispatch({
        type: ActionTypes.USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: ActionTypes.USER_LOADED_FAIL,
    });
  }
};

export const googleAuthenticate = (state, code) => async (dispatch) => {
  if (state && code && !localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const details = {
      state: state,
      code: code,
    };

    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`,
        config
      );

      dispatch({
        type: ActionTypes.GOOGLE_AUTH_SUCCESS,
        payload: res.data,
      });

      dispatch(load_user());
    } catch (err) {
      dispatch({
        type: ActionTypes.GOOGLE_AUTH_FAIL,
      });
    }
  }
};

export const facebookAuthenticate = (state, code) => async (dispatch) => {
  if (state && code && !localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const details = {
      state: state,
      code: code,
    };

    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?${formBody}`,
        config
      );

      dispatch({
        type: ActionTypes.FACEBOOK_AUTH_SUCCESS,
        payload: res.data,
      });

      dispatch(load_user());
    } catch (err) {
      dispatch({
        type: ActionTypes.FACEBOOK_AUTH_FAIL,
      });
    }
  }
};

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("access") });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwttoken/verify/`,
        body,
        config
      );

      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: ActionTypes.AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: ActionTypes.AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: ActionTypes.AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: ActionTypes.AUTHENTICATED_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwttoken/`,
      body,
      config
    );

    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: ActionTypes.LOGIN_FAIL,
    });
  }
};

export const signup =
  (username, email, password1, password2) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, email, password1, password2 });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/registration/`,
        body,
        config
      );

      dispatch({
        type: ActionTypes.SIGNUP_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.SIGNUP_FAIL,
      });
    }
  };

export const verify = (key) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.get(
      `${process.env.REACT_APP_API_URL}/accounts/confirm-email/${key}/`,
      config
    );

    dispatch({
      type: ActionTypes.ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ACTIVATION_FAIL,
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

export const logout = () => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGOUT,
  });
};
