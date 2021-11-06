import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/auth-action-types";
import Auth from "@aws-amplify/auth";
import { getUser } from "../../graphql/queries";

export const setUser = () => async (dispatch) => {
  try {
    const response = await Auth.currentAuthenticatedUser();
    dispatch({
      type: ActionTypes.USER_AUTHENTICATED_LOADED_SUCCESS,
      payload: response,
    });
    const { username } = response;
    dispatch(setUserProfile(username));
    return {
      result: true,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.USER_AUTHENTICATED_LOADED_FAIL,
    });
    return {
      result: false,
      error: error,
    };
  }
};

export const signIn = (username, password) => async (dispatch) => {
  try {
    const response = await Auth.signIn(username, password);
    dispatch({
      type: ActionTypes.SIGN_IN_SUCCESS,
      payload: response,
    });
    dispatch(setUserProfile(username));
    return {
      result: true,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.SIGN_IN_FAIL,
    });
    return {
      result: false,
      error: error,
    };
  }
};

export const setUserProfile = (username) => async (dispatch) => {
  try {
    const response = await API.graphql({
      query: getUser,
      variables: { id: username },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_USER_PROFILE,
      payload: response.data.getUser,
    });
  } catch (error) {
    console.log("error on fetching User profile", error);
    dispatch({
      type: ActionTypes.SET_USER_PROFILE_Fail,
    });
  }
};

export const signUp = (username, password, email) => async (dispatch) => {
  try {
    console.log("start signed up!");
    const response = await Auth.signUp({
      username,
      password,
      attributes: { email },
    });
    dispatch({
      type: ActionTypes.SIGN_UP_SUCCESS,
      payload: response.data,
    });
    return {
      result: true,
    };
  } catch (error) {
    console.log("error signing up:", error);
    dispatch({
      type: ActionTypes.SIGN_UP_FAIL,
    });
    return {
      result: false,
      error: error,
    };
  }
};

export const emailConfirm =
  (username, authenticationCode) => async (dispatch) => {
    try {
      await Auth.confirmSignUp(username, authenticationCode);
      dispatch({
        type: ActionTypes.EMAIL_CONFIRM_SUCCESS,
      });
      return {
        result: true,
      };
    } catch (error) {
      console.log("error confirming signing up:", error);
      dispatch({
        type: ActionTypes.EMAIL_CONFIRM_FAIL,
      });
      return {
        result: false,
        error: error,
      };
    }
  };

export const forgotPassword = (username) => async (dispatch) => {
  try {
    const response = await Auth.forgotPassword(username);
    dispatch({
      type: ActionTypes.EMAIL_CONFIRM_SUCCESS,
    });
    return {
      result: true,
      response: response,
    };
  } catch (error) {
    console.log("error confirming signing up:", error);
    dispatch({
      type: ActionTypes.EMAIL_CONFIRM_FAIL,
    });
    return {
      result: false,
      error: error,
    };
  }
};

export const forgotPassWordSubmit =
  (code, username, new_password) => async (dispatch) => {
    try {
      const response = await Auth.forgotPasswordSubmit(
        username,
        code,
        new_password
      );
      dispatch({
        type: ActionTypes.FORGOT_PASSWORD_SUBMIT_SUCCESS,
      });
      console.log(response);
      return {
        result: true,
        response: response,
      };
    } catch (error) {
      console.log("error confirming FORGOT_PASSWORD_SUBMIT_FAIL:", error);
      console.log(error);
      dispatch({
        type: ActionTypes.FORGOT_PASSWORD_SUBMIT_FAIL,
      });
      return {
        result: false,
        error: error,
      };
    }
  };

// export const reset_password = (email) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ email });

//   try {
//     await axios.post(
//       `${process.env.REACT_APP_API_URL}/auth/password/reset/`,
//       body,
//       config
//     );

//     dispatch({
//       type: ActionTypes.PASSWORD_RESET_SUCCESS,
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionTypes.PASSWORD_RESET_FAIL,
//     });
//   }
// };

// export const reset_password_confirm =
//   (uid, token, new_password1, new_password2) => async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const body = JSON.stringify({ uid, token, new_password1, new_password2 });

//     try {
//       await axios.post(
//         `${process.env.REACT_APP_API_URL}/auth/password/reset/confirm/`,
//         body,
//         config
//       );

//       dispatch({
//         type: ActionTypes.PASSWORD_RESET_CONFIRM_SUCCESS,
//       });
//     } catch (err) {
//       dispatch({
//         type: ActionTypes.PASSWORD_RESET_CONFIRM_FAIL,
//       });
//     }
//   };

export const signOut = () => async (dispatch) => {
  try {
    await Auth.signOut();
    dispatch({
      type: ActionTypes.SIGN_OUT,
    });
    return {
      result: true,
    };
  } catch (error) {
    console.log("error signing out", error);
  }
};
