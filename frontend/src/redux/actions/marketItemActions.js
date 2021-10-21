import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/marketItem-action-types";
import Storage from "@aws-amplify/storage";
import { createMarketItem } from "../../graphql/mutations";
import { getMarketItem } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listMarketItems } from "../../graphql/queries";
import { v4 as uuid } from "uuid";

export const setMarketItems = () => async (dispatch) => {
  try {
    console.log("我tm开始了");
    const MarketItemsData = await API.graphql({
      query: listMarketItems,
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_MARKETITEMS,
      payload: MarketItemsData.data.listMarketItems.items,
    });
    console.log(
      "MarketItemsData.data.listMarketItems.items",
      MarketItemsData.data.listMarketItems.items
    );
  } catch (error) {
    console.log("error on fetching MarketItem", error);
  }
};

export const selectedMarketItem = (marketItemId) => async (dispatch) => {
  console.log("selectedMarketItem dispatch进了", marketItemId);
  try {
    const response = await API.graphql({
      query: getMarketItem,
      variables: { id: marketItemId },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SELECTED_MARKETITEM,
      payload: response.data.getMarketItem,
    });
  } catch (error) {
    console.log("error on selecting MarketItem", error);
  }
};

export const removeSelectedMarketItem = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.REMOVE_SELECTED_MARKETITEM,
  });
};

export const postMarketItem = (createMarketItemInput) => async (dispatch) => {
  console.log("我要上传拉createMarketItemInput", createMarketItemInput);
  try {
    const response = await API.graphql(
      graphqlOperation(createMarketItem, { input: createMarketItemInput })
    );
    dispatch({
      type: ActionTypes.POST_MARKETITEMS_SUCCESS,
      payload: response,
    });
    return {
      result: true,
      response: response,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_MARKETITEMS_FAIL,
      payload: error,
    });
    return {
      result: false,
      response: error,
    };
  }
};

export const postMarketItemImg = (imgData) => async (dispatch) => {
  try {
    const response = await Storage.put(
      `marketItem/${uuid()}${imgData.name}`,
      imgData,
      {
        contentType: "image/*",
      }
    );
    dispatch({
      type: ActionTypes.POST_MARKETITEMS_IMG_SUCCESS,
      payload: response,
    });
    return response;
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_MARKETITEMS_IMG_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
