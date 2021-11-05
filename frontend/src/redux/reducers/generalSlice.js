import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createLike, deleteLike, updateLike } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const initialState = {
  userCounts: "",
  urlFrom: null,
  imageKey: {},
  imageKeys: [],
  likes: [],

  fetchUserCountsStatus: "idle",
  fetchUserCountsError: null,
  postLikeStatus: "idle",
  postLikeError: null,

  putLikeStatus: "idle",
  putLikeError: null,
  removeLikeStatus: "idle",
  removeLikeError: null,
};

const userCountsQuery = `query ListUsers {
    listUsers {
        items {
            id
        }
    }
}`;

// export const setURLFrom = (location) => async (dispatch) => {
//   dispatch({
//     type: ActionTypes.SET_URL_FROM,
//     payload: location.pathname,
//   });
// };

// export const removeURLFrom = () => async (dispatch) => {
//   dispatch({ type: ActionTypes.REMOVE_URL_FROM });
// };

// export const fetchUserCounts = () => async (dispatch) => {
//   try {
//     const userData = await API.graphql({
//       query: userCountsQuery,
//       authMode: "AWS_IAM",
//     });
//     dispatch({
//       type: ActionTypes.SET_USER_COUNTS,
//       payload: userData.data.listUsers.items.length,
//     });
//   } catch (error) {
//     console.log("error on fetching Users", error);
//   }
// };

export const fetchUserCounts = createAsyncThunk(
  "general/fetchUserCounts",
  async () => {
    const userCountsData = await API.graphql({
      query: userCountsQuery,
      authMode: "AWS_IAM",
    });

    return userCountsData.data.listUsers.items.length;
  }
);

export const postLike = createAsyncThunk(
  "general/fetchUserCounts",
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
    return response;
  }
);

// export const changeLike = (itemID, userID, isLike) => async (dispatch) => {
//   try {
//     const response = await API.graphql(
//       graphqlOperation(updateLike, {
//         input: {
//           id: `${itemID}-${userID}`,
//           like: isLike,
//         },
//       })
//     );
//     console.log(
//       "setLike ,table, itemID, userID, isLike,response",
//       `${itemID}-${userID}`,
//       isLike,
//       itemID,
//       userID,
//       response
//     );
//     dispatch({
//       type: ActionTypes.UPDATE_LIKE,
//       payload: response,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const putLike = createAsyncThunk(
  "general/fetchUserCounts",
  async ({ itemID, userID, isLike }) => {
    const response = await API.graphql(
      graphqlOperation(updateLike, {
        input: {
          id: `${itemID}-${userID}`,
          like: isLike,
        },
      })
    );
    return response;
  }
);
// export const removeLike = (itemID, userID) => async (dispatch) => {
//   try {
//     const response = await API.graphql(
//       graphqlOperation(deleteLike, {
//         input: {
//           id: `${itemID}-${userID}`,
//         },
//       })
//     );
//     console.log(
//       "setLike ,table, itemID, userID, isLike,response",
//       `${itemID}-${userID}`,
//       response
//     );
//     dispatch({
//       type: ActionTypes.DELETE_LIKE,
//       payload: response,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const removeLike = createAsyncThunk(
  "general/fetchUserCounts",
  async ({ itemID, userID }) => {
    const response = await API.graphql(
      graphqlOperation(deleteLike, {
        input: {
          id: `${itemID}-${userID}`,
        },
      })
    );
    return response;
  }
);

// export const postMultipleImages =
//   (imagesData, imageLocation) => async (dispatch) => {
//     dispatch({ type: ActionTypes.REMOVE_MULTIPLE_IMAGEs });
//     console.log("imagesData", imagesData);
//     try {
//       await Promise.all(
//         Array.from(imagesData).map(
//           (imageData) =>
//             new Compressor(imageData, {
//               quality: 0.6,
//               success(result) {
//                 console.log("Result", result);
//                 Storage.put(
//                   `${imageLocation}/${uuid()}.${result.name.split(".").pop()}`,
//                   result,
//                   { contentType: "image/*" }
//                 ).then((e) => {
//                   console.log("response 上传成功了", e);
//                   dispatch({
//                     type: ActionTypes.POST_MULTIPLE_IMAGES_SUCCESS,
//                     payload: e.key,
//                   });
//                 });
//               },
//             })
//         )
//       );
//     } catch (error) {
//       console.log(error);
//       dispatch({
//         type: ActionTypes.POST_MULTIPLE_IMAGES_FAIL,
//         payload: error,
//       });
//     }
//   };
// export const postImage = (imageData, imageLocation) => async (dispatch) => {
//   try {
//     const tempUuid = uuid();
//     const imgData0 = imageData[0];
//     new Compressor(imgData0, {
//       quality: 0.6,
//       success(result) {
//         console.log("Result", result);
//         Storage.put(
//           `${imageLocation}/${tempUuid}.${result.name.split(".").pop()}`,
//           result,
//           { contentType: "image/*" }
//         ).then((e) => {
//           console.log("response", e);
//           dispatch({
//             type: ActionTypes.POST_IMAGE_SUCCESS,
//             payload: e,
//           });
//         });
//       },
//     });
//     // return `${imageLocation}/${tempUuid}.${imgData0.name.split(".").pop()}`;
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: ActionTypes.POST_IMAGE_FAIL,
//       payload: error,
//     });
//   }
// };

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    //有API call 的不能放这里
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchUserCounts (pending, fulfilled, and rejected)
      .addCase(fetchUserCounts.pending, (state, action) => {
        state.fetchUserCountsStatus = "loading";
      })
      .addCase(fetchUserCounts.fulfilled, (state, action) => {
        state.fetchUserCountsStatus = "succeeded";
        state.userCounts = action.payload;
      })
      .addCase(fetchUserCounts.rejected, (state, action) => {
        state.fetchUserCountsStatus = "failed";
        state.fetchUserCountsError = action.error.message;
      })
      // Cases for status of postLike (pending, fulfilled, and rejected)
      .addCase(postLike.pending, (state, action) => {
        state.postLikeStatus = "loading";
      })
      .addCase(postLike.fulfilled, (state, action) => {
        state.postLikeStatus = "succeeded";
        state.postLike = action.payload;
      })
      .addCase(postLike.rejected, (state, action) => {
        state.postLikeStatus = "failed";
        state.postLikeError = action.error.message;
      })
      // Cases for status of putLike (pending, fulfilled, and rejected)
      .addCase(putLike.pending, (state, action) => {
        state.putLikeStatus = "loading";
      })
      .addCase(putLike.fulfilled, (state, action) => {
        state.putLikeStatus = "succeeded";
        state.putLike = action.payload;
      })
      .addCase(putLike.rejected, (state, action) => {
        state.putLikeStatus = "failed";
        state.putLikeError = action.error.message;
      })
      // Cases for status of putLike (pending, fulfilled, and rejected)
      .addCase(putLike.pending, (state, action) => {
        state.putLikeStatus = "loading";
      })
      .addCase(putLike.fulfilled, (state, action) => {
        state.putLikeStatus = "succeeded";
        state.putLike = action.payload;
      })
      .addCase(putLike.rejected, (state, action) => {
        state.putLikeStatus = "failed";
        state.putLikeError = action.error.message;
      });
  },
});

export default generalSlice.reducer;
