/*

use this as form

replace Form to Database table name example: Form => Todo

replace Form to Database table name Lower fist one example: form => todo

--and  replace the under two to store.js

import formReducer from "./slice/formSlice";

form: formReducer,

*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createForm, updateForm } from "../../graphql/mutations";
import { getForm, listForms } from "../../graphql/queries";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const formAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = formAdapter.getInitialState({
  fetchFormsStatus: "idle",
  fetchFormsError: null,
  selectedFormStatus: "idle",
  selectedFormError: null,
  postFormStatus: "idle",
  postFormError: null,
  postFormImgStatus: "idle",
  postFormImgError: null,
  updateFormDetailStatus: "idle",
  updateFormDetailError: null,
});

export const fetchForms = createAsyncThunk("form/fetchForms", async () => {
  try {
    const FormsData = await API.graphql({
      query: listForms,
      variables: {
        sortKey: "SortKey",
        sortDirection: "DESC",
      },
      authMode: "AWS_IAM",
    });
    return FormsData.data.listForms.items;
  } catch (error) {
    console.log(error);
  }
});

export const selectedForm = createAsyncThunk(
  "form/selectedForm",
  async (id) => {
    const response = await API.graphql({
      query: getForm,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getForm === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getForm;
  }
);

export const postForm = createAsyncThunk(
  "form/postForm",
  async ({ createFormInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createForm, { input: createFormInput })
      );
      return response.data.createForm;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateFormDetail = createAsyncThunk(
  "form/updateFormDetail",
  async (updateFormDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateForm, { input: updateFormDetail })
    );
    return response.data.updateForm;
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchForms (pending, fulfilled, and rejected)
      .addCase(fetchForms.pending, (state, action) => {
        state.fetchFormsStatus = "loading";
      })
      .addCase(fetchForms.fulfilled, (state, action) => {
        state.fetchFormsStatus = "succeeded";
        formAdapter.removeAll(state);
        formAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchForms.rejected, (state, action) => {
        state.fetchFormsStatus = "failed";
        state.fetchFormsError = action.error.message;
      })
      // Cases for status of selectedForm (pending, fulfilled, and rejected)
      .addCase(selectedForm.pending, (state, action) => {
        state.selectedFormStatus = "loading";
      })
      .addCase(selectedForm.fulfilled, (state, action) => {
        state.selectedFormStatus = "succeeded";
        formAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedForm.rejected, (state, action) => {
        state.selectedFormStatus = "failed";
        state.selectedFormError = action.error.message;
      })
      // Cases for status of postForm (pending, fulfilled, and rejected)
      .addCase(postForm.pending, (state, action) => {
        state.postFormStatus = "loading";
      })
      .addCase(postForm.fulfilled, (state, action) => {
        state.postFormStatus = "succeeded";
        // state.forms.unshift(action.payload.data.createForm);
        formAdapter.addOne(state, action.payload);
        // state.postFormStatus = "idle";
      })
      .addCase(postForm.rejected, (state, action) => {
        state.postFormStatus = "failed";
        state.postFormError = action.error.message;
      })
      // Cases for status of updateForm (pending, fulfilled, and rejected)
      .addCase(updateFormDetail.pending, (state, action) => {
        state.updateFormDetailStatus = "loading";
      })
      .addCase(updateFormDetail.fulfilled, (state, action) => {
        state.updateFormDetailStatus = "succeeded";
        // state.forms.unshift(action.payload.data.createForm);
        formAdapter.upsertOne(state, action.payload);
        // state.updateFormStatus = "idle";
      })
      .addCase(updateFormDetail.rejected, (state, action) => {
        state.updateFormDetailStatus = "failed";
        state.updateFormDetailError = action.error.message;
      });
  },
});

export const { removeSelectedForm } = formSlice.actions;

export const {
  selectAll: selectAllForms,
  selectById: selectFormById,
  selectIds: selectFormIds,
} = formAdapter.getSelectors((state) => state.form);

export default formSlice.reducer;
