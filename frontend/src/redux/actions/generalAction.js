import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/general-action-types";
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
    const response = await Storage.put(
      `${imageLocation}/${uuid()}.${imageData.name.split(".").pop()}`,
      imageData,
      { contentType: "image/*" }
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
