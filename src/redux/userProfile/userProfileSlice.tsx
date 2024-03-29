/*
 * @Author: Shen Shu
 * @Date: 2022-05-28 01:04:11
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-30 23:03:12
 * @FilePath: /uwcssa_ca/src/redux/userProfile/userProfileSlice.tsx
 * @Description:
 *
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import API from "@aws-amplify/api";
import { RootState } from "redux/store";
import { UpdateUserProfileInput } from "API";
import { getUserProfile } from "graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { updateUserProfile } from "graphql/mutations";
import { userProfileSortByCreatedAt } from "./custom_q_m_s";

export type UserProfile = {
  id: string;
  name: string;
  email?: string | null;
  fullName?: string | null;
  contactEmail?: string | null;
  rank?: number | null;
  uWindsorEmail?: string | null;
  windsorStudent?: boolean | null;
  title?: string | null;
  about?: string | null;
  avatarURL?: AvatarURL | null;
  emailSubscription?: boolean | null;
  userProfileAvatarURLId?: string | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string;
};
export interface AvatarURL {
  id?: string | null;
  objectURL?: string | null;
  key?: string | null;
  name?: string | null;
  size?: number | null;
  type?: string | null;
  lastModified?: string | null;
  lastModifiedDate?: string | null;
  compressedWidth?: number | null;
  objectCompressedURL?: string | null;
  thumbnailWidth?: number | null;
  objectThumbnailURL?: string | null;
  targetTable?: string | null;
  active?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner?: string | null;
}

const userProfileAdapter = createEntityAdapter<UserProfile>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = userProfileAdapter.getInitialState({
  myUserProfile: {
    id: "",
    name: "",
    fullName: "",
    contactEmail: "",
    title: "",
    about: "",
    uWindsorEmail: "",
    windsorStudent: "",
    emailSubscription: true,
    avatarURL: {
      id: "",
      objectURL: "",
      key: "",
      name: "",
      size: "",
      type: "",
      lastModified: "",
      lastModifiedDate: "",
      compressedWidth: "",
      objectCompressedURL: "",
      thumbnailWidth: "",
      objectThumbnailURL: "",
      targetTable: "",
      active: "",
      createdAt: "",
      updatedAt: "",
      owner: "",
    },
    userProfileAvatarURLId: "",
    website: "",
    createdAt: "",
    updatedAt: "",
    owner: "",
  },
  fetchUserProfileListStatus: "idle",
  fetchUserProfileListError: null,
  fetchUserProfileStatus: "idle",
  fetchUserProfileError: null,
  updateUserProfileDetailStatus: "idle",
  updateUserProfileDetailError: null,
});

export const fetchUserProfileList = createAsyncThunk(
  "userProfile/fetchUserProfileList",
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: userProfileSortByCreatedAt,
        variables: {
          active: "T",
          sortDirection: "DESC",
          limit: 200, //! 以后这里要改一改
        },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      console.log("result", result);
      return result.data.userProfileSortByCreatedAt.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async (username: string, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await API.graphql({
        query: getUserProfile,
        variables: { id: username },
      });
      return response.data.getUserProfile;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateUserProfileData = createAsyncThunk(
  "userProfile/updateUserProfile",
  async (
    updateUserProfileInput: UpdateUserProfileInput,
    { rejectWithValue },
  ) => {
    Object.keys(updateUserProfileInput).forEach((key) =>
      updateUserProfileInput[key] === null || updateUserProfileInput[key] === ""
        ? delete updateUserProfileInput[key]
        : {},
    );

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await API.graphql(
        graphqlOperation(updateUserProfile, {
          input: updateUserProfileInput,
        }),
      );
      console.log("response", response);
      return response.data.updateUserProfile;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    // 有API call 的不能放这里
    removeMyUserProfile(state) {
      state.myUserProfile = initialState.myUserProfile;
      state.fetchUserProfileStatus = initialState.fetchUserProfileStatus;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserProfileList.pending, (state) => {
        state.fetchUserProfileListStatus = "loading";
      })
      .addCase(fetchUserProfileList.fulfilled, (state, action) => {
        state.fetchUserProfileListStatus = "succeed";
        // eventAdapter.removeAll(state);
        userProfileAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUserProfileList.rejected, (state, action) => {
        state.fetchUserProfileListStatus = "failed";
        state.fetchUserProfileListError = action.payload;
      })
      // Cases for status of getProfile (pending, fulfilled, and rejected)
      .addCase(fetchUserProfile.pending, (state) => {
        state.fetchUserProfileStatus = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.fetchUserProfileStatus = "succeeded";
        // console.log(action);
        state.myUserProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.fetchUserProfileStatus = "failed";
        state.fetchUserProfileError = action.payload;
      })
      // Cases for status of putUserProfile (pending, fulfilled, and rejected)
      .addCase(updateUserProfileData.pending, (state) => {
        state.updateUserProfileDetailStatus = "loading";
      })
      .addCase(updateUserProfileData.fulfilled, (state, action) => {
        state.updateUserProfileDetailStatus = "succeeded";
        state.myUserProfile = action.payload;
        if (action.payload.avatarURL) {
          state.myUserProfile.avatarURL.objectCompressedURL =
            action.payload.avatarURL.objectURL;
          state.myUserProfile.avatarURL.objectThumbnailURL =
            action.payload.avatarURL.objectURL;
        }
      })
      .addCase(updateUserProfileData.rejected, (state, action) => {
        state.updateUserProfileDetailStatus = "failed";
        state.updateUserProfileDetailError = action.payload;
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
