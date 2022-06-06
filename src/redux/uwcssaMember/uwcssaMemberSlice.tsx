/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 22:42:19
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 15:49:29
 * @FilePath: /uwcssa_ca/src/redux/uwcssaMember/uwcssaMemberSlice.tsx
 * @Description:
 * import uwcssaMemberReducer from './uwcssaMember/uwcssaMemberSlice';
 * uwcssaMember: uwcssaMemberReducer,
 */

import { CreateUwcssaMemberInput, UpdateUwcssaMemberInput } from 'API';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { createUwcssaMember, updateUwcssaMember } from 'graphql/mutations';
import { getUwcssaMember, listUwcssaMembers } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { UserImage } from 'redux/userImage/userImageSlice';
import { UserProfile } from 'redux/userProfile/userProfileSlice';
import { UwcssaDepartment } from 'redux/uwcssaDepartment/uwcssaDepartmentSlice';
import { graphqlOperation } from '@aws-amplify/api-graphql';

export type UwcssaMember = {
  id: string;
  name?: string | null;
  title?: string | null;
  subTitle?: string | null;
  content?: string | null;
  imgURL?: UserImage | null;
  email?: string | null;
  department?: UwcssaDepartment | null;
  linkedIn?: string | null;
  website?: string | null;
  github?: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string;
  user?: UserProfile | null;
  uwcssaDepartmentUwcssaMembersId?: string | null;
  uwcssaMemberImgURLId?: string | null;
};

const uwcssaMemberAdapter = createEntityAdapter<UwcssaMember>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = uwcssaMemberAdapter.getInitialState({
  fetchUwcssaMemberListStatus: 'idle',
  fetchUwcssaMemberListError: null,
  fetchUwcssaMemberStatus: 'idle',
  fetchUwcssaMemberError: null,
  postUwcssaMemberStatus: 'idle',
  postUwcssaMemberError: null,
  postUwcssaMemberImgStatus: 'idle',
  postUwcssaMemberImgError: null,
  updateUwcssaMemberDetailStatus: 'idle',
  updateUwcssaMemberDetailError: null,
});

export const fetchUwcssaMemberList = createAsyncThunk(
  'uwcssaMember/fetchUwcssaMemberList',
  async ({ isAuth }: { isAuth: boolean }) => {
    try {
      const result: any = await API.graphql({
        query: listUwcssaMembers,
        // variables: {
        //   active: 'T',
        //   sortDirection: 'DESC',
        // },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      return result.data.listUwcssaMembers.items;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchUwcssaMember = createAsyncThunk(
  'uwcssaMember/fetchUwcssaMember',
  async ({
    uwcssaMemberId,
    isAuth,
  }: {
    uwcssaMemberId: string;
    isAuth: boolean;
  }) => {
    try {
      const result: any = await API.graphql({
        query: getUwcssaMember,
        variables: { id: uwcssaMemberId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getUwcssaMember === null) {
        return { id: uwcssaMemberId, description: 'not-found' };
      }
      return result.data.getUwcssaMember;
    } catch (error) {
      console.log(error);
    }
  },
);

export const postUwcssaMember = createAsyncThunk(
  'uwcssaMember/postUwcssaMember',
  async ({
    createUwcssaMemberInput,
  }: {
    createUwcssaMemberInput: CreateUwcssaMemberInput;
  }) => {
    Object.keys(createUwcssaMemberInput).forEach((key) =>
      createUwcssaMemberInput[key] === null ||
      createUwcssaMemberInput[key] === ''
        ? delete createUwcssaMemberInput[key]
        : {},
    );
    try {
      const result: any = await API.graphql(
        graphqlOperation(createUwcssaMember, {
          input: createUwcssaMemberInput,
        }),
      );
      return result.data.createUwcssaMember;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updateUwcssaMemberDetail = createAsyncThunk(
  'uwcssaMember/updateUwcssaMemberDetail',
  async ({
    updateUwcssaMemberInput,
  }: {
    updateUwcssaMemberInput: UpdateUwcssaMemberInput;
  }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(updateUwcssaMember, {
          input: updateUwcssaMemberInput,
        }),
      );
      return result.data.updateUwcssaMember;
    } catch (error) {
      console.log(error);
    }
  },
);

const uwcssaMemberSlice = createSlice({
  name: 'uwcssaMember',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchUwcssaMemberList (pending, fulfilled, and rejected)
      .addCase(fetchUwcssaMemberList.pending, (state) => {
        state.fetchUwcssaMemberListStatus = 'loading';
      })
      .addCase(fetchUwcssaMemberList.fulfilled, (state, action) => {
        state.fetchUwcssaMemberListStatus = 'succeed';
        //uwcssaMemberAdapter.removeAll(state);
        uwcssaMemberAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUwcssaMemberList.rejected, (state, action) => {
        state.fetchUwcssaMemberListStatus = 'failed';
        state.fetchUwcssaMemberError = action.error.message;
      })
      // Cases for status of selectedUwcssaMember (pending, fulfilled, and rejected)
      .addCase(fetchUwcssaMember.pending, (state) => {
        state.fetchUwcssaMemberStatus = 'loading';
      })
      .addCase(fetchUwcssaMember.fulfilled, (state, action) => {
        state.fetchUwcssaMemberStatus = 'succeed';
        uwcssaMemberAdapter.upsertOne(state, action.payload);
        //console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchUwcssaMember.rejected, (state, action) => {
        state.fetchUwcssaMemberStatus = 'failed';
        state.fetchUwcssaMemberError = action.error.message;
      })
      // Cases for status of postUwcssaMember (pending, fulfilled, and rejected)
      .addCase(postUwcssaMember.pending, (state) => {
        state.postUwcssaMemberStatus = 'loading';
      })
      .addCase(postUwcssaMember.fulfilled, (state, action) => {
        state.postUwcssaMemberStatus = 'succeed';
        // state.uwcssaMembers.unshift(action.payload.data.createUwcssaMember);
        uwcssaMemberAdapter.addOne(state, action.payload);
        // state.postUwcssaMemberStatus = "idle";
      })
      .addCase(postUwcssaMember.rejected, (state, action) => {
        state.postUwcssaMemberStatus = 'failed';
        state.postUwcssaMemberError = action.error.message;
      })
      // Cases for status of updateUwcssaMember (pending, fulfilled, and rejected)
      .addCase(updateUwcssaMemberDetail.pending, (state) => {
        state.updateUwcssaMemberDetailStatus = 'loading';
      })
      .addCase(updateUwcssaMemberDetail.fulfilled, (state) => {
        state.updateUwcssaMemberDetailStatus = 'succeed';
        //state.uwcssaMembers.unshift(action.payload.data.createUwcssaMember);
        //uwcssaMemberAdapter.upsertOne(state, action.payload);
        // state.updateUwcssaMemberStatus = "idle";
      })
      .addCase(updateUwcssaMemberDetail.rejected, (state, action) => {
        state.updateUwcssaMemberDetailStatus = 'failed';
        state.updateUwcssaMemberDetailError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllUwcssaMembers,
  selectById: selectUwcssaMemberById,
  selectIds: selectUwcssaMemberIds,
} = uwcssaMemberAdapter.getSelectors((state: RootState) => state.uwcssaMember);

export default uwcssaMemberSlice.reducer;
