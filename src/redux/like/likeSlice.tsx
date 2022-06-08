/*
 * @Author: Shen Shu
 * @Date: 2022-06-07 22:23:59
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-07 23:28:23
 * @FilePath: /uwcssa_ca/src/redux/like/likeSlice.tsx
 * @Description:
 *
 */

import { CreateLikeInput, UpdateLikeInput } from 'API';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { createLike, deleteLike, updateLike } from 'graphql/mutations';
import { getLike, listLikes } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

export type Like = {
  id: string;
  article?: any | null;
  comment?: any | null;
  event?: any | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string;
  articleLikesId?: string | null;
  commentLikesId?: string | null;
  eventLikesId?: string | null;
};

const likeAdapter = createEntityAdapter<Like>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = likeAdapter.getInitialState({
  fetchLikeListStatus: 'idle',
  fetchLikeListError: null,
  fetchLikeStatus: 'idle',
  fetchLikeError: null,
  postLikeStatus: 'idle',
  postLikeError: null,
  postLikeImgStatus: 'idle',
  postLikeImgError: null,
  updateLikeDetailStatus: 'idle',
  updateLikeDetailError: null,
  removeLikeStatus: 'idle',
  removeLikeError: null,
});

export const fetchLikeList = createAsyncThunk(
  'like/fetchLikeList',
  async ({ isAuth }: { isAuth: boolean }) => {
    try {
      const result: any = await API.graphql({
        query: listLikes,
        // variables: {
        //   active: 'T',
        //   sortDirection: 'DESC',
        // },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });

      return result.data.listLikes.items;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchLike = createAsyncThunk(
  'like/fetchLike',
  async ({ likeId, isAuth }: { likeId: string; isAuth: boolean }) => {
    try {
      const result: any = await API.graphql({
        query: getLike,
        variables: { id: likeId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getLike === null) {
        return { id: likeId, description: 'not-found' };
      }
      return result.data.getLike;
    } catch (error) {
      console.log(error);
    }
  },
);

export const postLike = createAsyncThunk(
  'like/postLike',
  async ({ createLikeInput }: { createLikeInput: CreateLikeInput }) => {
    Object.keys(createLikeInput).forEach((key) =>
      createLikeInput[key] === null || createLikeInput[key] === ''
        ? delete createLikeInput[key]
        : {},
    );
    try {
      const result: any = await API.graphql(
        graphqlOperation(createLike, {
          input: createLikeInput,
        }),
      );
      return result.data.createLike;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updateLikeDetail = createAsyncThunk(
  'like/updateLikeDetail',
  async ({ updateLikeInput }: { updateLikeInput: UpdateLikeInput }) => {
    Object.keys(updateLikeInput).forEach((key) =>
      updateLikeInput[key] === null || updateLikeInput[key] === ''
        ? delete updateLikeInput[key]
        : {},
    );
    try {
      const result: any = await API.graphql(
        graphqlOperation(updateLike, {
          input: updateLikeInput,
        }),
      );
      return result.data.updateLike;
    } catch (error) {
      console.log(error);
    }
  },
);

export const removeLike = createAsyncThunk(
  'like/removeLike',
  async ({ id }: { id: string }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(deleteLike, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteLike.id;
    } catch (error) {
      console.log(error);
    }
  },
);

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchLikeList (pending, fulfilled, and rejected)
      .addCase(fetchLikeList.pending, (state) => {
        state.fetchLikeListStatus = 'loading';
      })
      .addCase(fetchLikeList.fulfilled, (state, action) => {
        state.fetchLikeListStatus = 'succeed';
        //likeAdapter.removeAll(state);
        likeAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchLikeList.rejected, (state, action) => {
        state.fetchLikeListStatus = 'failed';
        state.fetchLikeError = action.error.message;
      })
      // Cases for status of selectedLike (pending, fulfilled, and rejected)
      .addCase(fetchLike.pending, (state) => {
        state.fetchLikeStatus = 'loading';
      })
      .addCase(fetchLike.fulfilled, (state, action) => {
        state.fetchLikeStatus = 'succeed';
        likeAdapter.upsertOne(state, action.payload);
        //console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchLike.rejected, (state, action) => {
        state.fetchLikeStatus = 'failed';
        state.fetchLikeError = action.error.message;
      })
      // Cases for status of postLike (pending, fulfilled, and rejected)
      .addCase(postLike.pending, (state) => {
        state.postLikeStatus = 'loading';
      })
      .addCase(postLike.fulfilled, (state, action) => {
        state.postLikeStatus = 'succeed';
        // state.likes.unshift(action.payload.data.createLike);
        likeAdapter.addOne(state, action.payload);
        // state.postLikeStatus = "idle";
      })
      .addCase(postLike.rejected, (state, action) => {
        state.postLikeStatus = 'failed';
        state.postLikeError = action.error.message;
      })
      // Cases for status of updateLike (pending, fulfilled, and rejected)
      .addCase(updateLikeDetail.pending, (state) => {
        state.updateLikeDetailStatus = 'loading';
      })
      .addCase(updateLikeDetail.fulfilled, (state, action) => {
        state.updateLikeDetailStatus = 'succeed';
        likeAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateLikeDetail.rejected, (state, action) => {
        state.updateLikeDetailStatus = 'failed';
        state.updateLikeDetailError = action.error.message;
      })
      .addCase(removeLike.pending, (state) => {
        state.removeLikeStatus = 'loading';
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        state.removeLikeStatus = 'succeed';
        console.log(action.payload);
        //state.uwcssaMembers.unshift(action.payload.data.createUwcssaMember);
        likeAdapter.removeOne(state, action.payload);
        // state.updateUwcssaMemberStatus = "idle";
      })
      .addCase(removeLike.rejected, (state, action) => {
        state.removeLikeStatus = 'failed';
        state.removeLikeError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllLikes,
  selectById: selectLikeById,
  selectIds: selectLikeIds,
} = likeAdapter.getSelectors((state: RootState) => state.like);

export default likeSlice.reducer;
