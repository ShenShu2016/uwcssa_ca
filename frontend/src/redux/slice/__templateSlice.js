/*

use this as template

replace Template to Database table name example: Template => Todo

replace Template to Database table name Lower fist one example: template => todo

--and  replace the under two to store.js

import templateReducer from "./slice/templateSlice";

template: templateReducer,

*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createTemplate, updateTemplate } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getTemplate } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { templateSortBySortKey } from "../../graphql/queries";

const templateAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = templateAdapter.getInitialState({
  fetchTemplatesStatus: "idle",
  fetchTemplatesError: null,
  selectedTemplateStatus: "idle",
  selectedTemplateError: null,
  postTemplateStatus: "idle",
  postTemplateError: null,
  postTemplateImgStatus: "idle",
  postTemplateImgError: null,
  updateTemplateDetailStatus: "idle",
  updateTemplateDetailError: null,
});

export const fetchTemplates = createAsyncThunk(
  "template/fetchTemplates",
  async () => {
    try {
      const TemplatesData = await API.graphql({
        query: templateSortBySortKey,
        variables: {
          sortKey: "SortKey",
          sortDirection: "DESC",
        },
        authMode: "AWS_IAM",
      });
      return TemplatesData.data.templateSortBySortKey.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedTemplate = createAsyncThunk(
  "template/selectedTemplate",
  async (id) => {
    const response = await API.graphql({
      query: getTemplate,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getTemplate === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getTemplate;
  }
);

export const postTemplate = createAsyncThunk(
  "template/postTemplate",
  async ({ createTemplateInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createTemplate, { input: createTemplateInput })
      );
      return response.data.createTemplate;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateTemplateDetail = createAsyncThunk(
  "template/updateTemplateDetail",
  async (updateTemplateDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateTemplate, { input: updateTemplateDetail })
    );
    return response.data.updateTemplate;
  }
);

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchTemplates (pending, fulfilled, and rejected)
      .addCase(fetchTemplates.pending, (state, action) => {
        state.fetchTemplatesStatus = "loading";
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.fetchTemplatesStatus = "succeeded";
        templateAdapter.removeAll(state);
        templateAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.fetchTemplatesStatus = "failed";
        state.fetchTemplatesError = action.error.message;
      })
      // Cases for status of selectedTemplate (pending, fulfilled, and rejected)
      .addCase(selectedTemplate.pending, (state, action) => {
        state.selectedTemplateStatus = "loading";
      })
      .addCase(selectedTemplate.fulfilled, (state, action) => {
        state.selectedTemplateStatus = "succeeded";
        templateAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedTemplate.rejected, (state, action) => {
        state.selectedTemplateStatus = "failed";
        state.selectedTemplateError = action.error.message;
      })
      // Cases for status of postTemplate (pending, fulfilled, and rejected)
      .addCase(postTemplate.pending, (state, action) => {
        state.postTemplateStatus = "loading";
      })
      .addCase(postTemplate.fulfilled, (state, action) => {
        state.postTemplateStatus = "succeeded";
        // state.templates.unshift(action.payload.data.createTemplate);
        templateAdapter.addOne(state, action.payload);
        // state.postTemplateStatus = "idle";
      })
      .addCase(postTemplate.rejected, (state, action) => {
        state.postTemplateStatus = "failed";
        state.postTemplateError = action.error.message;
      })
      // Cases for status of updateTemplate (pending, fulfilled, and rejected)
      .addCase(updateTemplateDetail.pending, (state, action) => {
        state.updateTemplateDetailStatus = "loading";
      })
      .addCase(updateTemplateDetail.fulfilled, (state, action) => {
        state.updateTemplateDetailStatus = "succeeded";
        // state.templates.unshift(action.payload.data.createTemplate);
        templateAdapter.upsertOne(state, action.payload);
        // state.updateTemplateStatus = "idle";
      })
      .addCase(updateTemplateDetail.rejected, (state, action) => {
        state.updateTemplateDetailStatus = "failed";
        state.updateTemplateDetailError = action.error.message;
      });
  },
});

export const { removeSelectedTemplate } = templateSlice.actions;

export const {
  selectAll: selectAllTemplates,
  selectById: selectTemplateById,
  selectIds: selectTemplateIds,
} = templateAdapter.getSelectors((state) => state.template);

export default templateSlice.reducer;
