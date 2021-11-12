import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listDepartments, listUwcssaJobs } from "../CustomQuery/CareerQueries";

import API from "@aws-amplify/api";

const initialState = {
  uwcssaJobs: [],
  departments: [],

  //  Status: "idle",
  //  Error: null,
  fetchUwcssaJobsStatus: "idle",
  fetchUwcssaJobsError: null,
  fetchDepartmentsStatus: "idle",
  fetchDepartmentsError: null,
};

export const fetchUwcssaJobs = createAsyncThunk(
  "career/fetchUwcssaJobs",
  async () => {
    const response = await API.graphql({
      query: listUwcssaJobs,
      authMode: "AWS_IAM",
    });
    return response.data.listUwcssaJobs.items;
  }
);

export const fetchDepartments = createAsyncThunk(
  "career/fetchDepartments",
  async () => {
    const response = await API.graphql({
      query: listDepartments,
      authMode: "AWS_IAM",
    });
    return response.data.listDepartments.items;
  }
);

const careerSlice = createSlice({
  name: "career",
  initialState,
  reducers: {
    //有API call 的不能放这里
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchUwcssaJobs (pending, fulfilled, and rejected)
      .addCase(fetchUwcssaJobs.pending, (state, action) => {
        state.fetchUwcssaJobsStatus = "loading";
      })
      .addCase(fetchUwcssaJobs.fulfilled, (state, action) => {
        state.fetchUwcssaJobsStatus = "succeeded";
        state.uwcssaJobs = action.payload;
      })
      .addCase(fetchUwcssaJobs.rejected, (state, action) => {
        state.fetchUwcssaJobsStatus = "failed";
        state.fetchUwcssaJobsError = action.error.message;
      })
      // Cases for status of fetchDepartments (pending, fulfilled, and rejected)
      .addCase(fetchDepartments.pending, (state, action) => {
        state.fetchDepartmentsStatus = "loading";
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.fetchDepartmentsStatus = "succeeded";
        state.departments = action.payload;
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.fetchDepartmentsStatus = "failed";
        state.fetchDepartmentsError = action.error.message;
      });
  },
});

export default careerSlice.reducer;
