import { createMarketItem, createMarketVehicle } from "../../graphql/mutations";
import {
  getMarketHome,
  getMarketItem,
  getMarketVehicle,
  marketItemByCreatedAt,
  marketVehicleByCreatedAt,
} from "../../graphql/queries";

import API from "@aws-amplify/api";
import { ActionTypes } from "../constants/marketItem-action-types";
import Storage from "@aws-amplify/storage";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

export const setMarketItems = () => async (dispatch) => {
  try {
    const MarketItemsData = await API.graphql({
      query: marketItemByCreatedAt,
      variables: { ByCreatedAt: "MarketItem", sortDirection: "DESC" },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_MARKET_ITEMS,
      payload: MarketItemsData.data.marketItemByCreatedAt.items,
    });
  } catch (error) {
    console.log("error on fetching MarketItem", error);
  }
};

export const setMarketVehicles = () => async (dispatch) => {
  try {
    const MarketVehicleData = await API.graphql({
      query: marketVehicleByCreatedAt,
      variables: { ByCreatedAt: "MarketVehicle", sortDirection: "DESC" },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SET_MARKET_VEHICLE,
      payload: MarketVehicleData.data.marketVehicleByCreatedAt.items,
    });
  } catch (error) {
    console.log("error on fetching MarketItem", error);
  }
};

export const selectedMarketItem = (marketItemId, type) => async (dispatch) => {
  console.log("selectedMarketItem dispatch进了", marketItemId);

  const getType = (type) => {
    if (type === "item") {
      return getMarketItem;
    } else if (type === "vehicle") {
      return getMarketVehicle;
    } else if (type === "rental") {
      return getMarketHome;
    }
  };

  const getPayload = (response, type) => {
    if (type === "item") {
      return response.data.getMarketItem;
    } else if (type === "vehicle") {
      return response.data.getMarketVehicle;
    } else if (type === "rental") {
      return response.data.getMarketHome;
    }
  };
  // const getVariables=(type)=>{
  //   if (type === "item") {
  //     return { ByCreatedAt: "MarketItem", sortDirection: "DESC" }
  //   } else if (type === "vehicle") {
  //     return { ByCreatedAt: "MarketVehicle", sortDirection: "DESC" }
  //   } else if (type === "rental") {
  //     return { ByCreatedAt: "MarketRental", sortDirection: "DESC" }
  //   }
  // }
  try {
    const response = await API.graphql({
      query: getType(type),
      variables: { id: marketItemId },
      authMode: "AWS_IAM",
    });
    dispatch({
      type: ActionTypes.SELECTED_MARKET_ITEM,
      payload: getPayload(response, type),
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
  console.log("createMarketItemInput", createMarketItemInput);
  try {
    const response = await API.graphql(
      graphqlOperation(createMarketItem, { input: createMarketItemInput })
    );
    dispatch({
      type: ActionTypes.POST_MARKET_VEHICLE_SUCCESS,
      payload: response,
    });
    return {
      result: true,
      response: response,
    };
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_MARKET_VEHICLE_FAIL,
      payload: error,
    });
    return {
      result: false,
      response: error,
    };
  }
};

export const postMarketVehicle =
  (createMarketVehicleInput) => async (dispatch) => {
    console.log("我要上传拉createMarketItemInput", createMarketVehicleInput);
    try {
      const response = await API.graphql(
        graphqlOperation(createMarketVehicle, {
          input: createMarketVehicleInput,
        })
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
