/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:02:00
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-18 18:08:10
 * @FilePath: /uwcssa_ca/src/redux/article/articleSlice.tsx
 * @Description:
 *
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createCount, updateArticle } from "graphql/mutations";

import API from "@aws-amplify/api";
import { AvatarURL } from "redux/userProfile/userProfileSlice";
import { CreateArticleInput } from "API";
import { RootState } from "redux/store";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";
import {
  articleSortByCreatedAt,
  createArticle,
  getArticle,
} from "./custom_q_m_s";

// import { commentAdapter } from 'redux/comment/commentSlice';

export type Article = {
  id: string;
  title: string;
  tags?: { items: Array<{ tagID: string }> } | null;
  content: string;
  comments?: {
    items: Array<{
      id: string;
      content: string;
      createdAt: string;
      user: {
        avatarURL: AvatarURL;
        id: string;
        name: string;
        createdAt: string;
      };
    }>;
  } | null;
  count?: any;
  likes?: any;
  isPublish?: boolean | null;
  active: ActiveType;
  coverPageImgURL?: string | null;
  coverPageDescription?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner: string;
  user?: { avatarURL: AvatarURL; id: string; name: string };
};

enum ActiveType {
  T = "T",
  F = "F",
}
const articleAdapter = createEntityAdapter<Article>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = articleAdapter.getInitialState({
  fetchArticleListStatus: "idle",
  fetchArticleListError: null,
  fetchArticleStatus: "idle",
  fetchArticleError: null,
  postArticleStatus: "idle",
  postArticleError: null,
  postArticleImgStatus: "idle",
  postArticleImgError: null,
  updateArticleDetailStatus: "idle",
  updateArticleDetailError: null,
});

export const fetchArticleList = createAsyncThunk(
  "article/fetchArticleList",
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: articleSortByCreatedAt,
        variables: {
          active: "T",
          sortDirection: "DESC",
          limit: 10,
        },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      return result.data.articleSortByCreatedAt.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchArticle = createAsyncThunk(
  "article/fetchArticle",
  async (
    {
      articleId,
      isAuth,
      ownerUsername = null,
    }: {
      articleId: string;
      isAuth: boolean;
      ownerUsername: string;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getArticle,
        variables: { id: articleId, eq: ownerUsername || null },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      if (result.data.getArticle === null) {
        return { id: articleId, description: "not-found" };
      }
      return result.data.getArticle;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postArticle = createAsyncThunk(
  "article/postArticle",
  async (
    {
      createArticleInput,
    }: {
      createArticleInput: CreateArticleInput;
    },
    { rejectWithValue },
  ) => {
    try {
      const countId = uuid();

      const [createArticleResult, createCountResult]: [any, any] =
        await Promise.all([
          API.graphql(
            graphqlOperation(createArticle, {
              input: { articleCountId: countId, ...createArticleInput },
            }),
          ),
          API.graphql(
            graphqlOperation(createCount, {
              input: {
                id: countId,
                count: undefined,
                commentCount: 0,
                like: 0,
                targetTable: "Article",
                countArticleId: createArticleInput.id,
                owner: createArticleInput.owner,
              },
            }),
          ),
        ]);
      return createArticleResult.data.createArticle;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateArticleDetail = createAsyncThunk(
  "article/updateArticleDetail",
  async (
    { updateArticleInput }: { updateArticleInput: Article },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateArticle, { input: updateArticleInput }),
      );
      return result.data.updateArticle;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const articleSlice = createSlice({
  name: "article",
  initialState,
  // initialState: articleAdapter.getInitialState({
  //   ...initialState,
  //   comments: commentAdapter.getInitialState(),
  // }),

  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchArticleList (pending, fulfilled, and rejected)
      .addCase(fetchArticleList.pending, (state) => {
        state.fetchArticleListStatus = "loading";
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.fetchArticleListStatus = "succeed";
        // articleAdapter.removeAll(state);
        articleAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.fetchArticleListStatus = "failed";
        state.fetchArticleListError = action.payload;
      })
      // Cases for status of selectedArticle (pending, fulfilled, and rejected)
      .addCase(fetchArticle.pending, (state) => {
        state.fetchArticleStatus = "loading";
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.fetchArticleStatus = "succeed";
        articleAdapter.upsertOne(state, action.payload);
        // commentAdapter.upsertMany(
        //   state.comments,
        //   action.payload.comments.items,
        // );
        // console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.fetchArticleStatus = "failed";
        state.fetchArticleError = action.payload;
      })
      // Cases for status of postArticle (pending, fulfilled, and rejected)
      .addCase(postArticle.pending, (state) => {
        state.postArticleStatus = "loading";
      })
      .addCase(postArticle.fulfilled, (state, action) => {
        state.postArticleStatus = "succeed";
        // state.articles.unshift(action.payload.data.createArticle);
        articleAdapter.addOne(state, action.payload);
        // state.postArticleStatus = "idle";
      })
      .addCase(postArticle.rejected, (state, action) => {
        state.postArticleStatus = "failed";
        state.postArticleError = action.payload;
      })
      // Cases for status of updateArticle (pending, fulfilled, and rejected)
      .addCase(updateArticleDetail.pending, (state) => {
        state.updateArticleDetailStatus = "loading";
      })
      .addCase(updateArticleDetail.fulfilled, (state, action) => {
        state.updateArticleDetailStatus = "succeed";
        // state.articles.unshift(action.payload.data.createArticle);
        articleAdapter.upsertOne(state, action.payload);
        // state.updateArticleStatus = "idle";
      })
      .addCase(updateArticleDetail.rejected, (state, action) => {
        state.updateArticleDetailStatus = "failed";
        state.updateArticleDetailError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllArticles,
  selectById: selectArticleById,
  selectIds: selectArticleIds,
} = articleAdapter.getSelectors((state: RootState) => state.article);

export default articleSlice.reducer;
