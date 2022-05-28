/*
 * @Author: Shen Shu
 * @Date: 2022-05-28 01:04:11
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-28 02:23:56
 * @FilePath: /uwcssa_ca/src/redux/userProfile/userProfileSlice.tsx
 * @Description:
 *
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { UpdateUserProfileInput } from 'API';
import { getUserProfile } from 'graphql/queries';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { updateUserProfile } from 'graphql/mutations';

export type UserProfile = {
  id: string;
  name: string;
  firstName?: string | null;
  contactEmail?: string | null;
  title?: string | null;
  about?: string | null;
  avatarURL?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string;
};
const userProfileAdapter = createEntityAdapter<UserProfile>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = userProfileAdapter.getInitialState({
  myUserProfile: {
    id: '',
    name: '',
    firstName: '',
    contactEmail: '',
    title: '',
    about: '',
    avatarURL: '',
    website: '',
    createdAt: '',
    updatedAt: '',
    owner: '',
  },

  fetchUserProfileStatus: 'idle',
  fetchUserProfileError: null,
  updateUserProfileDetailStatus: 'idle',
  updateUserProfileDetailError: null,
});

export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (username: string) => {
    const response: any = await API.graphql({
      query: getUserProfile,
      variables: { id: username },
    });
    return response.data.getUserProfile;
  },
);

export const updateUserProfileData = createAsyncThunk(
  'userProfile/updateUserProfile',
  async (updateUserProfileInput: UpdateUserProfileInput) => {
    try {
      const response: any = await API.graphql(
        graphqlOperation(updateUserProfile, {
          input: updateUserProfileInput,
        }),
      );
      console.log('response', response);
      return response.data.updateUserProfile;
    } catch (error) {
      console.log(error);
    }
  },
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    //有API call 的不能放这里
    removeMyUserProfile(state) {
      state.myUserProfile = initialState.myUserProfile;
      state.fetchUserProfileStatus = initialState.fetchUserProfileStatus;
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of getProfile (pending, fulfilled, and rejected)
      .addCase(fetchUserProfile.pending, (state) => {
        state.fetchUserProfileStatus = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.fetchUserProfileStatus = 'succeeded';
        //console.log(action);
        state.myUserProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.fetchUserProfileStatus = 'failed';
        state.fetchUserProfileError = action.error.message;
      })
      // Cases for status of putUserProfile (pending, fulfilled, and rejected)
      .addCase(updateUserProfileData.pending, (state) => {
        state.updateUserProfileDetailStatus = 'loading';
      })
      .addCase(updateUserProfileData.fulfilled, (state, action) => {
        state.updateUserProfileDetailStatus = 'succeeded';
        state.myUserProfile = action.payload;
      })
      .addCase(updateUserProfileData.rejected, (state, action) => {
        state.updateUserProfileDetailStatus = 'failed';
        state.updateUserProfileDetailError = action.error.message;
      });
  },
});
export const { removeMyUserProfile } = userProfileSlice.actions;

export const {
  selectAll: selectAllUserProfiles,
  selectById: selectUserProfileId,
  selectIds: selectUserProfileIds,
} = userProfileAdapter.getSelectors((state: RootState) => state.userProfile);

export default userProfileSlice.reducer;
