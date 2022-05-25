/*
 * @Author: Shen Shu
 * @Date: 2022-05-22 15:10:30
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-24 23:02:35
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
import { RootState } from 'redux/store';
import Storage from '@aws-amplify/storage';
import awsmobile from '../../aws-exports';
import { createUserImage } from 'graphql/mutations';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { userImageSortByCreatedAt } from 'graphql/queries';
import { v4 as uuid } from 'uuid';

const { aws_user_files_s3_bucket, aws_user_files_s3_bucket_region } = awsmobile;

type UserImage = {
  id: string;
  objectURL: string;
  key: string;
  targetTable?: string | null;
  lastModified?: string;
  lastModifiedDate: Date;
  name: string;
  type: string;
  size: string;
  createdAt: string;
  updatedAt: string;
  owner: string;
};

const userImageAdapter = createEntityAdapter<UserImage>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = userImageAdapter.getInitialState({
  fetchUserImagesStatus: 'idle',
  fetchUserImagesError: null,
  postUserImageStatus: 'idle',
  postUserImageError: null,
});

export const fetchUserImages = createAsyncThunk(
  'userImage/fetchUserImages',
  async () => {
    try {
      const result: any = await API.graphql({
        query: userImageSortByCreatedAt,
        variables: {
          active: 'T',
          sortDirection: 'DESC',
          limit: 20,
        },
      });
      return result.data.userImageSortByCreatedAt.items;
    } catch (error) {
      console.log(error);
    }
  },
);
interface MyFile extends File {
  lastModifiedDate: Date;
}

export const postUserImage = createAsyncThunk(
  'userImage/postUserImage',
  async ({
    targetTable,
    file,
    authUser,
  }: {
    targetTable: string;
    file: MyFile; //自己编的一个type
    authUser: { identityId: string; username: string }; //这个type编的也不太好
  }) => {
    const id = uuid();
    const fileEXT = file.name.split('.').pop();
    const incompleteKey = `${targetTable}/${id}.${fileEXT}`;
    const { identityId, username } = authUser;
    const key = `protected/${identityId}/${incompleteKey}`;
    const createUserImageInput = {
      id,
      objectURL: `https://${aws_user_files_s3_bucket}.s3.${aws_user_files_s3_bucket_region}.amazonaws.com/${key}`,
      key: key,
      targetTable,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      active: 'T',
      name: file.name,
      size: file.size,
      type: file.type,
      owner: username,
    };
    console.log(createUserImageInput);

    try {
      await Storage.put(incompleteKey, file, {
        level: 'protected',
        contentType: 'image/*',
      });
      const result: any = await API.graphql(
        graphqlOperation(createUserImage, { input: createUserImageInput }),
      );
      return result.data.createUserImage;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

const userImageSlice = createSlice({
  name: 'userImage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder // Cases for status of fetchArticles (pending, fulfilled, and rejected)
      .addCase(fetchUserImages.pending, (state) => {
        state.fetchUserImagesStatus = 'loading';
      })
      .addCase(fetchUserImages.fulfilled, (state, action) => {
        state.fetchUserImagesStatus = 'succeeded';
        userImageAdapter.removeAll(state);
        userImageAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUserImages.rejected, (state, action) => {
        state.fetchUserImagesStatus = 'failed';
        state.fetchUserImagesError = action.error.message;
      })
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

export const {
  selectAll: selectAllUserImages,
  selectById: selectUserImageById,
  selectIds: selectUserImageIds,
} = userImageAdapter.getSelectors((state: RootState) => state.userImage);

export default userImageSlice.reducer;
