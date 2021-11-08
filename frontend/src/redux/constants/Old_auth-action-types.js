export const ActionTypes = {
  USER_AUTHENTICATED_LOADED_SUCCESS: "auth/authenticatedLoadSuccess",
  USER_AUTHENTICATED_LOADED_FAIL: "auth/authenticatedLoadFail",

  SIGN_IN_SUCCESS: "auth/signInSuccess",
  SIGN_IN_FAIL: "auth/signInFail",

  SET_USER_PROFILE: "auth/get/userProfile",
  SET_USER_PROFILE_Fail: "auth/get/userProfileFail",

  SIGN_UP_SUCCESS: "auth/signUpSuccess",
  SIGN_UP_FAIL: "auth/signUpFail",
  EMAIL_CONFIRM_SUCCESS: "auth/emailConfirmSuccess",
  EMAIL_CONFIRM_FAIL: "auth/emailConfirmFail",

  FORGOT_PASSWORD_SUCCESS: "auth/forgotPasswordSuccess",
  FORGOT_PASSWORD_FAIL: "auth/forgotPasswordFail",

  FORGOT_PASSWORD_SUBMIT_SUCCESS: "auth/forgotPasswordSubmitSuccess",
  FORGOT_PASSWORD_SUBMIT_FAIL: "auth/forgotPasswordSubmitFail",

  // PASSWORD_RESET_SUCCESS: "auth/passwordResetSuccess",
  // PASSWORD_RESET_FAIL: "auth/passwordResetFail",
  // PASSWORD_RESET_CONFIRM_SUCCESS: "auth/passwordResetConfirmSuccess",
  // PASSWORD_RESET_CONFIRM_FAIL: "auth/passwordResetConfirmFail",
  SIGN_OUT: "auth/signOut",
};
