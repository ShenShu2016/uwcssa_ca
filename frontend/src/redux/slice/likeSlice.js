/*

use this as like

replace Like to Database table name example: Like => Todo

replace Like to Database table name Lower fist one example: like => todo

--and  replace the under two to store.js

import likeReducer from "./slice/likeSlice";

like: likeReducer,

*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createLike, updateLike } from "../../graphql/mutations";
import { getLike, listLikes } from "../../graphql/queries";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const likeAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = likeAdapter.getInitialState({
  fetchLikesStatus: "idle",
  fetchLikesError: null,
  selectedLikeStatus: "idle",
  selectedLikeError: null,
  postLikeStatus: "idle",
  postLikeError: null,
  postLikeImgStatus: "idle",
  postLikeImgError: null,
  updateLikeDetailStatus: "idle",
  updateLikeDetailError: null,
});

export const fetchLikes = createAsyncThunk("like/fetchLikes", async () => {
  try {
    const LikesData = await API.graphql({
      query: listLikes,
      authMode: "AWS_IAM",
    });
    return LikesData.data.listLikes.items;
  } catch (error) {
    console.log(error);
  }
});

export const selectedLike = createAsyncThunk(
  "like/selectedLike",
  async (id) => {
    const response = await API.graphql({
      query: getLike,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getLike === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getLike;
  }
);

export const postLike = createAsyncThunk(
  "like/postLike",
  async ({ createLikeInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createLike, { input: createLikeInput })
      );
      return response.data.createLike;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateLikeDetail = createAsyncThunk(
  "like/updateLikeDetail",
  async (updateLikeDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateLike, { input: updateLikeDetail })
    );
    return response.data.updateLike;
  }
);

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    insertLikes(state, data) {
      likeAdapter.upsertMany(state, data);
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchLikes (pending, fulfilled, and rejected)
      .addCase(fetchLikes.pending, (state, action) => {
        state.fetchLikesStatus = "loading";
      })
      .addCase(fetchLikes.fulfilled, (state, action) => {
        state.fetchLikesStatus = "succeeded";
        likeAdapter.removeAll(state);
        likeAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchLikes.rejected, (state, action) => {
        state.fetchLikesStatus = "failed";
        state.fetchLikesError = action.error.message;
      })
      // Cases for status of selectedLike (pending, fulfilled, and rejected)
      .addCase(selectedLike.pending, (state, action) => {
        state.selectedLikeStatus = "loading";
      })
      .addCase(selectedLike.fulfilled, (state, action) => {
        state.selectedLikeStatus = "succeeded";
        likeAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedLike.rejected, (state, action) => {
        state.selectedLikeStatus = "failed";
        state.selectedLikeError = action.error.message;
      })
      // Cases for status of postLike (pending, fulfilled, and rejected)
      .addCase(postLike.pending, (state, action) => {
        state.postLikeStatus = "loading";
      })
      .addCase(postLike.fulfilled, (state, action) => {
        state.postLikeStatus = "succeeded";
        // state.likes.unshift(action.payload.data.createLike);
        likeAdapter.addOne(state, action.payload);
        // state.postLikeStatus = "idle";
      })
      .addCase(postLike.rejected, (state, action) => {
        state.postLikeStatus = "failed";
        state.postLikeError = action.error.message;
      })
      // Cases for status of updateLike (pending, fulfilled, and rejected)
      .addCase(updateLikeDetail.pending, (state, action) => {
        state.updateLikeDetailStatus = "loading";
      })
      .addCase(updateLikeDetail.fulfilled, (state, action) => {
        state.updateLikeDetailStatus = "succeeded";
        // state.likes.unshift(action.payload.data.createLike);
        likeAdapter.upsertOne(state, action.payload);
        // state.updateLikeStatus = "idle";
      })
      .addCase(updateLikeDetail.rejected, (state, action) => {
        state.updateLikeDetailStatus = "failed";
        state.updateLikeDetailError = action.error.message;
      });
  },
});

export const { insertLikes } = likeSlice.actions;

export const {
  selectAll: selectAllLikes,
  selectById: selectLikeById,
  selectIds: selectLikeIds,
} = likeAdapter.getSelectors((state) => state.like);

export default likeSlice.reducer;
