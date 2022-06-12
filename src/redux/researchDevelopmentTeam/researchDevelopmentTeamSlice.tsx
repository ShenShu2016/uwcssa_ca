/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 22:42:19
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 01:28:05
 * @FilePath: /uwcssa_ca/src/redux/researchDevelopmentTeam/researchDevelopmentTeamSlice.tsx
 * @Description:
 * import researchDevelopmentTeamReducer from './researchDevelopmentTeam/researchDevelopmentTeamSlice';
 * researchDevelopmentTeam: researchDevelopmentTeamReducer,
 */

import {
  CreateResearchDevelopmentTeamInput,
  UpdateResearchDevelopmentTeamInput,
} from 'API';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {
  createResearchDevelopmentTeam,
  deleteResearchDevelopmentTeam,
  updateResearchDevelopmentTeam,
} from 'graphql/mutations';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { UserImage } from 'redux/userImage/userImageSlice';
import { UserProfile } from 'redux/userProfile/userProfileSlice';
import { getResearchDevelopmentTeam } from 'graphql/queries';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { listResearchDevelopmentTeams } from './custom_q_m_s';

export type ResearchDevelopmentTeam = {
  id: string;
  name?: string | null;
  title?: string | null;
  subTitle?: string | null;
  content?: string | null;
  imgURL?: UserImage | null;
  email?: string | null;
  linkedIn?: string | null;
  website?: string | null;
  github?: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string;
  user?: UserProfile | null;
  researchDevelopmentTeamImgURLId?: string | null;
};

const researchDevelopmentTeamAdapter =
  createEntityAdapter<ResearchDevelopmentTeam>({
    // selectId: (item) => item.id,
    sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
  });

const initialState = researchDevelopmentTeamAdapter.getInitialState({
  fetchResearchDevelopmentTeamListStatus: 'idle',
  fetchResearchDevelopmentTeamListError: null,
  fetchResearchDevelopmentTeamStatus: 'idle',
  fetchResearchDevelopmentTeamError: null,
  postResearchDevelopmentTeamStatus: 'idle',
  postResearchDevelopmentTeamError: null,
  postResearchDevelopmentTeamImgStatus: 'idle',
  postResearchDevelopmentTeamImgError: null,
  updateResearchDevelopmentTeamDetailStatus: 'idle',
  updateResearchDevelopmentTeamDetailError: null,
  removeResearchDevelopmentTeamStatus: 'idle',
  removeResearchDevelopmentTeamError: null,
});

export const fetchResearchDevelopmentTeamList = createAsyncThunk(
  'researchDevelopmentTeam/fetchResearchDevelopmentTeamList',
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listResearchDevelopmentTeams,
        // variables: {
        //   active: 'T',
        //   sortDirection: 'DESC',
        // },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      return result.data.listResearchDevelopmentTeams.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchResearchDevelopmentTeam = createAsyncThunk(
  'researchDevelopmentTeam/fetchResearchDevelopmentTeam',
  async (
    {
      researchDevelopmentTeamId,
      isAuth,
    }: {
      researchDevelopmentTeamId: string;
      isAuth: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getResearchDevelopmentTeam,
        variables: { id: researchDevelopmentTeamId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getResearchDevelopmentTeam === null) {
        return { id: researchDevelopmentTeamId, description: 'not-found' };
      }
      return result.data.getResearchDevelopmentTeam;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postResearchDevelopmentTeam = createAsyncThunk(
  'researchDevelopmentTeam/postResearchDevelopmentTeam',
  async (
    {
      createResearchDevelopmentTeamInput,
    }: {
      createResearchDevelopmentTeamInput: CreateResearchDevelopmentTeamInput;
    },
    { rejectWithValue },
  ) => {
    try {
      Object.keys(createResearchDevelopmentTeamInput).forEach((key) =>
        createResearchDevelopmentTeamInput[key] === null ||
        createResearchDevelopmentTeamInput[key] === ''
          ? delete createResearchDevelopmentTeamInput[key]
          : {},
      ); // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createResearchDevelopmentTeam, {
          input: createResearchDevelopmentTeamInput,
        }),
      );
      return result.data.createResearchDevelopmentTeam;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateResearchDevelopmentTeamDetail = createAsyncThunk(
  'researchDevelopmentTeam/updateResearchDevelopmentTeamDetail',
  async (
    {
      updateResearchDevelopmentTeamInput,
    }: {
      updateResearchDevelopmentTeamInput: UpdateResearchDevelopmentTeamInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(updateResearchDevelopmentTeamInput).forEach((key) =>
      updateResearchDevelopmentTeamInput[key] === null ||
      updateResearchDevelopmentTeamInput[key] === ''
        ? delete updateResearchDevelopmentTeamInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateResearchDevelopmentTeam, {
          input: updateResearchDevelopmentTeamInput,
        }),
      );
      return result.data.updateResearchDevelopmentTeam;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const removeResearchDevelopmentTeam = createAsyncThunk(
  'researchDevelopmentTeam/removeResearchDevelopmentTeam',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteResearchDevelopmentTeam, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteResearchDevelopmentTeam.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const researchDevelopmentTeamSlice = createSlice({
  name: 'researchDevelopmentTeam',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchResearchDevelopmentTeamList (pending, fulfilled, and rejected)
      .addCase(fetchResearchDevelopmentTeamList.pending, (state) => {
        state.fetchResearchDevelopmentTeamListStatus = 'loading';
      })
      .addCase(fetchResearchDevelopmentTeamList.fulfilled, (state, action) => {
        state.fetchResearchDevelopmentTeamListStatus = 'succeed';
        //researchDevelopmentTeamAdapter.removeAll(state);
        researchDevelopmentTeamAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchResearchDevelopmentTeamList.rejected, (state, action) => {
        state.fetchResearchDevelopmentTeamListStatus = 'failed';
        state.fetchResearchDevelopmentTeamListError = action.payload;
      })
      // Cases for status of selectedResearchDevelopmentTeam (pending, fulfilled, and rejected)
      .addCase(fetchResearchDevelopmentTeam.pending, (state) => {
        state.fetchResearchDevelopmentTeamStatus = 'loading';
      })
      .addCase(fetchResearchDevelopmentTeam.fulfilled, (state, action) => {
        state.fetchResearchDevelopmentTeamStatus = 'succeed';
        researchDevelopmentTeamAdapter.upsertOne(state, action.payload);
        //console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchResearchDevelopmentTeam.rejected, (state, action) => {
        state.fetchResearchDevelopmentTeamStatus = 'failed';
        state.fetchResearchDevelopmentTeamError = action.payload;
      })
      // Cases for status of postResearchDevelopmentTeam (pending, fulfilled, and rejected)
      .addCase(postResearchDevelopmentTeam.pending, (state) => {
        state.postResearchDevelopmentTeamStatus = 'loading';
      })
      .addCase(postResearchDevelopmentTeam.fulfilled, (state, action) => {
        state.postResearchDevelopmentTeamStatus = 'succeed';
        // state.researchDevelopmentTeams.unshift(action.payload.data.createResearchDevelopmentTeam);
        researchDevelopmentTeamAdapter.addOne(state, action.payload);
        // state.postResearchDevelopmentTeamStatus = "idle";
      })
      .addCase(postResearchDevelopmentTeam.rejected, (state, action) => {
        state.postResearchDevelopmentTeamStatus = 'failed';
        state.postResearchDevelopmentTeamError = action.payload;
      })
      // Cases for status of updateResearchDevelopmentTeam (pending, fulfilled, and rejected)
      .addCase(updateResearchDevelopmentTeamDetail.pending, (state) => {
        state.updateResearchDevelopmentTeamDetailStatus = 'loading';
      })
      .addCase(
        updateResearchDevelopmentTeamDetail.fulfilled,
        (state, action) => {
          state.updateResearchDevelopmentTeamDetailStatus = 'succeed';
          researchDevelopmentTeamAdapter.upsertOne(state, action.payload); //!! 這裏有問題，比如説我update了，頭像會沒
        },
      )
      .addCase(
        updateResearchDevelopmentTeamDetail.rejected,
        (state, action) => {
          state.updateResearchDevelopmentTeamDetailStatus = 'failed';
          state.updateResearchDevelopmentTeamDetailError = action.payload;
        },
      )
      .addCase(removeResearchDevelopmentTeam.pending, (state) => {
        state.removeResearchDevelopmentTeamStatus = 'loading';
      })
      .addCase(removeResearchDevelopmentTeam.fulfilled, (state, action) => {
        state.removeResearchDevelopmentTeamStatus = 'succeed';
        console.log(action.payload);
        //state.uwcssaMembers.unshift(action.payload.data.createUwcssaMember);
        researchDevelopmentTeamAdapter.removeOne(state, action.payload);
        // state.updateUwcssaMemberStatus = "idle";
      })
      .addCase(removeResearchDevelopmentTeam.rejected, (state, action) => {
        state.removeResearchDevelopmentTeamStatus = 'failed';
        state.removeResearchDevelopmentTeamError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllResearchDevelopmentTeams,
  selectById: selectResearchDevelopmentTeamById,
  selectIds: selectResearchDevelopmentTeamIds,
} = researchDevelopmentTeamAdapter.getSelectors(
  (state: RootState) => state.researchDevelopmentTeam,
);

export default researchDevelopmentTeamSlice.reducer;
