/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 22:42:19
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-24 00:14:09
 * @FilePath: /uwcssa_ca/src/redux/address/addressSlice.tsx
 * @Description:
 * import addressReducer from './address/addressSlice';
 * address: addressReducer,
 */

import { CreateAddressInput, UpdateAddressInput } from 'API';
import { createAddress, deleteAddress, updateAddress } from 'graphql/mutations';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { getAddress, listAddresses } from 'graphql/queries';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { graphqlOperation } from '@aws-amplify/api-graphql';

export type Address = {
  id: string;
  name?: string | null;
  formatted_address?: string | null;
  place_id?: string | null;
  reference?: string | null;
  types?: Array<string | null> | null;
  apartmentNumbers?: string | null;
  getPlaceResult?: string | null;
  lat?: number | null;
  lng?: number | null;
  createdAt?: string;
  updatedAt?: string;
  owner: string;
};

const addressAdapter = createEntityAdapter<Address>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = addressAdapter.getInitialState({
  fetchAddressListStatus: 'idle',
  fetchAddressListError: null,
  fetchAddressStatus: 'idle',
  fetchAddressError: null,
  postAddressStatus: 'idle',
  postAddressError: null,
  postAddressImgStatus: 'idle',
  postAddressImgError: null,
  updateAddressDetailStatus: 'idle',
  updateAddressDetailError: null,
  removeAddressStatus: 'idle',
  removeAddressError: null,
  eventCreateAddress: null,
});

export const fetchAddressList = createAsyncThunk(
  'address/fetchAddressList',
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listAddresses,
        // variables: {
        //   active: 'T',
        //   sortDirection: 'DESC',
        // },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      return result.data.listAddresses.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchAddress = createAsyncThunk(
  'address/fetchAddress',
  async (
    {
      addressId,
      isAuth,
    }: {
      addressId: string;
      isAuth: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getAddress,
        variables: { id: addressId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getAddress === null) {
        return { id: addressId, description: 'not-found' };
      }
      return result.data.getAddress;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postAddress = createAsyncThunk(
  'address/postAddress',
  async (
    {
      createAddressInput,
    }: {
      createAddressInput: CreateAddressInput;
    },
    { rejectWithValue },
  ) => {
    try {
      Object.keys(createAddressInput).forEach((key) =>
        createAddressInput[key] === null || createAddressInput[key] === ''
          ? delete createAddressInput[key]
          : {},
      ); // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createAddress, {
          input: createAddressInput,
        }),
      );
      return result.data.createAddress;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateAddressDetail = createAsyncThunk(
  'address/updateAddressDetail',
  async (
    {
      updateAddressInput,
    }: {
      updateAddressInput: UpdateAddressInput;
    },
    { rejectWithValue },
  ) => {
    Object.keys(updateAddressInput).forEach((key) =>
      updateAddressInput[key] === null || updateAddressInput[key] === ''
        ? delete updateAddressInput[key]
        : {},
    );
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateAddress, {
          input: updateAddressInput,
        }),
      );
      return result.data.updateAddress;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const removeAddress = createAsyncThunk(
  'address/removeAddress',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(deleteAddress, {
          input: { id },
        }),
      );
      console.log(result);
      return result.data.deleteAddress.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setEventCreateAddress(state, action) {
      state.eventCreateAddress = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchAddressList (pending, fulfilled, and rejected)
      .addCase(fetchAddressList.pending, (state) => {
        state.fetchAddressListStatus = 'loading';
      })
      .addCase(fetchAddressList.fulfilled, (state, action) => {
        state.fetchAddressListStatus = 'succeed';
        //addressAdapter.removeAll(state);
        addressAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAddressList.rejected, (state, action) => {
        state.fetchAddressListStatus = 'failed';
        state.fetchAddressListError = action.payload;
      })
      // Cases for status of selectedAddress (pending, fulfilled, and rejected)
      .addCase(fetchAddress.pending, (state) => {
        state.fetchAddressStatus = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.fetchAddressStatus = 'succeed';
        addressAdapter.upsertOne(state, action.payload);
        //console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.fetchAddressStatus = 'failed';
        state.fetchAddressError = action.payload;
      })
      // Cases for status of postAddress (pending, fulfilled, and rejected)
      .addCase(postAddress.pending, (state) => {
        state.postAddressStatus = 'loading';
      })
      .addCase(postAddress.fulfilled, (state, action) => {
        state.postAddressStatus = 'succeed';
        // state.addresss.unshift(action.payload.data.createAddress);
        addressAdapter.addOne(state, action.payload);
        // state.postAddressStatus = "idle";
      })
      .addCase(postAddress.rejected, (state, action) => {
        state.postAddressStatus = 'failed';
        state.postAddressError = action.payload;
      })
      // Cases for status of updateAddress (pending, fulfilled, and rejected)
      .addCase(updateAddressDetail.pending, (state) => {
        state.updateAddressDetailStatus = 'loading';
      })
      .addCase(updateAddressDetail.fulfilled, (state, action) => {
        state.updateAddressDetailStatus = 'succeed';
        addressAdapter.upsertOne(state, action.payload); //!! 這裏有問題，比如説我update了，頭像會沒
      })
      .addCase(updateAddressDetail.rejected, (state, action) => {
        state.updateAddressDetailStatus = 'failed';
        state.updateAddressDetailError = action.payload;
      })
      .addCase(removeAddress.pending, (state) => {
        state.removeAddressStatus = 'loading';
      })
      .addCase(removeAddress.fulfilled, (state, action) => {
        state.removeAddressStatus = 'succeed';
        console.log(action.payload);
        //state.uwcssaMembers.unshift(action.payload.data.createUwcssaMember);
        addressAdapter.removeOne(state, action.payload);
        // state.updateUwcssaMemberStatus = "idle";
      })
      .addCase(removeAddress.rejected, (state, action) => {
        state.removeAddressStatus = 'failed';
        state.removeAddressError = action.payload;
      });
  },
});

export const {
  selectAll: selectAllAddresses,
  selectById: selectAddressById,
  selectIds: selectAddressIds,
} = addressAdapter.getSelectors((state: RootState) => state.address);

export const { setEventCreateAddress } = addressSlice.actions;

export default addressSlice.reducer;
