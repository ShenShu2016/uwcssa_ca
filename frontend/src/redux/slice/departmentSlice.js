import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createDepartment, updateDepartment } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listDepartments } from "../CustomQuery/DepartmentQueries";

const fundingMemberAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt),
});
const initialState = fundingMemberAdapter.getInitialState({
  fetchDepartmentsStatus: "idle",
  fetchDepartmentsError: null,
  postDepartmentStatus: "idle",
  postDepartmentError: null,
  updateDepartmentDetailStatus: "idle",
  updateDepartmentDetailError: null,
});

export const fetchDepartments = createAsyncThunk(
  "fundingMember/fetchDepartments",
  async () => {
    const response = await API.graphql({
      query: listDepartments,
      authMode: "AWS_IAM",
    });
    return response.data.listDepartments.items;
  }
);

export const postDepartment = createAsyncThunk(
  "fundingMember/postDepartment",
  async ({ createDepartmentInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createDepartment, {
          input: createDepartmentInput,
        })
      );
      return response.data.createDepartment;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateDepartmentDetail = createAsyncThunk(
  "fundingMember/updateDepartmentDetail",
  async ({ updateDepartmentInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateDepartment, {
          input: updateDepartmentInput,
        })
      );
      return response.data.updateDepartment;
    } catch (error) {
      console.log(error);
    }
  }
);
const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchDepartments (pending, fulfilled, and rejected)
      .addCase(fetchDepartments.pending, (state, action) => {
        state.fetchDepartmentsStatus = "loading";
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.fetchDepartmentsStatus = "succeeded";
        fundingMemberAdapter.removeAll(state);
        fundingMemberAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.fetchDepartmentsStatus = "failed";
        state.fetchDepartmentsError = action.error.message;
      })
      // Cases for status of updateMarketItem (pending, fulfilled, and rejected)
      .addCase(updateDepartmentDetail.pending, (state, action) => {
        state.updateDepartmentDetailStatus = "loading";
      })
      .addCase(updateDepartmentDetail.fulfilled, (state, action) => {
        state.updateDepartmentDetailStatus = "succeeded";
        fundingMemberAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateDepartmentDetail.rejected, (state, action) => {
        state.updateDepartmentDetailStatus = "failed";
        state.updateDepartmentDetailError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllDepartments,
  selectById: selectDepartmentById,
  selectIds: selectDepartmentIds,
} = fundingMemberAdapter.getSelectors((state) => state.department);

export default departmentSlice.reducer;
