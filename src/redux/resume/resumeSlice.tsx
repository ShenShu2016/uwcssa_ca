/*
 * @Author: Shen Shu
 * @Date: 2022-06-11 00:41:59
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 00:55:03
 * @FilePath: /uwcssa_ca/src/redux/resume/resumeSlice.tsx
 * @Description:
 *
 */

import { CreateResumeInput, UpdateResumeInput } from 'API';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { createResume, deleteResume, updateResume } from 'graphql/mutations';
import { getResume, listResumes } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

export type Resume = {
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
  uwcssaDepartmentResumesId?: string | null;
};

const resumeAdapter = createEntityAdapter<Resume>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = resumeAdapter.getInitialState({
  fetchResumeListStatus: 'idle',
  fetchResumeListError: null,
  fetchResumeStatus: 'idle',
  fetchResumeError: null,
  postResumeStatus: 'idle',
  postResumeError: null,
  postResumeImgStatus: 'idle',
  postResumeImgError: null,
  updateResumeDetailStatus: 'idle',
  updateResumeDetailError: null,
  removeResumeStatus: 'idle',
  removeResumeError: null,
});

export const fetchResumeList = createAsyncThunk(
  'resume/fetchResumeList',
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listResumes,
        authMode: isAuth ? undefined : 'AWS_IAM',
      });

      return result.data.listResumes.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchResume = createAsyncThunk(
  'resume/fetchResume',
  async (
    {
      resumeId,
      isAuth,
    }: {
      resumeId: string;
      isAuth: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getResume,
        variables: { id: resumeId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getResume === null) {
        return { id: resumeId, description: 'not-found' };
      }
      return result.data.getResume;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postResume = createAsyncThunk(
  'resume/postResume',
  async (
    {
      createResumeInput,
    }: {
      createResumeInput: CreateResumeInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(createResumeInput).forEach((key) =>
      createResumeInput[key] === null || createResumeInput[key] === ''
        ? delete createResumeInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createResume, {
          input: createResumeInput,
        }),
      );
      return result.data.createResume;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateResumeDetail = createAsyncThunk(
  'resume/updateResumeDetail',
  async (
    {
      updateResumeInput,
    }: {
      updateResumeInput: UpdateResumeInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(updateResumeInput).forEach((key) =>
      updateResumeInput[key] === null || updateResumeInput[key] === ''
        ? delete updateResumeInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateResume, {
          input: updateResumeInput,
        }),
      );
      return result.data.updateResume;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const removeResume = createAsyncThunk(
  'resume/removeResume',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteResume, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteResume.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Fetch ResumeList
      .addCase(fetchResumeList.pending, (state) => {
        state.fetchResumeListStatus = 'loading';
      })
      .addCase(fetchResumeList.fulfilled, (state, action) => {
        state.fetchResumeListStatus = 'succeed';
        resumeAdapter.upsertMany(state, action.payload);
      })

      .addCase(fetchResumeList.rejected, (state, action) => {
        state.fetchResumeListStatus = 'failed';
        state.fetchResumeListError = action.payload;
      })
      // Fetch Resume
      .addCase(fetchResume.pending, (state) => {
        state.fetchResumeStatus = 'loading';
      })
      .addCase(fetchResume.fulfilled, (state, action) => {
        state.fetchResumeStatus = 'succeed';
        resumeAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchResume.rejected, (state, action) => {
        state.fetchResumeStatus = 'failed';
        state.fetchResumeError = action.payload;
      })
      // Post Resume
      .addCase(postResume.pending, (state) => {
        state.postResumeStatus = 'loading';
      })
      .addCase(postResume.fulfilled, (state, action) => {
        state.postResumeStatus = 'succeed';

        resumeAdapter.addOne(state, action.payload);
      })
      .addCase(postResume.rejected, (state, action) => {
        state.postResumeStatus = 'failed';
        state.postResumeError = action.payload;
      })
      // Update ResumeDetail
      .addCase(updateResumeDetail.pending, (state) => {
        state.updateResumeDetailStatus = 'loading';
      })
      .addCase(updateResumeDetail.fulfilled, (state, action) => {
        state.updateResumeDetailStatus = 'succeed';
        resumeAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateResumeDetail.rejected, (state, action) => {
        state.updateResumeDetailStatus = 'failed';
        state.updateResumeDetailError = action.payload;
      })
      // Remove Resume
      .addCase(removeResume.pending, (state) => {
        state.removeResumeStatus = 'loading';
      })
      .addCase(removeResume.fulfilled, (state, action) => {
        state.removeResumeStatus = 'succeed';
        resumeAdapter.removeOne(state, action.payload);
      })
      .addCase(removeResume.rejected, (state, action) => {
        state.removeResumeStatus = 'failed';
        state.removeResumeError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllResumes,
  selectById: selectResumeById,
  selectIds: selectResumeIds,
} = resumeAdapter.getSelectors((state: RootState) => state.resume);

export default resumeSlice.reducer;
