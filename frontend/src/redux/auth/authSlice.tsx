/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 19:33:37
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 18:47:03
 * @FilePath: \uwcssa_ca\frontend\src\redux\auth\authSlice.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Auth from '@aws-amplify/auth';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

export interface AuthState {
  isAuth: null | boolean;
  user: unknown | null;
  loadUserStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  loadUserError: null | unknown;
  signInStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  signInError: null | unknown;
  googleSignInStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  googleSignInError: null | unknown;
  signUpStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  signUpError: null | unknown;
  emailConfirmStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  emailConfirmError: null | unknown;
  resendConfirmationCodeStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  resendConfirmationCodeError: null | unknown;
  forgotPasswordStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  forgotPasswordError: null | unknown;
  forgotPassWordSubmitStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  forgotPassWordSubmitError: null | unknown;
  changePasswordStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  changePasswordError: null | unknown;
  signOutStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  signOutError: null | unknown;
}

const initialState: AuthState = {
  isAuth: null,
  user: null,
  //  Status: "idle",
  //  Error: null,
  loadUserStatus: 'idle',
  loadUserError: null,
  signInStatus: 'idle',
  signInError: null,
  googleSignInStatus: 'idle',
  googleSignInError: null,
  signUpStatus: 'idle',
  signUpError: null,
  emailConfirmStatus: 'idle',
  emailConfirmError: null,
  resendConfirmationCodeStatus: 'idle',
  resendConfirmationCodeError: null,
  forgotPasswordStatus: 'idle',
  forgotPasswordError: null,
  forgotPassWordSubmitStatus: 'idle',
  forgotPassWordSubmitError: null,
  changePasswordStatus: 'idle',
  changePasswordError: null,
  signOutStatus: 'idle',
  signOutError: null,
};

export const loadUser = createAsyncThunk('auth/loadUser', async () => {
  const response = await Auth.currentAuthenticatedUser();
  return response;
});

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    const username = email;
    if (username) {
      const response = await Auth.signIn(username, password);
      return response;
    }
  },
);

export const googleSignIn = createAsyncThunk('auth/googleSignIn', async () => {
  const response = await Auth.federatedSignIn({
    provider: CognitoHostedUIIdentityProvider.Google,
  });
  return response;
});

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({
    password,
    email,
    name,
  }: {
    password: string;
    email: string;
    name: string;
  }) => {
    const response = await Auth.signUp({
      username: email,
      password,
      attributes: { name: name },
    });
    return response;
  },
);

export const emailConfirm = createAsyncThunk(
  'auth/emailConfirm',
  async ({
    email,
    authenticationCode,
  }: {
    email?: string;
    authenticationCode: string;
  }) => {
    const username = email;
    if (username) {
      const response = await Auth.confirmSignUp(username, authenticationCode);
      return response;
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (username: string) => {
    const response = await Auth.forgotPassword(username);
    return response;
  },
);

export const forgotPassWordSubmit = createAsyncThunk(
  'auth/forgotPassWordSubmit',
  async ({
    username,
    code,
    new_password,
  }: {
    username: string;
    code: string;
    new_password: string;
  }) => {
    const response = await Auth.forgotPasswordSubmit(
      username,
      code,
      new_password,
    );
    return response;
  },
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({
    user,
    old_password,
    new_password,
  }: {
    user: string;
    old_password: string;
    new_password: string;
  }) => {
    const response = await Auth.changePassword(
      user,
      old_password,
      new_password,
    );
    return response;
  },
);

export const resendConfirmationCode = createAsyncThunk(
  'auth/resendConfirmationCode',
  async (username: string) => {
    const response = await Auth.resendSignUp(username);
    return response;
  },
);

export const signOut = createAsyncThunk('auth/signOut', async () => {
  const response = await Auth.signOut();
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //有API call 的不能放这里
  },
  extraReducers(builder) {
    builder
      // Cases for status of loadUser (pending, fulfilled, and rejected)
      .addCase(loadUser.pending, (state) => {
        state.loadUserStatus = 'loading';
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loadUserStatus = 'succeed';
        state.isAuth = true;
        state.user = action.payload;
        // state.cognitoGroup =
        //   action.payload.signInUserSession.accessToken.payload[
        //     "cognito:groups"
        //   ];
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loadUserStatus = 'failed';
        state.isAuth = false;
        state.user = null;

        state.signInError = action.error.message;
      })
      // Cases for status of signIn (pending, fulfilled, and rejected)
      .addCase(signIn.pending, (state) => {
        state.signInStatus = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.signInStatus = 'succeed';
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.signInStatus = 'failed';
        state.isAuth = false;
        state.user = null;
        state.signInError = action.error.message;
      })
      // Cases for status of signIn (pending, fulfilled, and rejected)
      .addCase(googleSignIn.pending, (state) => {
        state.googleSignInStatus = 'loading';
      })
      .addCase(googleSignIn.fulfilled, (state) => {
        state.googleSignInStatus = 'succeed';
        // state.isAuth = true;
        // state.user = action.payload; //因为第三方登录会直接跳回去刷新页面所以redux也没用，会被重置掉
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.googleSignInStatus = 'failed';
        state.isAuth = false;
        state.user = null;
        state.googleSignInError = action.error.message;
      })

      // Cases for status of signUp (pending, fulfilled, and rejected)
      .addCase(signUp.pending, (state) => {
        state.signUpStatus = 'loading';
      })
      .addCase(signUp.fulfilled, (state) => {
        state.signUpStatus = 'succeed';

        //! need to do later
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUpStatus = 'failed';
        state.signUpError = action.error.message;
      })

      // Cases for status of emailConfirm (pending, fulfilled, and rejected)
      .addCase(emailConfirm.pending, (state) => {
        state.emailConfirmStatus = 'loading';
      })
      .addCase(emailConfirm.fulfilled, (state) => {
        state.emailConfirmStatus = 'succeed';
      })
      .addCase(emailConfirm.rejected, (state, action) => {
        state.emailConfirmStatus = 'failed';
        state.emailConfirmError = action.error.message;
      })
      // Cases for status of forgotPassword (pending, fulfilled, and rejected)
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPasswordStatus = 'loading';
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.forgotPasswordStatus = 'succeed';
        //! need to do later
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.forgotPasswordStatus = 'failed';
        state.forgotPasswordError = action.error.message;
      })
      // Cases for status of resendConfirmationCode (pending, fulfilled, and rejected)
      .addCase(resendConfirmationCode.pending, (state) => {
        state.resendConfirmationCodeStatus = 'loading';
      })
      .addCase(resendConfirmationCode.fulfilled, (state) => {
        state.resendConfirmationCodeStatus = 'succeed';
        //! need to do later
      })
      .addCase(resendConfirmationCode.rejected, (state, action) => {
        state.resendConfirmationCodeStatus = 'failed';
        state.resendConfirmationCodeError = action.error.message;
      })
      // Cases for status of forgotPassWordSubmit (pending, fulfilled, and rejected)
      .addCase(forgotPassWordSubmit.pending, (state) => {
        state.forgotPassWordSubmitStatus = 'loading';
      })
      .addCase(forgotPassWordSubmit.fulfilled, (state) => {
        state.forgotPassWordSubmitStatus = 'succeed';
        //! need to do later
      })
      .addCase(forgotPassWordSubmit.rejected, (state, action) => {
        state.forgotPassWordSubmitStatus = 'failed';
        state.forgotPassWordSubmitError = action.error.message;
      })
      // Cases for status of changePassword (pending, fulfilled, and rejected)
      .addCase(changePassword.pending, (state) => {
        state.changePasswordStatus = 'loading';
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.changePasswordStatus = 'succeed';
        //! need to do later
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePasswordStatus = 'failed';
        state.changePasswordError = action.error.message;
      })
      // Cases for status of signOut (pending, fulfilled, and rejected)
      .addCase(signOut.pending, (state) => {
        state.signOutStatus = 'loading';
      })
      .addCase(signOut.fulfilled, (state) => {
        state.signOutStatus = 'succeed';
        state.isAuth = false;
        state.user = null;
      })
      .addCase(signOut.rejected, (state) => {
        state.signOutStatus = 'failed';
        state.isAuth = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
