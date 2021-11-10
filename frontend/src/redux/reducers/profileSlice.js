import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserEducation,
  createUserExperience,
  updateUser,
  updateUserEducation,
  updateUserExperience,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getUser } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    owner: "",
    firstName: "",
    lastName: "",
    uWindsorEmail: "",
    intro: "",
    major: "",
    avatarImgS3Key: "",
    backGroundImgS3Key: "",
    linkedIn: "",
    github: "",
    createdAt: "",
    badges: [],
    userEducations: { items: [] },
    userExperiences: { items: [] },
  },

  //  Status: "idle",
  //  Error: null,
  getProfileStatus: "idle",
  getProfileError: null,
  putUserProfileStatus: "idle",
  putUserProfileError: null,
  postUserEducationStatus: "idle",
  postUserEducationError: null,
  putUserEducationStatus: "idle",
  putUserEducationError: null,
  postUserExperienceStatus: "idle",
  postUserExperienceError: null,
  putUserExperienceStatus: "idle",
  putUserExperienceError: null,
};

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async ({ username }) => {
    const response = await API.graphql({
      query: getUser,
      variables: { id: username },
      authMode: "AWS_IAM",
    });
    return response.data.getUser;
  }
);

export const putUserProfile = createAsyncThunk(
  "profile/putUserProfile",
  async ({ updateUserInput }) => {
    const response = await API.graphql(
      graphqlOperation(updateUser, {
        input: updateUserInput,
      })
    );
    return response.data.updateUser;
  }
);

export const postUserEducation = createAsyncThunk(
  "profile/postUserEducation",
  async ({ createUserEducationInput }) => {
    const response = await API.graphql(
      graphqlOperation(createUserEducation, {
        input: createUserEducationInput,
      })
    );
    return response;
  }
);

export const putUserEducation = createAsyncThunk(
  "profile/putUserEducation",
  async ({ updateUserEducationInput }) => {
    const response = await API.graphql(
      graphqlOperation(updateUserEducation, {
        input: updateUserEducationInput,
      })
    );
    return response;
  }
);

export const postUserExperience = createAsyncThunk(
  "profile/postUserExperience",
  async ({ createUserExperienceInput }) => {
    const response = await API.graphql(
      graphqlOperation(createUserExperience, {
        input: createUserExperienceInput,
      })
    );
    return response;
  }
);

export const putUserExperience = createAsyncThunk(
  "profile/putUserExperience",
  async ({ updateUserExperienceInput }) => {
    const response = await API.graphql(
      graphqlOperation(updateUserExperience, {
        input: updateUserExperienceInput,
      })
    );
    return response;
  }
);

const profileSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    //有API call 的不能放这里
    removeSelectedProfile(state, action) {
      state.user = {
        id: "",
        username: "",
        email: "",
        owner: "",
        firstName: "",
        lastName: "",
        uWindsorEmail: "",
        intro: "",
        major: "",
        avatarImgS3Key: "",
        backGroundImgS3Key: "",
        linkedIn: "",
        github: "",
        createdAt: "",
        badges: [],
        userEducations: { items: [] },
        userExperiences: { items: [] },
      };
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of getProfile (pending, fulfilled, and rejected)
      .addCase(getProfile.pending, (state, action) => {
        state.getProfileStatus = "loading";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.getProfileStatus = "succeeded";
        console.log(action);
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.getProfileStatus = "failed";
        state.getProfileError = action.error.message;
      })
      // Cases for status of putUserProfile (pending, fulfilled, and rejected)
      .addCase(putUserProfile.pending, (state, action) => {
        state.putUserProfileStatus = "loading";
      })
      .addCase(putUserProfile.fulfilled, (state, action) => {
        state.putUserProfileStatus = "succeeded";
        state = action.payload;
      })
      .addCase(putUserProfile.rejected, (state, action) => {
        state.putUserProfileStatus = "failed";
        state.putUserProfileError = action.error.message;
      })
      // Cases for status of postUserEducation (pending, fulfilled, and rejected)
      .addCase(postUserEducation.pending, (state, action) => {
        state.postUserEducationStatus = "loading";
      })
      .addCase(postUserEducation.fulfilled, (state, action) => {
        state.postUserEducationStatus = "succeeded";
        state.user.userEducations.items.unshift(
          action.payload.data.createUserEducation
        );
      })
      .addCase(postUserEducation.rejected, (state, action) => {
        state.postUserEducationStatus = "failed";
        state.postUserEducationError = action.error.message;
      })
      // Cases for status of putUserEducation (pending, fulfilled, and rejected)
      .addCase(putUserEducation.pending, (state, action) => {
        state.putUserEducationStatus = "loading";
      })
      .addCase(putUserEducation.fulfilled, (state, action) => {
        state.putUserEducationStatus = "succeeded";
        //! need to do later
      })
      .addCase(putUserEducation.rejected, (state, action) => {
        state.putUserEducationStatus = "failed";
        state.putUserEducationError = action.error.message;
      })
      // Cases for status of postUserExperience (pending, fulfilled, and rejected)
      .addCase(postUserExperience.pending, (state, action) => {
        state.postUserExperienceStatus = "loading";
      })
      .addCase(postUserExperience.fulfilled, (state, action) => {
        state.postUserExperienceStatus = "succeeded";
        state.user.userExperiences.items.unshift(
          action.payload.data.createUserExperience
        );
      })
      .addCase(postUserExperience.rejected, (state, action) => {
        state.postUserExperienceStatus = "failed";
        state.postUserExperienceError = action.error.message;
      })
      // Cases for status of putUserExperience (pending, fulfilled, and rejected)
      .addCase(putUserExperience.pending, (state, action) => {
        state.putUserExperienceStatus = "loading";
      })
      .addCase(putUserExperience.fulfilled, (state, action) => {
        state.putUserExperienceStatus = "succeeded";
        state.selected.article.articleComments.items[
          action.meta.arg.idx
        ].articleSubComments.items.unshift(action.payload);
      })
      .addCase(putUserExperience.rejected, (state, action) => {
        state.putUserExperienceStatus = "failed";
        state.putUserExperienceError = action.error.message;
      });
  },
});
export const { removeSelectedProfile } = profileSlice.actions;

export default profileSlice.reducer;
