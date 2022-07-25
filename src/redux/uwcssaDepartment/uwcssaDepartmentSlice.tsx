/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 22:41:37
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-10 20:09:46
 * @FilePath: /uwcssa_ca/src/redux/uwcssaDepartment/uwcssaDepartmentSlice.tsx
 * @Description:
 * import uwcssaDepartmentReducer from './uwcssaDepartment/uwcssaDepartmentSlice';
 * uwcssaDepartment: uwcssaDepartmentReducer,
 */

import { CreateUwcssaDepartmentInput, UpdateUwcssaDepartmentInput } from "API";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createUwcssaDepartment,
  deleteUwcssaDepartment,
  updateUwcssaDepartment,
} from "graphql/mutations";
import { getUwcssaDepartment, listUwcssaDepartments } from "graphql/queries";

import API from "@aws-amplify/api";
import { RootState } from "redux/store";
import { graphqlOperation } from "@aws-amplify/api-graphql";

export type UwcssaDepartment = {
  id: string;
  introduction?: string | null;
  email?: string | null;
  leader?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner: string;
};

const uwcssaDepartmentAdapter = createEntityAdapter<UwcssaDepartment>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = uwcssaDepartmentAdapter.getInitialState({
  fetchUwcssaDepartmentListStatus: "idle",
  fetchUwcssaDepartmentListError: null,
  fetchUwcssaDepartmentStatus: "idle",
  fetchUwcssaDepartmentError: null,
  postUwcssaDepartmentStatus: "idle",
  postUwcssaDepartmentError: null,
  postUwcssaDepartmentImgStatus: "idle",
  postUwcssaDepartmentImgError: null,
  updateUwcssaDepartmentDetailStatus: "idle",
  updateUwcssaDepartmentDetailError: null,
  removeUwcssaDepartmentStatus: "idle",
  removeUwcssaDepartmentError: null,
});

export const fetchUwcssaDepartmentList = createAsyncThunk(
  "uwcssaDepartment/fetchUwcssaDepartmentList",
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listUwcssaDepartments,
        authMode: isAuth ? undefined : "AWS_IAM",
      });

      return result.data.listUwcssaDepartments.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchUwcssaDepartment = createAsyncThunk(
  "uwcssaDepartment/fetchUwcssaDepartment",
  async (
    {
      uwcssaDepartmentId,
      isAuth,
    }: {
      uwcssaDepartmentId: string;
      isAuth: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getUwcssaDepartment,
        variables: { id: uwcssaDepartmentId },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      if (result.data.getUwcssaDepartment === null) {
        return { id: uwcssaDepartmentId, description: "not-found" };
      }
      return result.data.getUwcssaDepartment;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postUwcssaDepartment = createAsyncThunk(
  "uwcssaDepartment/postUwcssaDepartment",
  async (
    {
      createUwcssaDepartmentInput,
    }: {
      createUwcssaDepartmentInput: CreateUwcssaDepartmentInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(createUwcssaDepartmentInput).forEach((key) =>
      createUwcssaDepartmentInput[key] === null ||
      createUwcssaDepartmentInput[key] === ""
        ? delete createUwcssaDepartmentInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createUwcssaDepartment, {
          input: createUwcssaDepartmentInput,
        }),
      );
      return result.data.createUwcssaDepartment;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateUwcssaDepartmentDetail = createAsyncThunk(
  "uwcssaDepartment/updateUwcssaDepartmentDetail",
  async (
    {
      updateUwcssaDepartmentInput,
    }: {
      updateUwcssaDepartmentInput: UpdateUwcssaDepartmentInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(updateUwcssaDepartmentInput).forEach((key) =>
      updateUwcssaDepartmentInput[key] === null ||
      updateUwcssaDepartmentInput[key] === ""
        ? delete updateUwcssaDepartmentInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateUwcssaDepartment, {
          input: updateUwcssaDepartmentInput,
        }),
      );
      return result.data.updateUwcssaDepartment;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const removeUwcssaDepartment = createAsyncThunk(
  "uwcssaDepartment/removeUwcssaDepartment",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteUwcssaDepartment, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteUwcssaDepartment.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const uwcssaDepartmentSlice = createSlice({
  name: "uwcssaDepartment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Fetch UwcssaDepartmentList
      .addCase(fetchUwcssaDepartmentList.pending, (state) => {
        state.fetchUwcssaDepartmentListStatus = "loading";
      })
      .addCase(fetchUwcssaDepartmentList.fulfilled, (state, action) => {
        state.fetchUwcssaDepartmentListStatus = "succeed";
        uwcssaDepartmentAdapter.upsertMany(state, action.payload);
      })

      .addCase(fetchUwcssaDepartmentList.rejected, (state, action) => {
        state.fetchUwcssaDepartmentListStatus = "failed";
        state.fetchUwcssaDepartmentListError = action.payload;
      })
      // Fetch UwcssaDepartment
      .addCase(fetchUwcssaDepartment.pending, (state) => {
        state.fetchUwcssaDepartmentStatus = "loading";
      })
      .addCase(fetchUwcssaDepartment.fulfilled, (state, action) => {
        state.fetchUwcssaDepartmentStatus = "succeed";
        uwcssaDepartmentAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchUwcssaDepartment.rejected, (state, action) => {
        state.fetchUwcssaDepartmentStatus = "failed";
        state.fetchUwcssaDepartmentError = action.payload;
      })
      // Post UwcssaDepartment
      .addCase(postUwcssaDepartment.pending, (state) => {
        state.postUwcssaDepartmentStatus = "loading";
      })
      .addCase(postUwcssaDepartment.fulfilled, (state, action) => {
        state.postUwcssaDepartmentStatus = "succeed";

        uwcssaDepartmentAdapter.addOne(state, action.payload);
      })
      .addCase(postUwcssaDepartment.rejected, (state, action) => {
        state.postUwcssaDepartmentStatus = "failed";
        state.postUwcssaDepartmentError = action.payload;
      })
      // Update UwcssaDepartmentDetail
      .addCase(updateUwcssaDepartmentDetail.pending, (state) => {
        state.updateUwcssaDepartmentDetailStatus = "loading";
      })
      .addCase(updateUwcssaDepartmentDetail.fulfilled, (state, action) => {
        state.updateUwcssaDepartmentDetailStatus = "succeed";
        uwcssaDepartmentAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateUwcssaDepartmentDetail.rejected, (state, action) => {
        state.updateUwcssaDepartmentDetailStatus = "failed";
        state.updateUwcssaDepartmentDetailError = action.payload;
      })
      // Remove UwcssaDepartment
      .addCase(removeUwcssaDepartment.pending, (state) => {
        state.removeUwcssaDepartmentStatus = "loading";
      })
      .addCase(removeUwcssaDepartment.fulfilled, (state, action) => {
        state.removeUwcssaDepartmentStatus = "succeed";
        uwcssaDepartmentAdapter.removeOne(state, action.payload);
      })
      .addCase(removeUwcssaDepartment.rejected, (state, action) => {
        state.removeUwcssaDepartmentStatus = "failed";
        state.removeUwcssaDepartmentError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllUwcssaDepartments,
  selectById: selectUwcssaDepartmentById,
  selectIds: selectUwcssaDepartmentIds,
} = uwcssaDepartmentAdapter.getSelectors(
  (state: RootState) => state.uwcssaDepartment,
);

export default uwcssaDepartmentSlice.reducer;
