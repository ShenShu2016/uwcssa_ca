/*
 * @Author: Shen Shu
 * @Date: 2022-05-22 15:10:30
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-22 16:20:31
 * @FilePath: /uwcssa_ca/frontend/src/redux/userImage/userImageSlice.tsx
 * @Description:
 *
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import API from '@aws-amplify/api';
import { CreateUserImageInput } from 'API';
import Storage from '@aws-amplify/storage';
import awsmobile from '../../aws-exports';
import { createUserImage } from 'graphql/mutations';
import { graphqlOperation } from '@aws-amplify/api-graphql';

type UserImage = {
  id: string;
  objectURL: string;
  key: string;
  targetTable?: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string;
};

const userImageAdapter = createEntityAdapter<UserImage>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = userImageAdapter.getInitialState({
  postUserImageStatus: 'idle',
  postUserImageError: null,
});

export const postUserImage = createAsyncThunk(
  'userImage/postUserImage',
  async ({
    createUserImageInput,
  }: {
    createUserImageInput: CreateUserImageInput;
  }) => {
    try {
      const storageResult = await Storage.put('test.txt', 'Protected Content', {
        level: 'protected',
        contentType: 'image/*',
      });
      console.log(storageResult);
    } catch (error) {
      console.error(error);
    }

    const result: any = await API.graphql(
      graphqlOperation(createUserImage, { input: createUserImageInput }),
    );

    return result.data.createArticle;
  },
);

const userImageSlice = createSlice({
  name: 'userImage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of postUserImage (pending, fulfilled, and rejected)
      .addCase(postUserImage.pending, (state) => {
        state.postUserImageStatus = 'loading';
      })
      .addCase(postUserImage.fulfilled, (state, action) => {
        state.postUserImageStatus = 'succeed';
        userImageAdapter.addOne(state, action.payload);
      })
      .addCase(postUserImage.rejected, (state, action) => {
        state.postUserImageStatus = 'failed';
        state.postUserImageError = action.error.message;
      });
  },
});

export default userImageSlice.reducer;
