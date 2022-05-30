/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 22:42:19
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 22:52:44
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
  updateResearchDevelopmentTeam,
} from 'graphql/mutations';
import {
  getResearchDevelopmentTeam,
  listResearchDevelopmentTeams,
} from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

export type ResearchDevelopmentTeam = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  owner: string;
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
});

export const fetchResearchDevelopmentTeamList = createAsyncThunk(
  'researchDevelopmentTeam/fetchResearchDevelopmentTeamList',
  async ({ isAuth }: { isAuth: boolean }) => {
    try {
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
    }
  },
);

export const fetchResearchDevelopmentTeam = createAsyncThunk(
  'researchDevelopmentTeam/fetchResearchDevelopmentTeam',
  async ({
    researchDevelopmentTeamId,
    isAuth,
  }: {
    researchDevelopmentTeamId: string;
    isAuth: boolean;
  }) => {
    try {
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
    }
  },
);

export const postResearchDevelopmentTeam = createAsyncThunk(
  'researchDevelopmentTeam/postResearchDevelopmentTeam',
  async ({
    createResearchDevelopmentTeamInput,
  }: {
    createResearchDevelopmentTeamInput: CreateResearchDevelopmentTeamInput;
  }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(createResearchDevelopmentTeam, {
          input: createResearchDevelopmentTeamInput,
        }),
      );
      return result.data.createResearchDevelopmentTeam;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updateResearchDevelopmentTeamDetail = createAsyncThunk(
  'researchDevelopmentTeam/updateResearchDevelopmentTeamDetail',
  async ({
    updateResearchDevelopmentTeamInput,
  }: {
    updateResearchDevelopmentTeamInput: UpdateResearchDevelopmentTeamInput;
  }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(updateResearchDevelopmentTeam, {
          input: updateResearchDevelopmentTeamInput,
        }),
      );
      return result.data.updateResearchDevelopmentTeam;
    } catch (error) {
      console.log(error);
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
        state.fetchResearchDevelopmentTeamError = action.error.message;
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
        state.fetchResearchDevelopmentTeamError = action.error.message;
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
        state.postResearchDevelopmentTeamError = action.error.message;
      })
      // Cases for status of updateResearchDevelopmentTeam (pending, fulfilled, and rejected)
      .addCase(updateResearchDevelopmentTeamDetail.pending, (state) => {
        state.updateResearchDevelopmentTeamDetailStatus = 'loading';
      })
      .addCase(updateResearchDevelopmentTeamDetail.fulfilled, (state) => {
        state.updateResearchDevelopmentTeamDetailStatus = 'succeed';
        //state.researchDevelopmentTeams.unshift(action.payload.data.createResearchDevelopmentTeam);
        //researchDevelopmentTeamAdapter.upsertOne(state, action.payload);
        // state.updateResearchDevelopmentTeamStatus = "idle";
      })
      .addCase(
        updateResearchDevelopmentTeamDetail.rejected,
        (state, action) => {
          state.updateResearchDevelopmentTeamDetailStatus = 'failed';
          state.updateResearchDevelopmentTeamDetailError = action.error.message;
        },
      );
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
