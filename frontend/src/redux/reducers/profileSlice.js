import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserEducation,
  createUserExperience,
  deleteUserEducation,
  deleteUserExperience,
  updateUserEducation,
  updateUserExperience,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getUser } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { updateUser } from "../CustomQuery/ProfileQueries";

const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    owner: "",
    firstName: "",
    lastName: "",
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
  removeUserEducationStatus: "idle",
  removeUserEducationError: null,
  postUserExperienceStatus: "idle",
  postUserExperienceError: null,
  putUserExperienceStatus: "idle",
  putUserExperienceError: null,
  removeUserExperienceStatus: "idle",
  removeUserExperienceError: null,
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
    console.log("response", response);
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

export const removeUserEducation = createAsyncThunk(
  "profile/deleteUserEducation",
  async ({ updateUserEducationInput, idx }) => {
    const response = await API.graphql(
      graphqlOperation(deleteUserEducation, {
        input: { id: updateUserEducationInput.id },
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
  async ({ updateUserExperienceInput, idx }) => {
    const response = await API.graphql(
      graphqlOperation(updateUserExperience, {
        input: updateUserExperienceInput,
      })
    );
    return response;
  }
);

export const removeUserExperience = createAsyncThunk(
  "profile/deleteUserExperience",
  async ({ updateUserExperienceInput, idx }) => {
    const response = await API.graphql(
      graphqlOperation(deleteUserExperience, {
        input: { id: updateUserExperienceInput.id },
      })
    );
    return response;
  }
);

const profileSlice = createSlice({
  name: "profile",
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
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
        state.user.major = action.payload.major;
        state.user.avatarImgS3Key = action.payload.avatarImgS3Key;
        state.user.backGroundImgS3Key = action.payload.backGroundImgS3Key;
        state.user.linkedIn = action.payload.linkedIn;
        state.user.github = action.payload.github;
        state.user.intro = action.payload.intro;
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
        state.user.userEducations.items[action.meta.arg.idx] =
          action.payload.data.updateUserEducation;
      })
      .addCase(putUserEducation.rejected, (state, action) => {
        state.putUserEducationStatus = "failed";
        state.putUserEducationError = action.error.message;
      })
      // Cases for status of removeUserEducation (pending, fulfilled, and rejected)
      .addCase(removeUserEducation.pending, (state, action) => {
        state.removeUserEducationStatus = "loading";
      })
      .addCase(removeUserEducation.fulfilled, (state, action) => {
        state.removeUserEducationStatus = "succeeded";
        state.user.userEducations.items.splice([action.meta.arg.idx], 1);
      })
      .addCase(removeUserEducation.rejected, (state, action) => {
        state.removeUserEducationStatus = "failed";
        state.removeUserEducationError = action.error.message;
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
        state.user.userExperiences.items[action.meta.arg.idx] =
          action.payload.data.updateUserExperience;
      })
      .addCase(putUserExperience.rejected, (state, action) => {
        state.putUserExperienceStatus = "failed";
        state.putUserExperienceError = action.error.message;
      })
      // Cases for status of removeUserEducation (pending, fulfilled, and rejected)
      .addCase(removeUserExperience.pending, (state, action) => {
        state.removeUserExperienceStatus = "loading";
      })
      .addCase(removeUserExperience.fulfilled, (state, action) => {
        state.removeUserExperienceStatus = "succeeded";
        state.user.userExperiences.items.splice([action.meta.arg.idx], 1);
      })
      .addCase(removeUserExperience.rejected, (state, action) => {
        state.removeUserExperienceStatus = "failed";
        state.removeUserExperienceError = action.error.message;
      });
  },
});
export const { removeSelectedProfile } = profileSlice.actions;

export default profileSlice.reducer;
