import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createLike, deleteLike, updateLike } from "../../graphql/mutations";
import {
  listForumPosts,
  userSortBySortKey,
} from "../CustomQuery/generialQueries";

import API from "@aws-amplify/api";
import Compressor from "compressorjs";
import Storage from "@aws-amplify/storage";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

const initialState = {
  users: null,
  forumPostCounts: "",
  urlFrom: null,
  imageKey: {},
  imageKeys: {},
  likes: [],

  //  Status: "idle",
  //  Error: null,
  setURLFromStatus: "idle",
  setURLFromError: null,

  removeURLFromStatus: "idle",
  removeURLFromError: null,
  fetchUsersError: null,
  fetchUsersStatus: "idle",
  fetchForumPostCountsStatus: "idle",
  fetchForumPostCountsError: null,
  postLikeStatus: "idle",
  postLikeError: null,
  putLikeStatus: "idle",
  putLikeError: null,
  removeLikeStatus: "idle",
  removeLikeError: null,
  postMultipleImagesStatus: "idle",
  postMultipleImagesError: null,
  postImageStatus: "idle",
  postImageError: null,
};

export const setURLFrom = createAsyncThunk(
  "general/setURLFrom",
  async ({ location }) => {
    return location;
  }
);

export const removeURLFrom = createAsyncThunk(
  "general/removeURLFrom",
  async () => {
    return;
  }
);

export const fetchUsers = createAsyncThunk("general/fetchUsers", async () => {
  const usersData = await API.graphql({
    query: userSortBySortKey,
    variables: {
      sortKey: "SortKey",
      sortDirection: "DESC",
    },
    authMode: "AWS_IAM",
  });

  return usersData.data.userSortBySortKey.items;
});

export const fetchForumPostCounts = createAsyncThunk(
  "general/fetchForumPostCounts",
  async () => {
    const usersData = await API.graphql({
      query: listForumPosts,
      authMode: "AWS_IAM",
    });

    return usersData.data.listForumPosts.items.length;
  }
);

export const postLike = createAsyncThunk(
  "general/postLike",
  async ({ itemID, userID, isLike }) => {
    const response = await API.graphql(
      graphqlOperation(createLike, {
        input: {
          id: `${itemID}-${userID}`,
          like: isLike,
          itemID: itemID,
          userID: userID,
        },
      })
    );
    console.log(response);
    return response.data;
  }
);

export const putLike = createAsyncThunk(
  "general/putLike",
  async ({ itemID, userID, isLike }) => {
    const response = await API.graphql(
      graphqlOperation(updateLike, {
        input: {
          id: `${itemID}-${userID}`,
          like: isLike,
        },
      })
    );
    console.log(response);
    return response.data;
  }
);

export const removeLike = createAsyncThunk(
  "general/removeLike",
  async ({ itemID, userID }) => {
    const response = await API.graphql(
      graphqlOperation(deleteLike, {
        input: {
          id: `${itemID}-${userID}`,
        },
      })
    );
    console.log(response);
    return response.data;
  }
);

export const postSingleImage = createAsyncThunk(
  "general/postSingleImage",
  async ({ imageData, imageLocation }) => {
    console.log(imageData, imageLocation);
    const tempUuid = uuid();
    const imgData0 = imageData[0];
    await new Promise((resolve) => {
      new Compressor(imgData0, {
        quality: 0.6,
        success(result) {
          console.log("Result", result);
          Storage.put(
            `${imageLocation}/${tempUuid}.${imgData0.name.split(".").pop()}`,
            result,
            { contentType: "image/*" }
          ).then((e) => {
            console.log("response", e);
            resolve();
          });
        },
      });
    });
    return `${imageLocation}/${tempUuid}.${imgData0.name.split(".").pop()}`;
  }
);

export const postMultipleImages = createAsyncThunk(
  "general/postMultipleImages",
  async ({ imagesData, imageLocation }) => {
    let imgS3Keys = [];
    await new Promise(async function (resolve) {
      let numProcessedImages = 0;
      let numImagesToProcess = imagesData.length;
      for (let i = 0; i < numImagesToProcess; i++) {
        const file = imagesData[i];
        await new Promise((resolve) => {
          new Compressor(file, {
            quality: 0.5,
            success(result) {
              Storage.put(
                `${imageLocation}/${uuid()}.${result.name.split(".").pop()}`,
                result,
                { contentType: "image/*" }
              ).then((e) => {
                console.log("response 上传成功了", e);
                imgS3Keys.push(e.key);
                resolve();
              });
            },
          });
        });
        numProcessedImages += 1;
      }
      console.log("numProcessedImages", numProcessedImages);
      if (numProcessedImages === numImagesToProcess) {
        resolve();
      }
    });
    return imgS3Keys;
  }
);

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    //有API call 的不能放这里
    removeURLFrom(state, action) {
      state.urlFrom = {};
      console.log("remove selected removeURLFrom successfully!");
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchUsers (pending, fulfilled, and rejected)
      .addCase(setURLFrom.pending, (state, action) => {
        state.setURLFromStatus = "loading";
      })
      .addCase(setURLFrom.fulfilled, (state, action) => {
        state.setURLFromStatus = "succeeded";
        state.urlFrom = action.payload;
      })
      .addCase(setURLFrom.rejected, (state, action) => {
        state.setURLFromStatus = "failed";
        state.setURLFromError = action.error.message;
      })
      // Cases for status of removeURLFrom (pending, fulfilled, and rejected)
      .addCase(removeURLFrom.pending, (state, action) => {
        state.removeLikeStatus = "loading";
      })
      .addCase(removeURLFrom.fulfilled, (state, action) => {
        state.removeLikeStatus = "succeeded";
        state.urlFrom = action.payload;
      })
      .addCase(removeURLFrom.rejected, (state, action) => {
        state.removeLikeStatus = "failed";
        state.removeURLFromError = action.error.message;
      })
      // Cases for status of fetchUsers (pending, fulfilled, and rejected)
      .addCase(fetchUsers.pending, (state, action) => {
        state.fetchUsersStatus = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.fetchUsersStatus = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.fetchUsersStatus = "failed";
        state.fetchUsersError = action.error.message;
      })
      // Cases for status of fetchForumPostCounts (pending, fulfilled, and rejected)
      .addCase(fetchForumPostCounts.pending, (state, action) => {
        state.fetchForumPostCountsStatus = "loading";
      })
      .addCase(fetchForumPostCounts.fulfilled, (state, action) => {
        state.fetchForumPostCountsStatus = "succeeded";
        state.forumPostCounts = action.payload;
      })
      .addCase(fetchForumPostCounts.rejected, (state, action) => {
        state.fetchForumPostCountsStatus = "failed";
        state.fetchForumPostCountsError = action.error.message;
      })
      // Cases for status of postLike (pending, fulfilled, and rejected)
      .addCase(postLike.pending, (state, action) => {
        state.postLikeStatus = "loading";
      })
      .addCase(postLike.fulfilled, (state, action) => {
        state.postLikeStatus = "succeeded";
        state.likes.unshift(action.payload);
      })
      .addCase(postLike.rejected, (state, action) => {
        state.postLikeStatus = "failed";
        state.postLikeError = action.payload;
      })
      // Cases for status of putLike (pending, fulfilled, and rejected)
      .addCase(putLike.pending, (state, action) => {
        state.putLikeStatus = "loading";
      })
      .addCase(putLike.fulfilled, (state, action) => {
        state.putLikeStatus = "succeeded";
        state.likes.unshift(action.payload);
      })
      .addCase(putLike.rejected, (state, action) => {
        state.putLikeStatus = "failed";
        state.putLikeError = action.payload;
      })
      // Cases for status of removeLike (pending, fulfilled, and rejected)
      .addCase(removeLike.pending, (state, action) => {
        state.removeLikeStatus = "loading";
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        state.removeLikeStatus = "succeeded";
        state.likes.unshift(action.payload);
      })
      .addCase(removeLike.rejected, (state, action) => {
        state.removeLikeStatus = "failed";
        state.removeLikeError = action.payload;
      })
      // Cases for status of postMultipleImages (pending, fulfilled, and rejected)
      .addCase(postMultipleImages.pending, (state, action) => {
        state.postMultipleImagesStatus = "loading";
      })
      .addCase(postMultipleImages.fulfilled, (state, action) => {
        state.postMultipleImagesStatus = "succeeded";
        state.imageKeys = action.payload;
      })
      .addCase(postMultipleImages.rejected, (state, action) => {
        state.postMultipleImagesStatus = "failed";
        state.postMultipleImagesError = action.error.message;
      })
      // Cases for status of postSingleImage (pending, fulfilled, and rejected)
      .addCase(postSingleImage.pending, (state, action) => {
        state.postImageStatus = "loading";
      })
      .addCase(postSingleImage.fulfilled, (state, action) => {
        state.postImageStatus = "succeeded";
        state.imageKey = action.payload;
      })
      .addCase(postSingleImage.rejected, (state, action) => {
        state.postImageStatus = "failed";
        state.postImageError = action.error.message;
      });
  },
});

export default generalSlice.reducer;
