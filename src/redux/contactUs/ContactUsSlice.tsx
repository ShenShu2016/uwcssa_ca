/*
 * @Author: Shen Shu
 * @Date: 2022-05-21 00:37:27
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-21 01:54:49
 * @FilePath: /uwcssa_ca/frontend/src/redux/contactUs/ContactUsSlice.tsx
 * @Description:
 *
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from '@aws-amplify/api';
import { createContactUs } from 'graphql/mutations';

export interface ContactUsState {
  postContactUsStatus: 'idle' | 'loading' | 'failed' | 'succeed';
  postContactUsError: null | unknown;
}

const initialState: ContactUsState = {
  postContactUsStatus: 'idle',
  postContactUsError: null,
};

type ContactUs = {
  id: undefined;
  fullName: string | undefined;
  email: string | undefined;
  message: string;
  phone: string | undefined;
  owner: string | undefined;
};

export const postContactUs = createAsyncThunk(
  'contactUs/postContactUs',
  async ({ createContactUsInput }: { createContactUsInput: ContactUs }) => {
    await API.graphql(
      {
        query: createContactUs,
        variables: {
          input: createContactUsInput,
        },
        authMode: createContactUsInput.owner ? undefined : 'AWS_IAM',
      },

      //graphqlOperation(createContactUs, { input: createContactUsInput }),
    );
  },
);

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    //有API call 的不能放这里
  },
  extraReducers(builder) {
    builder
      .addCase(postContactUs.pending, (state) => {
        state.postContactUsStatus = 'loading';
      })
      .addCase(postContactUs.fulfilled, (state) => {
        state.postContactUsStatus = 'succeed';
      })
      .addCase(postContactUs.rejected, (state, action) => {
        state.postContactUsStatus = 'failed';
        state.postContactUsError = action.error.message;
      });
  },
});

export default contactUsSlice.reducer;
