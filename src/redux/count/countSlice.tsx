/*
 * @Author: Shen Shu
 * @Date: 2022-06-07 22:23:59
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 01:38:54
 * @FilePath: /uwcssa_ca/src/redux/count/countSlice.tsx
 * @Description:
 *
 */

import { CreateCountInput, UpdateCountInput } from 'API';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { createCount, deleteCount, updateCount } from 'graphql/mutations';
import { getCount, listCounts } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

export type Count = {
  id?: string;
  count?: number | null;
  commentCount?: number | null;
  like?: number | null;
  article?: any | null;
  event?: any | null;
  comment?: any | null;
  targetTable?: string;
  createdAt?: string;
  updatedAt?: string;
  owner?: string;
  countArticleId?: string | null;
  countEventId?: string | null;
  countCommentId?: string | null;
};

const countAdapter = createEntityAdapter<Count>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = countAdapter.getInitialState({
  fetchCountListStatus: 'idle',
  fetchCountListError: null,
  fetchCountStatus: 'idle',
  fetchCountError: null,
  postCountStatus: 'idle',
  postCountError: null,
  postCountImgStatus: 'idle',
  postCountImgError: null,
  updateCountDetailStatus: 'idle',
  updateCountDetailError: null,
  removeCountStatus: 'idle',
  removeCountError: null,
});

export const fetchCountList = createAsyncThunk(
  'count/fetchCountList',
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listCounts,
        // variables: {
        //   active: 'T',
        //   sortDirection: 'DESC',
        // },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });

      return result.data.listCounts.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchCount = createAsyncThunk(
  'count/fetchCount',
  async (
    { countId, isAuth }: { countId: string; isAuth: boolean },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getCount,
        variables: { id: countId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getCount === null) {
        return { id: countId, description: 'not-found' };
      }
      return result.data.getCount;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postCount = createAsyncThunk(
  'count/postCount',
  async (
    { createCountInput }: { createCountInput: CreateCountInput },
    { rejectWithValue },
  ) => {
    Object.keys(createCountInput).forEach((key) =>
      createCountInput[key] === null || createCountInput[key] === ''
        ? delete createCountInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createCount, {
          input: createCountInput,
        }),
      );
      return result.data.createCount;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateCountDetail = createAsyncThunk(
  'count/updateCountDetail',
  async (
    { updateCountInput }: { updateCountInput: UpdateCountInput },
    { rejectWithValue },
  ) => {
    Object.keys(updateCountInput).forEach((key) =>
      updateCountInput[key] === null || updateCountInput[key] === ''
        ? delete updateCountInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateCount, {
          input: updateCountInput,
        }),
      );
      return result.data.updateCount;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const removeCount = createAsyncThunk(
  'count/removeCount',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteCount, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteCount.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchCountList (pending, fulfilled, and rejected)
      .addCase(fetchCountList.pending, (state) => {
        state.fetchCountListStatus = 'loading';
      })
      .addCase(fetchCountList.fulfilled, (state, action) => {
        state.fetchCountListStatus = 'succeed';
        //countAdapter.removeAll(state);
        countAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchCountList.rejected, (state, action) => {
        state.fetchCountListStatus = 'failed';
        state.fetchCountListError = action.payload;
      })
      // Cases for status of selectedCount (pending, fulfilled, and rejected)
      .addCase(fetchCount.pending, (state) => {
        state.fetchCountStatus = 'loading';
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.fetchCountStatus = 'succeed';
        countAdapter.upsertOne(state, action.payload);
        //console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchCount.rejected, (state, action) => {
        state.fetchCountStatus = 'failed';
        state.fetchCountError = action.payload;
      })
      // Cases for status of postCount (pending, fulfilled, and rejected)
      .addCase(postCount.pending, (state) => {
        state.postCountStatus = 'loading';
      })
      .addCase(postCount.fulfilled, (state, action) => {
        state.postCountStatus = 'succeed';
        // state.counts.unshift(action.payload.data.createCount);
        countAdapter.addOne(state, action.payload);
        // state.postCountStatus = "idle";
      })
      .addCase(postCount.rejected, (state, action) => {
        state.postCountStatus = 'failed';
        state.postCountError = action.payload;
      })
      // Cases for status of updateCount (pending, fulfilled, and rejected)
      .addCase(updateCountDetail.pending, (state) => {
        state.updateCountDetailStatus = 'loading';
      })
      .addCase(updateCountDetail.fulfilled, (state, action) => {
        state.updateCountDetailStatus = 'succeed';
        countAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateCountDetail.rejected, (state, action) => {
        state.updateCountDetailStatus = 'failed';
        state.updateCountDetailError = action.payload;
      })
      .addCase(removeCount.pending, (state) => {
        state.removeCountStatus = 'loading';
      })
      .addCase(removeCount.fulfilled, (state, action) => {
        state.removeCountStatus = 'succeed';
        console.log(action.payload);
        //state.uwcssaMembers.unshift(action.payload.data.createUwcssaMember);
        countAdapter.removeOne(state, action.payload);
        // state.updateUwcssaMemberStatus = "idle";
      })
      .addCase(removeCount.rejected, (state, action) => {
        state.removeCountStatus = 'failed';
        state.removeCountError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllCounts,
  selectById: selectCountById,
  selectIds: selectCountIds,
} = countAdapter.getSelectors((state: RootState) => state.count);

export default countSlice.reducer;
