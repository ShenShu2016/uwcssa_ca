/*
 * @Author: Shen Shu
 * @Date: 2022-06-11 00:41:59
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 00:45:37
 * @FilePath: /uwcssa_ca/src/redux/uwcssaCareer/uwcssaCareerSlice.tsx
 * @Description:
 *
 */

import { CreateUwcssaCareerInput, UpdateUwcssaCareerInput } from 'API';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {
  createUwcssaCareer,
  deleteUwcssaCareer,
  updateUwcssaCareer,
} from 'graphql/mutations';
import { getUwcssaCareer, listUwcssaCareers } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

export type UwcssaCareer = {
  id: string;
  title?: string | null;
  whoWeAre?: string | null;
  whatWeAreLookingFor?: Array<string | null> | null;
  requirements?: Array<string | null> | null;
  whyToApply?: string | null;
  location?: string | null;
  employmentType?: any | null;
  uwcssaDepartment?: any | null;
  resume?: any | null;
  startDate?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string;
  user?: any | null;
  uwcssaDepartmentUwcssaCareersId?: string | null;
};

const uwcssaCareerAdapter = createEntityAdapter<UwcssaCareer>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = uwcssaCareerAdapter.getInitialState({
  fetchUwcssaCareerListStatus: 'idle',
  fetchUwcssaCareerListError: null,
  fetchUwcssaCareerStatus: 'idle',
  fetchUwcssaCareerError: null,
  postUwcssaCareerStatus: 'idle',
  postUwcssaCareerError: null,
  postUwcssaCareerImgStatus: 'idle',
  postUwcssaCareerImgError: null,
  updateUwcssaCareerDetailStatus: 'idle',
  updateUwcssaCareerDetailError: null,
  removeUwcssaCareerStatus: 'idle',
  removeUwcssaCareerError: null,
});

export const fetchUwcssaCareerList = createAsyncThunk(
  'uwcssaCareer/fetchUwcssaCareerList',
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listUwcssaCareers,
        authMode: isAuth ? undefined : 'AWS_IAM',
      });

      return result.data.listUwcssaCareers.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchUwcssaCareer = createAsyncThunk(
  'uwcssaCareer/fetchUwcssaCareer',
  async (
    {
      uwcssaCareerId,
      isAuth,
    }: {
      uwcssaCareerId: string;
      isAuth: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getUwcssaCareer,
        variables: { id: uwcssaCareerId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getUwcssaCareer === null) {
        return { id: uwcssaCareerId, description: 'not-found' };
      }
      return result.data.getUwcssaCareer;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postUwcssaCareer = createAsyncThunk(
  'uwcssaCareer/postUwcssaCareer',
  async (
    {
      createUwcssaCareerInput,
    }: {
      createUwcssaCareerInput: CreateUwcssaCareerInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(createUwcssaCareerInput).forEach((key) =>
      createUwcssaCareerInput[key] === null ||
      createUwcssaCareerInput[key] === ''
        ? delete createUwcssaCareerInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createUwcssaCareer, {
          input: createUwcssaCareerInput,
        }),
      );
      return result.data.createUwcssaCareer;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateUwcssaCareerDetail = createAsyncThunk(
  'uwcssaCareer/updateUwcssaCareerDetail',
  async (
    {
      updateUwcssaCareerInput,
    }: {
      updateUwcssaCareerInput: UpdateUwcssaCareerInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(updateUwcssaCareerInput).forEach((key) =>
      updateUwcssaCareerInput[key] === null ||
      updateUwcssaCareerInput[key] === ''
        ? delete updateUwcssaCareerInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateUwcssaCareer, {
          input: updateUwcssaCareerInput,
        }),
      );
      return result.data.updateUwcssaCareer;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const removeUwcssaCareer = createAsyncThunk(
  'uwcssaCareer/removeUwcssaCareer',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteUwcssaCareer, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteUwcssaCareer.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const uwcssaCareerSlice = createSlice({
  name: 'uwcssaCareer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Fetch UwcssaCareerList
      .addCase(fetchUwcssaCareerList.pending, (state) => {
        state.fetchUwcssaCareerListStatus = 'loading';
      })
      .addCase(fetchUwcssaCareerList.fulfilled, (state, action) => {
        state.fetchUwcssaCareerListStatus = 'succeed';
        uwcssaCareerAdapter.upsertMany(state, action.payload);
      })

      .addCase(fetchUwcssaCareerList.rejected, (state, action) => {
        state.fetchUwcssaCareerListStatus = 'failed';
        state.fetchUwcssaCareerListError = action.payload;
      })
      // Fetch UwcssaCareer
      .addCase(fetchUwcssaCareer.pending, (state) => {
        state.fetchUwcssaCareerStatus = 'loading';
      })
      .addCase(fetchUwcssaCareer.fulfilled, (state, action) => {
        state.fetchUwcssaCareerStatus = 'succeed';
        uwcssaCareerAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchUwcssaCareer.rejected, (state, action) => {
        state.fetchUwcssaCareerStatus = 'failed';
        state.fetchUwcssaCareerError = action.payload;
      })
      // Post UwcssaCareer
      .addCase(postUwcssaCareer.pending, (state) => {
        state.postUwcssaCareerStatus = 'loading';
      })
      .addCase(postUwcssaCareer.fulfilled, (state, action) => {
        state.postUwcssaCareerStatus = 'succeed';

        uwcssaCareerAdapter.addOne(state, action.payload);
      })
      .addCase(postUwcssaCareer.rejected, (state, action) => {
        state.postUwcssaCareerStatus = 'failed';
        state.postUwcssaCareerError = action.payload;
      })
      // Update UwcssaCareerDetail
      .addCase(updateUwcssaCareerDetail.pending, (state) => {
        state.updateUwcssaCareerDetailStatus = 'loading';
      })
      .addCase(updateUwcssaCareerDetail.fulfilled, (state, action) => {
        state.updateUwcssaCareerDetailStatus = 'succeed';
        uwcssaCareerAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateUwcssaCareerDetail.rejected, (state, action) => {
        state.updateUwcssaCareerDetailStatus = 'failed';
        state.updateUwcssaCareerDetailError = action.payload;
      })
      // Remove UwcssaCareer
      .addCase(removeUwcssaCareer.pending, (state) => {
        state.removeUwcssaCareerStatus = 'loading';
      })
      .addCase(removeUwcssaCareer.fulfilled, (state, action) => {
        state.removeUwcssaCareerStatus = 'succeed';
        uwcssaCareerAdapter.removeOne(state, action.payload);
      })
      .addCase(removeUwcssaCareer.rejected, (state, action) => {
        state.removeUwcssaCareerStatus = 'failed';
        state.removeUwcssaCareerError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllUwcssaCareers,
  selectById: selectUwcssaCareerById,
  selectIds: selectUwcssaCareerIds,
} = uwcssaCareerAdapter.getSelectors((state: RootState) => state.uwcssaCareer);

export default uwcssaCareerSlice.reducer;
