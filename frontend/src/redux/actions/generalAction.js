import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/general-action-types";
import Compressor from "compressorjs";
import Storage from "@aws-amplify/storage";
import { createLike } from "../../graphql/mutations";
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
        input: { like: isLike, itemID: itemID, userID: userID },
      })
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

export const postMultipleImages =
  (imageData, imageLocation) => async (dispatch) => {
    try {
      const response = await Promise.all(
        Array.from(imageData).map((img) =>
          Storage.put(
            `${imageLocation}/${uuid()}.${img.name.split(".").pop()}`,
            img,
            { contentType: "image/*" }
          )
        )
      );
      console.log(response);
      dispatch({
        type: ActionTypes.POST_IMAGE_SUCCESS,
        payload: response,
      });
      return response;
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionTypes.POST_IMAGE_FAIL,
        payload: error,
      });
    }
  };

export const postImage = (imageData, imageLocation) => async (dispatch) => {
  try {
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
