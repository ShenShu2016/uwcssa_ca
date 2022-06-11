/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:23:37
 * @LastEditTime: 2022-06-11 01:29:56
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/redux/tag/tagSlice.tsx
 */

import { createArticleTags, createTag } from 'graphql/mutations';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api-graphql';

type ArticleTag = {
  id?: string | null;
  tagID: string;
  articleID: string;
};

type Tag = {
  id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner: string;
};

const initialState = {
  createNewTagStatus: 'idle',
  createNewTagError: null,
  createArticleTagStatus: 'idle',
  createArticleTagError: null,
};

export const createNewTag = createAsyncThunk(
  'tag/createNewTag',
  async ({ createTagInput }: { createTagInput: Tag }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createTag, { input: createTagInput }),
      );
      return result.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const createArticleTag = createAsyncThunk(
  'tag/createArticleTag',
  async (
    { createArticleTagInput }: { createArticleTagInput: ArticleTag },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createArticleTags, { input: createArticleTagInput }),
      );
      return result.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewTag.pending, (state) => {
        state.createNewTagStatus = 'loading';
      })
      .addCase(createNewTag.fulfilled, (state) => {
        state.createNewTagStatus = 'succeed';
      })
      .addCase(createNewTag.rejected, (state, action) => {
        state.createNewTagStatus = 'failed';
        state.createNewTagError = action.payload;
      })
      .addCase(createArticleTag.pending, (state) => {
        state.createArticleTagStatus = 'loading';
      })
      .addCase(createArticleTag.fulfilled, (state) => {
        state.createArticleTagStatus = 'succeed';
      })
      .addCase(createArticleTag.rejected, (state, action) => {
        state.createArticleTagStatus = 'failed';
        state.createArticleTagError = action.payload;
      });
  },
});

export default tagSlice.reducer;
