/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:02:00
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-25 22:38:24
 * @FilePath: /uwcssa_ca/frontend/src/redux/article/articleSlice.tsx
 * @Description:
 *
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  articleSortByCreatedAt,
  createArticle,
  getArticle,
} from './custom_q_m_s';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { updateArticle } from 'graphql/mutations';

export type Article = {
  id: string;
  title: string;
  tags?: { items: Array<{ tagID: string }> } | null;
  content: string;
  comments?: any | null;
  active: 'T' | 'F';
  coverPageImgURL?: string | null;
  coverPageDescription?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner: string;
  user?: { avatarURL: string; id: string; name: string };
};

const articleAdapter = createEntityAdapter<Article>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = articleAdapter.getInitialState({
  fetchArticleListStatus: 'idle',
  fetchArticleListError: null,
  fetchArticleStatus: 'idle',
  fetchArticleError: null,
  postArticleStatus: 'idle',
  postArticleError: null,
  postArticleImgStatus: 'idle',
  postArticleImgError: null,
  updateArticleDetailStatus: 'idle',
  updateArticleDetailError: null,
});

export const fetchArticleList = createAsyncThunk(
  'article/fetchArticleList',
  async ({ isAuth }: { isAuth: boolean }) => {
    try {
      const result: any = await API.graphql({
        query: articleSortByCreatedAt,
        variables: {
          active: 'T',
          sortDirection: 'DESC',
          limit: 10,
        },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      return result.data.articleSortByCreatedAt.items;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchArticle = createAsyncThunk(
  'article/fetchArticle',
  async ({ articleId, isAuth }: { articleId: string; isAuth: boolean }) => {
    try {
      const result: any = await API.graphql({
        query: getArticle,
        variables: { id: articleId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      // console.log("what?", response);
      if (result.data.getArticle === null) {
        return { id: articleId, description: 'not-found' };
      }
      return result.data.getArticle;
    } catch (error) {
      console.log(error);
    }
  },
);

export const postArticle = createAsyncThunk(
  'article/postArticle',
  async ({ createArticleInput }: { createArticleInput: Article }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(createArticle, { input: createArticleInput }),
      );
      return result.data.createArticle;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updateArticleDetail = createAsyncThunk(
  'article/updateArticleDetail',
  async ({ updateArticleInput }: { updateArticleInput: Article }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(updateArticle, { input: updateArticleInput }),
      );
      return result.data.updateArticle;
    } catch (error) {
      console.log(error);
    }
  },
);

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchArticleList (pending, fulfilled, and rejected)
      .addCase(fetchArticleList.pending, (state) => {
        state.fetchArticleListStatus = 'loading';
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.fetchArticleListStatus = 'succeed';
        //articleAdapter.removeAll(state);
        articleAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.fetchArticleListStatus = 'failed';
        state.fetchArticleError = action.error.message;
      })
      // Cases for status of selectedArticle (pending, fulfilled, and rejected)
      .addCase(fetchArticle.pending, (state) => {
        state.fetchArticleStatus = 'loading';
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.fetchArticleStatus = 'succeed';
        articleAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.fetchArticleStatus = 'failed';
        state.fetchArticleError = action.error.message;
      })
      // Cases for status of postArticle (pending, fulfilled, and rejected)
      .addCase(postArticle.pending, (state) => {
        state.postArticleStatus = 'loading';
      })
      .addCase(postArticle.fulfilled, (state, action) => {
        state.postArticleStatus = 'succeed';
        // state.articles.unshift(action.payload.data.createArticle);
        articleAdapter.addOne(state, action.payload);
        // state.postArticleStatus = "idle";
      })
      .addCase(postArticle.rejected, (state, action) => {
        state.postArticleStatus = 'failed';
        state.postArticleError = action.error.message;
      })
      // Cases for status of updateArticle (pending, fulfilled, and rejected)
      .addCase(updateArticleDetail.pending, (state) => {
        state.updateArticleDetailStatus = 'loading';
      })
      .addCase(updateArticleDetail.fulfilled, (state) => {
        state.updateArticleDetailStatus = 'succeed';
        //state.articles.unshift(action.payload.data.createArticle);
        //articleAdapter.upsertOne(state, action.payload);
        // state.updateArticleStatus = "idle";
      })
      .addCase(updateArticleDetail.rejected, (state, action) => {
        state.updateArticleDetailStatus = 'failed';
        state.updateArticleDetailError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllArticles,
  selectById: selectArticleById,
  selectIds: selectArticleIds,
} = articleAdapter.getSelectors((state: RootState) => state.article);

export default articleSlice.reducer;
