/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:02:00
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 01:20:14
 * @FilePath: /uwcssa_ca/src/redux/comment/commentSlice.tsx
 * @Description:
 *
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createCount, updateComment } from "graphql/mutations";

import API from "@aws-amplify/api";
import { Article } from "redux/article/articleSlice";
import { CreateCommentInput } from "API";
import { RootState } from "redux/store";
import { UserProfile } from "redux/userProfile/userProfileSlice";
import { getComment } from "graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";
import {
  commentSortByArticleCommentsIdCreatedAt,
  createComment,
} from "./custom_q_m_s";

export type Comment = {
  id: string;
  content: string;
  isDeleted: boolean;
  articleCommentsId?: string | null;
  article?: Article | null;
  eventCommentsId?: string | null;
  event?: any | null;
  count?: any | null;
  likes?: any | null;
  createdAt: string;
  updatedAt: string;
  owner: string;
  user: UserProfile;
  commentCountId?: string | null;
};

export const commentAdapter = createEntityAdapter<Comment>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = commentAdapter.getInitialState({
  fetchCommentListStatus: "idle",
  fetchCommentListError: null,
  fetchCommentStatus: "idle",
  fetchCommentError: null,
  postCommentStatus: "idle",
  postCommentError: null,
  postCommentImgStatus: "idle",
  postCommentImgError: null,
  updateCommentDetailStatus: "idle",
  updateCommentDetailError: null,
});

export const fetchCommentList = createAsyncThunk(
  "comment/fetchCommentList",
  async (
    {
      isAuth,
      articleCommentsId,
    }: {
      isAuth: boolean;
      articleCommentsId: string;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: commentSortByArticleCommentsIdCreatedAt,
        variables: {
          articleCommentsId,
          isDeleted: false,
          sortDirection: "DESC",
          limit: 10,
        },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      return result.data.commentSortByArticleCommentsIdCreatedAt.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchComment = createAsyncThunk(
  "comment/fetchComment",
  async (
    { commentId, isAuth }: { commentId: string; isAuth: boolean },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getComment,
        variables: { id: commentId },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      if (result.data.getComment === null) {
        return { id: commentId, description: "not-found" };
      }
      return result.data.getComment;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postComment = createAsyncThunk(
  "comment/postComment",
  async (
    {
      createCommentInput,
    }: {
      createCommentInput: CreateCommentInput;
    },
    { rejectWithValue },
  ) => {
    try {
      const countId = uuid();
      const commentId = uuid();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [createCommentResult, createCountResult]: [any, any] =
        await Promise.all([
          API.graphql(
            graphqlOperation(createComment, {
              input: {
                id: commentId,
                commentCountId: countId,
                ...createCommentInput,
              },
            }),
          ),
          API.graphql(
            graphqlOperation(createCount, {
              input: {
                id: countId,
                count: undefined,
                commentCount: undefined,
                like: 0,
                targetTable: "Comment",
                countCommentId: commentId,
                owner: createCommentInput.owner,
              },
            }),
          ),
        ]);

      return createCommentResult.data.createComment;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateCommentDetail = createAsyncThunk(
  "comment/updateCommentDetail",
  async (
    { updateCommentInput }: { updateCommentInput: Comment },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateComment, { input: updateCommentInput }),
      );
      return result.data.updateComment;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    removeAllComments(state) {
      commentAdapter.removeAll(state);
    },
    insertAllComments(state, data) {
      // console.log(data);
      commentAdapter.upsertMany(state, data);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCommentList.pending, (state) => {
        state.fetchCommentListStatus = "loading";
      })
      .addCase(fetchCommentList.fulfilled, (state, action) => {
        state.fetchCommentListStatus = "succeed";
        commentAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchCommentList.rejected, (state, action) => {
        state.fetchCommentListStatus = "failed";
        state.fetchCommentListError = action.payload;
      })
      .addCase(fetchComment.pending, (state) => {
        state.fetchCommentStatus = "loading";
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.fetchCommentStatus = "succeed";
        commentAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchComment.rejected, (state, action) => {
        state.fetchCommentStatus = "failed";
        state.fetchCommentError = action.payload;
      })
      .addCase(postComment.pending, (state) => {
        state.postCommentStatus = "loading";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.postCommentStatus = "succeed";
        commentAdapter.addOne(state, action.payload);
      })
      .addCase(postComment.rejected, (state, action) => {
        state.postCommentStatus = "failed";
        state.postCommentError = action.payload;
      })
      .addCase(updateCommentDetail.pending, (state) => {
        state.updateCommentDetailStatus = "loading";
      })
      .addCase(updateCommentDetail.fulfilled, (state, action) => {
        state.updateCommentDetailStatus = "succeed";
        commentAdapter.updateOne(state, action.payload);
      })
      .addCase(updateCommentDetail.rejected, (state, action) => {
        state.updateCommentDetailStatus = "failed";
        state.updateCommentDetailError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllComments,
  selectById: selectCommentById,
  selectIds: selectCommentIds,
} = commentAdapter.getSelectors((state: RootState) => state.comment);

export const { insertAllComments, removeAllComments } = commentSlice.actions;
export default commentSlice.reducer;
