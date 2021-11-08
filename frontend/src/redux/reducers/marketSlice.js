import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMarketItem, marketItemSortBySortKey } from "../../graphql/queries";

import API from "@aws-amplify/api";
import { createMarketItem } from "../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";

// import Storage from "@aws-amplify/storage";

// import { v4 as uuid } from "uuid";

const initialState = {
  marketItems: [],
  // marketVehicles: [],
  // marketRentals: [],
  selected: {
    marketItem: {},
    // marketVehicle: {},
    // marketRental: {},
  },
  // mutation: {
  //   marketItem: { postItem: {}, updateItem: {}, deleteItem: {} },
  //   marketVehicle: { postVehicle: {}, updateVehicle: {}, deleteVehicle: {} },
  //   marketRental: { postRental: {}, updateRental: {}, deleteRental: {} },
  // },
  fetchMarketItemsStatus: "idle",
  fetchMarketItemsError: null,
  // fetchMarketVehiclesStatus: "idle",
  // fetchMarketVehiclesError: null,
  // fetchMarketRentalsStatus: "idle",
  // fetchMarketRentalsError: null,
  selectedMarketItemStatus: "idle",
  selectedMarketItemError: null,
  postMarketItemStatus: "idle",
  postMarketItemError: null,
  // postMarketVehicleStatus: "idle",
  // postMarketVehicleError: null,
  // postMarketRentalStatus: "idle",
  // postMarketRentalError: null,
  postMarketItemImgStatus: "idle",
  postMarketItemImgError: null,
};

export const fetchMarketItems = createAsyncThunk(
  "market/fetchMarketItems",
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

// export const fetchMarketVehicles = createAsyncThunk(
//   "market/fetchMarketVehicles",
//   async () => {
//     const MarketVehicleData = await API.graphql({
//       query: marketVehicleSortBySortKey,
//       variables: {
//         sortKey: "SortKey",
//         sortDirection: "DESC",
//         filter: { active: { eq: true } },
//       },
//       authMode: "AWS_IAM",
//     });
//     return MarketVehicleData.data.marketVehicleSortBySortKey.items;
//   }
// );

// export const fetchMarketRentals = createAsyncThunk(
//   "market/fetchMarketRentals",
//   async () => {
//     const MarketRentalData = await API.graphql({
//       query: marketRentalSortBySortKey,
//       variables: {
//         sortKey: "SortKey",
//         sortDirection: "DESC",
//         filter: { active: { eq: true } },
//       },
//       authMode: "AWS_IAM",
//     });
//     return MarketRentalData.data.marketRentalSortBySortKey.items;
//   }
// );

export const selectedMarketItem = createAsyncThunk(
  "market/selectedMarketItem",
  async ({ id }) => {
    const response = await API.graphql({
      query: getMarketItem,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    return response.data.getMarketItem;
  }
);

export const postMarketItem = createAsyncThunk(
  "market/postMarketItem",
  async ({ createMarketItemInput }) => {
    console.log("盡了沒？", createMarketItemInput);
    const response = await API.graphql(
      graphqlOperation(createMarketItem, { input: createMarketItemInput })
    );
    console.log("上傳成功了沒", response);
    return response;
  }
);
// export const postMarketItem = createAsyncThunk(
//   "market/postMarketItem",
//   async ({ createMarketItemInput }) => {
//     const response = await API.graphql(
//       graphqlOperation(createMarketItem, { input: createMarketItemInput })
//     );
//     return response;
//   }
// ); 你有點問題，莫名其妙出bug！

// export const postMarketVehicle = createAsyncThunk(
//   "market/postMarketVehicle",
//   async (createMarketVehicleInput) => {
//     const response = await API.graphql(
//       graphqlOperation(createMarketVehicle, { input: createMarketVehicleInput })
//     );
//     return { result: true, response };
//   }
// );

// export const postMarketRental = createAsyncThunk(
//   "market/postMarketRental",
//   async (createMarketRentalInput) => {
//     const response = await API.graphql(
//       graphqlOperation(createMarketRental, { input: createMarketRentalInput })
//     );
//     return { result: true, response };
//   }
// );

// export const postMarketItemImg = createAsyncThunk(
//   "market/postMarketItemImg",
//   async (imgData) => {
//     const response = await Storage.put(
//       `marketItem/${uuid()}${imgData.name}`,
//       imgData,
//       {
//         contentType: "image/*",
//       }
//     );
//     return response;
//   }
// );

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    removeSelectedMarketItem(state, action) {
      state.selected.marketItem = {};
      console.log("remove selected market item successfully!");
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchMarketItems (pending, fulfilled, and rejected)
      .addCase(fetchMarketItems.pending, (state, action) => {
        state.fetchMarketItemsStatus = "loading";
      })
      .addCase(fetchMarketItems.fulfilled, (state, action) => {
        state.fetchMarketItemsStatus = "succeeded";
        state.marketItems = action.payload;
      })
      .addCase(fetchMarketItems.rejected, (state, action) => {
        state.fetchMarketItemsStatus = "failed";
        state.fetchMarketItemsError = action.error.message;
      })
      // Cases for status of fetchMarketVehicles (pending, fulfilled, and rejected)
      // .addCase(fetchMarketVehicles.pending, (state, action) => {
      //   state.fetchMarketVehiclesStatus = "loading";
      // })
      // .addCase(fetchMarketVehicles.fulfilled, (state, action) => {
      //   state.fetchMarketVehiclesStatus = "succeeded";
      //   state.marketVehicles = action.payload;
      // })
      // .addCase(fetchMarketVehicles.rejected, (state, action) => {
      //   state.fetchMarketVehiclesStatus = "failed";
      //   state.fetchMarketVehiclesError = action.error.message;
      // })
      // // Cases for status of fetchMarketRentals (pending, fulfilled, and rejected)
      // .addCase(fetchMarketRentals.pending, (state, action) => {
      //   state.fetchMarketRentalsStatus = "loading";
      // })
      // .addCase(fetchMarketRentals.fulfilled, (state, action) => {
      //   state.fetchMarketRentalsStatus = "succeeded";
      //   state.marketRentals = action.payload;
      // })
      // .addCase(fetchMarketRentals.rejected, (state, action) => {
      //   state.fetchMarketRentalsStatus = "failed";
      //   state.fetchMarketRentalsError = action.error.message;
      // })
      // Cases for status of selectedMarketItem (pending, fulfilled, and rejected)
      .addCase(selectedMarketItem.pending, (state, action) => {
        state.selectedMarketItemStatus = "loading";
      })
      .addCase(selectedMarketItem.fulfilled, (state, action) => {
        state.selectedMarketItemStatus = "succeeded";
        state.selected.marketItem = action.payload;
      })
      .addCase(selectedMarketItem.rejected, (state, action) => {
        state.selectedMarketItemStatus = "failed";
        state.selectedMarketItemError = action.error.message;
      })
      // Cases for status of postMarketItem (pending, fulfilled, and rejected)
      .addCase(postMarketItem.pending, (state, action) => {
        state.postMarketItemStatus = "loading";
      })
      .addCase(postMarketItem.fulfilled, (state, action) => {
        state.postMarketItemStatus = "succeeded";
        state.marketItems.unshift(action.payload.data.createMarketItem);
        state.postMarketItemStatus = "idle";
      })
      .addCase(postMarketItem.rejected, (state, action) => {
        state.postMarketItemStatus = "failed";
        state.postMarketItemError = action.error.message;
      });
    // Cases for status of postMarketVehicle (pending, fulfilled, and rejected)
    // .addCase(postMarketVehicle.pending, (state, action) => {
    //   state.postMarketVehicleStatus = "loading";
    // })
    // .addCase(postMarketVehicle.fulfilled, (state, action) => {
    //   state.postMarketVehicleStatus = "succeeded";
    //   state.marketVehicles.unshift(
    //     action.payload.response.data.createMarketVehicle
    //   );
    //   state.postMarketVehicleStatus = "idle";
    // })
    // .addCase(postMarketVehicle.rejected, (state, action) => {
    //   state.postMarketVehicleStatus = "failed";
    //   state.postMarketVehicleError = action.error.message;
    // })
    // // Cases for status of postMarketRental (pending, fulfilled, and rejected)
    // .addCase(postMarketRental.pending, (state, action) => {
    //   state.postMarketRentalStatus = "loading";
    // })
    // .addCase(postMarketRental.fulfilled, (state, action) => {
    //   state.postMarketRentalStatus = "succeeded";
    //   state.marketRentals.unshift(
    //     action.payload.response.data.createMarketRental
    //   );
    //   state.postMarketRentalStatus = "idle";
    // })
    // .addCase(postMarketRental.rejected, (state, action) => {
    //   state.postMarketRentalStatus = "failed";
    //   state.postMarketRentalError = action.error.message;
    // });
    // // Cases for status of postMarketItemImg (pending, fulfilled, and rejected)
    // .addCase(postMarketItemImg.pending, (state, action) => {
    //   state.postMarketItemImgStatus = "loading";
    // })
    // .addCase(postMarketItemImg.fulfilled, (state, action) => {
    //   state.postMarketItemImgStatus = "succeeded";
    //   state.mutation.postItemImg.push(action.payload);
    //   state.postMarketItemImgStatus = "idle";
    // })
    // .addCase(postMarketItemImg.rejected, (state, action) => {
    //   state.postMarketItemImgStatus = "failed";
    //   state.postMarketItemImgError = action.error.message;
    // });
  },
});

export const { removeSelectedMarketItem } = marketSlice.actions;

export default marketSlice.reducer;
