/*

use this as address

replace Address to Database table name example: Address => Todo

replace Address to Database table name Lower fist one example: address => todo

--and  replace the under two to store.js

import addressReducer from "./slice/addressSlice";

address: addressReducer,

*/

import { createAddress, updateAddress } from "../../graphql/mutations";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import API from "@aws-amplify/api";
import { getAddress } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listAddresss } from "../../graphql/queries";

const addressAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = addressAdapter.getInitialState({
  fetchAddresssStatus: "idle",
  fetchAddresssError: null,
  selectedAddressStatus: "idle",
  selectedAddressError: null,
  postAddressStatus: "idle",
  postAddressError: null,
  postAddressImgStatus: "idle",
  postAddressImgError: null,
  updateAddressDetailStatus: "idle",
  updateAddressDetailError: null,
});

export const fetchAddresss = createAsyncThunk(
  "address/fetchAddresss",
  async () => {
    try {
      const AddresssData = await API.graphql({
        query: listAddresss,
        authMode: "AWS_IAM",
      });
      return AddresssData.data.listAddresss.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedAddress = createAsyncThunk(
  "address/selectedAddress",
  async (id) => {
    const response = await API.graphql({
      query: getAddress,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getAddress === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getAddress;
  }
);

export const postAddress = createAsyncThunk(
  "address/postAddress",
  async ({ createAddressInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createAddress, { input: createAddressInput })
      );
      return response.data.createAddress;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateAddressDetail = createAsyncThunk(
  "address/updateAddressDetail",
  async (updateAddressDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateAddress, { input: updateAddressDetail })
    );
    return response.data.updateAddress;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchAddresss (pending, fulfilled, and rejected)
      .addCase(fetchAddresss.pending, (state, action) => {
        state.fetchAddresssStatus = "loading";
      })
      .addCase(fetchAddresss.fulfilled, (state, action) => {
        state.fetchAddresssStatus = "succeeded";
        addressAdapter.removeAll(state);
        addressAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAddresss.rejected, (state, action) => {
        state.fetchAddresssStatus = "failed";
        state.fetchAddresssError = action.error.message;
      })
      // Cases for status of selectedAddress (pending, fulfilled, and rejected)
      .addCase(selectedAddress.pending, (state, action) => {
        state.selectedAddressStatus = "loading";
      })
      .addCase(selectedAddress.fulfilled, (state, action) => {
        state.selectedAddressStatus = "succeeded";
        addressAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedAddress.rejected, (state, action) => {
        state.selectedAddressStatus = "failed";
        state.selectedAddressError = action.error.message;
      })
      // Cases for status of postAddress (pending, fulfilled, and rejected)
      .addCase(postAddress.pending, (state, action) => {
        state.postAddressStatus = "loading";
      })
      .addCase(postAddress.fulfilled, (state, action) => {
        state.postAddressStatus = "succeeded";
        // state.addresss.unshift(action.payload.data.createAddress);
        addressAdapter.addOne(state, action.payload);
        // state.postAddressStatus = "idle";
      })
      .addCase(postAddress.rejected, (state, action) => {
        state.postAddressStatus = "failed";
        state.postAddressError = action.error.message;
      })
      // Cases for status of updateAddress (pending, fulfilled, and rejected)
      .addCase(updateAddressDetail.pending, (state, action) => {
        state.updateAddressDetailStatus = "loading";
      })
      .addCase(updateAddressDetail.fulfilled, (state, action) => {
        state.updateAddressDetailStatus = "succeeded";
        // state.addresss.unshift(action.payload.data.createAddress);
        addressAdapter.upsertOne(state, action.payload);
        // state.updateAddressStatus = "idle";
      })
      .addCase(updateAddressDetail.rejected, (state, action) => {
        state.updateAddressDetailStatus = "failed";
        state.updateAddressDetailError = action.error.message;
      });
  },
});

export const { removeSelectedAddress } = addressSlice.actions;

export const {
  selectAll: selectAllAddresss,
  selectById: selectAddressById,
  selectIds: selectAddressIds,
} = addressAdapter.getSelectors((state) => state.address);

export default addressSlice.reducer;
