import { createLike, deleteLike, updateLike } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/general-action-types";
import Compressor from "compressorjs";
import Storage from "@aws-amplify/storage";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

const userCountsQuery = `query ListUsers {
    listUsers {
        items {
            id
        }
    }
}`;

export const setURLFrom = (location) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SET_URL_FROM,
    payload: location.pathname,
  });
};

export const removeURLFrom = () => async (dispatch) => {
  dispatch({ type: ActionTypes.REMOVE_URL_FROM });
};

export const setUserCounts = () => async (dispatch) => {
  try {
    const userData = await API.graphql({
      query: userCountsQuery,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_USER_COUNTS,
      payload: userData.data.listUsers.items.length,
    });
  } catch (error) {
    console.log("error on fetching Users", error);
  }
};

export const setLike = (itemID, userID, isLike) => async (dispatch) => {
  try {
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
    console.log(
      "setLike ,table, itemID, userID, isLike,response",
      `${itemID}-${userID}`,
      itemID,
      userID,
      isLike,
      response
    );
    if (isLike) {
      dispatch({
        type: ActionTypes.SET_LIKE,
        payload: response,
      });
    } else {
      dispatch({
        type: ActionTypes.SET_DISLIKE,
        payload: response,
      });
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const changeLike = (itemID, userID, isLike) => async (dispatch) => {
  try {
    const response = await API.graphql(
      graphqlOperation(updateLike, {
        input: {
          id: `${itemID}-${userID}`,
          like: isLike,
        },
      })
    );
    console.log(
      "setLike ,table, itemID, userID, isLike,response",
      `${itemID}-${userID}`,
      isLike,
      itemID,
      userID,
      response
    );
    dispatch({
      type: ActionTypes.UPDATE_LIKE,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeLike = (itemID, userID) => async (dispatch) => {
  try {
    const response = await API.graphql(
      graphqlOperation(deleteLike, {
        input: {
          id: `${itemID}-${userID}`,
        },
      })
    );
    console.log(
      "setLike ,table, itemID, userID, isLike,response",
      `${itemID}-${userID}`,
      response
    );
    dispatch({
      type: ActionTypes.DELETE_LIKE,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postMultipleImages =
  (imagesData, imageLocation) => async (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_MULTIPLE_IMAGEs });
    console.log("imagesData", imagesData);
    try {
      await Promise.all(
        Array.from(imagesData).map(
          (imageData) =>
            new Compressor(imageData, {
              quality: 0.6,
              success(result) {
                console.log("Result", result);
                Storage.put(
                  `${imageLocation}/${uuid()}.${result.name.split(".").pop()}`,
                  result,
                  { contentType: "image/*" }
                ).then((e) => {
                  console.log("response 上传成功了", e);
                  dispatch({
                    type: ActionTypes.POST_MULTIPLE_IMAGES_SUCCESS,
                    payload: e.key,
                  });
                });
              },
            })
        )
      );
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionTypes.POST_MULTIPLE_IMAGES_FAIL,
        payload: error,
      });
    }

    // async function compress(files) {
    //   for (const file of files) {
    //     await new Promise((resolve, reject) => {
    //       new Compressor(file, {
    //         quality: 0.6,
    //         success(result) {
    //           Storage.put(
    //             `${imageLocation}/${uuid()}.${result.name.split(".").pop()}`,
    //             result,
    //             { contentType: "image/*" }
    //           ).then((e) => {
    //             console.log("response 上传成功了", e);
    //             dispatch({
    //               type: ActionTypes.POST_MULTIPLE_IMAGES_SUCCESS,
    //               payload: e,
    //             });
    //             resolve();
    //           });
    //         },
    //       });
    //     });
    //   }
    // }

    // compress(imagesData)
    //   .then((result) => {
    //     console.log("Compress success");
    //     console.log("result", result);
    //   })
    //   .catch((err) => {
    //     console.log("Compress error");
    //   })
    //   .finally(() => {
    //     console.log("Compress complete");
    //     return true;
    //   });
  };

export const postImage = (imageData, imageLocation) => async (dispatch) => {
  try {
    console.log(imageData);
    const tempUuid = uuid();
    const imgData0 = imageData[0];
    new Compressor(imgData0, {
      quality: 0.6,
      success(result) {
        console.log("Result", result);
        Storage.put(
          `${imageLocation}/${tempUuid}.${result.name.split(".").pop()}`,
          result,
          { contentType: "image/*" }
        ).then((e) => {
          console.log("response", e);
          dispatch({
            type: ActionTypes.POST_IMAGE_SUCCESS,
            payload: e,
          });
        });
      },
    });
    // return `${imageLocation}/${tempUuid}.${imgData0.name.split(".").pop()}`;
  } catch (error) {
    console.log(error);
    dispatch({
      type: ActionTypes.POST_IMAGE_FAIL,
      payload: error,
    });
  }
};
