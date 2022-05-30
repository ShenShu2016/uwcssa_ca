/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 22:41:37
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 22:50:42
 * @FilePath: /uwcssa_ca/src/redux/uwcssaDepartment/uwcssaDepartmentSlice.tsx
 * @Description:
 * import uwcssaDepartmentReducer from './uwcssaDepartment/uwcssaDepartmentSlice';
 * uwcssaDepartment: uwcssaDepartmentReducer,
 */

import { CreateUwcssaDepartmentInput, UpdateUwcssaDepartmentInput } from 'API';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {
  createUwcssaDepartment,
  updateUwcssaDepartment,
} from 'graphql/mutations';
import { getUwcssaDepartment, listUwcssaDepartments } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

export type UwcssaDepartment = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  owner: string;
};

const uwcssaDepartmentAdapter = createEntityAdapter<UwcssaDepartment>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = uwcssaDepartmentAdapter.getInitialState({
  fetchUwcssaDepartmentListStatus: 'idle',
  fetchUwcssaDepartmentListError: null,
  fetchUwcssaDepartmentStatus: 'idle',
  fetchUwcssaDepartmentError: null,
  postUwcssaDepartmentStatus: 'idle',
  postUwcssaDepartmentError: null,
  postUwcssaDepartmentImgStatus: 'idle',
  postUwcssaDepartmentImgError: null,
  updateUwcssaDepartmentDetailStatus: 'idle',
  updateUwcssaDepartmentDetailError: null,
});

export const fetchUwcssaDepartmentList = createAsyncThunk(
  'uwcssaDepartment/fetchUwcssaDepartmentList',
  async ({ isAuth }: { isAuth: boolean }) => {
    try {
      const result: any = await API.graphql({
        query: listUwcssaDepartments,
        // variables: {
        //   active: 'T',
        //   sortDirection: 'DESC',
        // },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      return result.data.listUwcssaDepartments.items;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchUwcssaDepartment = createAsyncThunk(
  'uwcssaDepartment/fetchUwcssaDepartment',
  async ({
    uwcssaDepartmentId,
    isAuth,
  }: {
    uwcssaDepartmentId: string;
    isAuth: boolean;
  }) => {
    try {
      const result: any = await API.graphql({
        query: getUwcssaDepartment,
        variables: { id: uwcssaDepartmentId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getUwcssaDepartment === null) {
        return { id: uwcssaDepartmentId, description: 'not-found' };
      }
      return result.data.getUwcssaDepartment;
    } catch (error) {
      console.log(error);
    }
  },
);

export const postUwcssaDepartment = createAsyncThunk(
  'uwcssaDepartment/postUwcssaDepartment',
  async ({
    createUwcssaDepartmentInput,
  }: {
    createUwcssaDepartmentInput: CreateUwcssaDepartmentInput;
  }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(createUwcssaDepartment, {
          input: createUwcssaDepartmentInput,
        }),
      );
      return result.data.createUwcssaDepartment;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updateUwcssaDepartmentDetail = createAsyncThunk(
  'uwcssaDepartment/updateUwcssaDepartmentDetail',
  async ({
    updateUwcssaDepartmentInput,
  }: {
    updateUwcssaDepartmentInput: UpdateUwcssaDepartmentInput;
  }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(updateUwcssaDepartment, {
          input: updateUwcssaDepartmentInput,
        }),
      );
      return result.data.updateUwcssaDepartment;
    } catch (error) {
      console.log(error);
    }
  },
);

const uwcssaDepartmentSlice = createSlice({
  name: 'uwcssaDepartment',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchUwcssaDepartmentList (pending, fulfilled, and rejected)
      .addCase(fetchUwcssaDepartmentList.pending, (state) => {
        state.fetchUwcssaDepartmentListStatus = 'loading';
      })
      .addCase(fetchUwcssaDepartmentList.fulfilled, (state, action) => {
        state.fetchUwcssaDepartmentListStatus = 'succeed';
        //uwcssaDepartmentAdapter.removeAll(state);
        uwcssaDepartmentAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUwcssaDepartmentList.rejected, (state, action) => {
        state.fetchUwcssaDepartmentListStatus = 'failed';
        state.fetchUwcssaDepartmentError = action.error.message;
      })
      // Cases for status of selectedUwcssaDepartment (pending, fulfilled, and rejected)
      .addCase(fetchUwcssaDepartment.pending, (state) => {
        state.fetchUwcssaDepartmentStatus = 'loading';
      })
      .addCase(fetchUwcssaDepartment.fulfilled, (state, action) => {
        state.fetchUwcssaDepartmentStatus = 'succeed';
        uwcssaDepartmentAdapter.upsertOne(state, action.payload);
        //console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchUwcssaDepartment.rejected, (state, action) => {
        state.fetchUwcssaDepartmentStatus = 'failed';
        state.fetchUwcssaDepartmentError = action.error.message;
      })
      // Cases for status of postUwcssaDepartment (pending, fulfilled, and rejected)
      .addCase(postUwcssaDepartment.pending, (state) => {
        state.postUwcssaDepartmentStatus = 'loading';
      })
      .addCase(postUwcssaDepartment.fulfilled, (state, action) => {
        state.postUwcssaDepartmentStatus = 'succeed';
        // state.uwcssaDepartments.unshift(action.payload.data.createUwcssaDepartment);
        uwcssaDepartmentAdapter.addOne(state, action.payload);
        // state.postUwcssaDepartmentStatus = "idle";
      })
      .addCase(postUwcssaDepartment.rejected, (state, action) => {
        state.postUwcssaDepartmentStatus = 'failed';
        state.postUwcssaDepartmentError = action.error.message;
      })
      // Cases for status of updateUwcssaDepartment (pending, fulfilled, and rejected)
      .addCase(updateUwcssaDepartmentDetail.pending, (state) => {
        state.updateUwcssaDepartmentDetailStatus = 'loading';
      })
      .addCase(updateUwcssaDepartmentDetail.fulfilled, (state) => {
        state.updateUwcssaDepartmentDetailStatus = 'succeed';
        //state.uwcssaDepartments.unshift(action.payload.data.createUwcssaDepartment);
        //uwcssaDepartmentAdapter.upsertOne(state, action.payload);
        // state.updateUwcssaDepartmentStatus = "idle";
      })
      .addCase(updateUwcssaDepartmentDetail.rejected, (state, action) => {
        state.updateUwcssaDepartmentDetailStatus = 'failed';
        state.updateUwcssaDepartmentDetailError = action.error.message;
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
