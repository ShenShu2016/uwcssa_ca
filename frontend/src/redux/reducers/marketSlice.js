import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createMarketItem,
  createMarketRental,
  createMarketVehicle,
} from "../../graphql/mutations";
import {
  getMarketItem,
  getMarketRental,
  getMarketVehicle,
  marketItemSortBySortKey,
  marketRentalSortBySortKey,
  marketVehicleSortBySortKey,
} from "../../graphql/queries";

import API from "@aws-amplify/api";
import Storage from "@aws-amplify/storage";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";

const marketAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = marketAdapter.getInitialState({
  marketItems: [],
  marketVehicles: [],
  marketRentals: [],
  selected: {
    marketItem: {},
    marketVehicle: {},
    marketRental: {},
  },
  mutation: {
    marketItem: { postItem: {}, updateItem: {}, deleteItem: {} },
    marketVehicle: { postVehicle: {}, updateVehicle: {}, deleteVehicle: {} },
    marketRental: { postRental: {}, updateRental: {}, deleteRental: {} },
  },
  setMarketItemsStatus: "idle",
  setMarketItemsError: null,
  setMarketVehiclesStatus: "idle",
  setMarketVehiclesError: null,
  setMarketRentalsStatus: "idle",
  setMarketRentalsError: null,
});

export const setMarketItems = createAsyncThunk(
  "market/setMarketItems",
  async () => {
    const MarketItemsData = await API.graphql({
      query: marketItemSortBySortKey,
      variables: {
        sortKey: "SortKey",
        sortDirection: "DESC",
        filter: { active: { eq: true } },
      },
      authMode: "AWS_IAM",
    });
    return MarketItemsData.data.marketItemSortBySortKey.items;
  }
);

export const setMarketVehicles = createAsyncThunk(
  "market/setMarketVehicles",
  async () => {
    const MarketVehicleData = await API.graphql({
      query: marketVehicleSortBySortKey,
      variables: {
        sortKey: "SortKey",
        sortDirection: "DESC",
        filter: { active: { eq: true } },
      },
      authMode: "AWS_IAM",
    });
    return MarketVehicleData.data.marketVehicleSortBySortKey.items;
  }
);

export const setMarketRentals = createAsyncThunk(
  "market/setMarketRentals",
  async () => {
    const MarketRentalData = await API.graphql({
      query: marketRentalSortBySortKey,
      variables: {
        sortKey: "SortKey",
        sortDirection: "DESC",
        filter: { active: { eq: true } },
      },
      authMode: "AWS_IAM",
    });
    return MarketRentalData.data.marketRentalSortBySortKey.items;
  }
);

export const selectedMarketItem = createAsyncThunk(
  "market/selectedMarketItem",
  async (marketItemId, type) => {}
);

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of setMarketItems (pending, fulfilled, and rejected)
      .addCase(setMarketItems.pending, (state, action) => {
        state.setMarketItemsStatus = "loading";
      })
      .addCase(setMarketItems.fulfilled, (state, action) => {
        state.setMarketItemsStatus = "succeeded";
        state.marketItems = state.marketItems.concat(action.payload);
      })
      .addCase(setMarketItems.rejected, (state, action) => {
        state.setMarketItemsStatus = "failed";
        state.setMarketItemsError = action.error.message;
      })
      // Cases for status of setMarketVehicles (pending, fulfilled, and rejected)
      .addCase(setMarketVehicles.pending, (state, action) => {
        state.setMarketVehiclesStatus = "loading";
      })
      .addCase(setMarketVehicles.fulfilled, (state, action) => {
        state.setMarketVehiclesStatus = "succeeded";
        state.marketVehicles = state.marketVehicles.concat(action.payload);
      })
      .addCase(setMarketVehicles.rejected, (state, action) => {
        state.setMarketVehiclesStatus = "failed";
        state.setMarketVehiclesError = action.error.message;
      })
      // Cases for status of setMarketRentals (pending, fulfilled, and rejected)
      .addCase(setMarketRentals.pending, (state, action) => {
        state.setMarketRentalsStatus = "loading";
      })
      .addCase(setMarketRentals.fulfilled, (state, action) => {
        state.setMarketRentalsStatus = "succeeded";
        state.marketRentals = state.marketRentals.concat(action.payload);
      })
      .addCase(setMarketRentals.rejected, (state, action) => {
        state.setMarketRentalsStatus = "failed";
        state.setMarketRentalsError = action.error.message;
      });
  },
});
