/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:23:37
 * @LastEditTime: 2022-05-22 13:57:55
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/redux/tag/tagSlice.tsx
 */
import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import API from '@aws-amplify/api';
import { createArticleTags, createTag } from 'graphql/mutations';
import { graphqlOperation } from '@aws-amplify/api-graphql';

type ArticleTag = {
    id?: string | null,
    tagID: string,
    articleID: string,
};

type Tag = {
    id?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    owner: string;
}

const initialState = {
  createNewTagStatus: 'idle',
  createNewTagError: null,
  createArticleTagStatus: 'idle',
  createArticleTagError: null
};

export const createNewTag = createAsyncThunk(
  'tag/createNewTag',
  async ({ createTagInput }: { createTagInput: Tag }) => {
    try {
      const result = await API.graphql(
        graphqlOperation(createTag, { input: createTagInput }),
      );
      return (result as any).data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const createArticleTag = createAsyncThunk(
  'tag/createArticleTag',
  async ({ createArticleTagInput }: { createArticleTagInput: ArticleTag }) => {
    try {
      const result = await API.graphql(
        graphqlOperation(createArticleTags, { input: createArticleTagInput }),
      );
      return (result as any).data;
    } catch (error) {
      console.log(error);
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
        state.createNewTagError = action.error.message;
      })
      .addCase(createArticleTag.pending, (state) => {
        state.createArticleTagStatus = 'loading';
      })
      .addCase(createArticleTag.fulfilled, (state) => {
        state.createArticleTagStatus = 'succeed';
      })
      .addCase(createArticleTag.rejected, (state, action) => {
        state.createArticleTagStatus = 'failed';
        state.createArticleTagError = action.error.message;
      });
  }
});

export default tagSlice.reducer;