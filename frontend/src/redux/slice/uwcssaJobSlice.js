import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createUwcssaJob, updateUwcssaJob } from "../../graphql/mutations";
import { getUwcssaJob, listUwcssaJobs } from "../CustomQuery/UwcssaJobsQueries";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const uwcssaJobAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt),
});
const initialState = uwcssaJobAdapter.getInitialState({
  fetchUwcssaJobsStatus: "idle",
  fetchUwcssaJobsError: null,
  selectedUwcssaJobStatus: "idle",
  selectedUwcssaError: null,
  postUwcssaJobStatus: "idle",
  postUwcssaJobError: null,
  updateUwcssaJobDetailStatus: "idle",
  updateUwcssaJobDetailError: null,
});

export const fetchUwcssaJobs = createAsyncThunk(
  "uwcssaJob/fetchUwcssaJobs",
  async () => {
    try {
      const response = await API.graphql({
        query: listUwcssaJobs,
        authMode: "AWS_IAM",
      });
      return response.data.listUwcssaJobs.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedUwcssaJob = createAsyncThunk(
  "uwcssaJob/selectedUwcssaJob",
  async (id) => {
    console.log(id);
    try {
      const response = await API.graphql({
        query: getUwcssaJob,
        variables: { id: id },
        authMode: "AWS_IAM",
      });
      return response.data.getUwcssaJob;
    } catch (error) {
      console.log(error);
    }
  }
);
export const postUwcssaJob = createAsyncThunk(
  "uwcssaJob/postUwcssaJob",
  async ({ createUwcssaJobInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createUwcssaJob, {
          input: createUwcssaJobInput,
        })
      );
      return response.data.createUwcssaJob;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUwcssaJobDetail = createAsyncThunk(
  "uwcssaJob/updateUwcssaJobDetail",
  async ({ updateUwcssaJobInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateUwcssaJob, {
          input: updateUwcssaJobInput,
        })
      );
      return response.data.updateUwcssaJob;
    } catch (error) {
      console.log(error);
    }
  }
);
const uwcssaJobSlice = createSlice({
  name: "uwcssaJob",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchUwcssaJobs (pending, fulfilled, and rejected)
      .addCase(fetchUwcssaJobs.pending, (state, action) => {
        state.fetchUwcssaJobsStatus = "loading";
      })
      .addCase(fetchUwcssaJobs.fulfilled, (state, action) => {
        state.fetchUwcssaJobsStatus = "succeeded";
        uwcssaJobAdapter.removeAll(state);
        uwcssaJobAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUwcssaJobs.rejected, (state, action) => {
        state.fetchUwcssaJobsStatus = "failed";
        state.fetchUwcssaJobsError = action.error.message;
      })
      // Cases for status of selectedUwcssa (pending, fulfilled, and rejected)
      .addCase(selectedUwcssaJob.pending, (state, action) => {
        state.selectedUwcssaJobStatus = "loading";
      })
      .addCase(selectedUwcssaJob.fulfilled, (state, action) => {
        state.selectedUwcssaJobStatus = "succeeded";
        uwcssaJobAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedUwcssaJob.rejected, (state, action) => {
        state.selectedUwcssaJobStatus = "failed";
        state.selectedUwcssaError = action.error.message;
      })
      .addCase(postUwcssaJob.pending, (state, action) => {
        state.postUwcssaJobStatus = "loading";
      })
      .addCase(postUwcssaJob.fulfilled, (state, action) => {
        state.postUwcssaJobStatus = "succeeded";
        uwcssaJobAdapter.addOne(state, action.payload);
      })
      .addCase(postUwcssaJob.rejected, (state, action) => {
        state.postUwcssaJobStatus = "failed";
        state.postUwcssaJobError = action.error.message;
      })
      // Cases for status of updateUwcssa (pending, fulfilled, and rejected)
      .addCase(updateUwcssaJobDetail.pending, (state, action) => {
        state.updateUwcssaJobDetailStatus = "loading";
      })
      .addCase(updateUwcssaJobDetail.fulfilled, (state, action) => {
        state.updateUwcssaJobDetailStatus = "succeeded";
        uwcssaJobAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateUwcssaJobDetail.rejected, (state, action) => {
        state.updateUwcssaJobDetailStatus = "failed";
        state.updateUwcssaJobDetailError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllUwcssaJobs,
  selectById: selectUwcssaJobById,
  selectIds: selectUwcssaJobIds,
} = uwcssaJobAdapter.getSelectors((state) => state.uwcssaJob);

export default uwcssaJobSlice.reducer;
