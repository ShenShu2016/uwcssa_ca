/*

use this as formQuestion

replace FormQuestion to Database table name example: FormQuestion => Todo

replace FormQuestion to Database table name Lower fist one example: formQuestion => todo

--and  replace the under two to store.js



*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createFormQuestion,
  updateFormQuestion,
} from "../../graphql/mutations";
import { getFormQuestion, listFormQuestions } from "../../graphql/queries";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const formQuestionAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = formQuestionAdapter.getInitialState({
  fetchFormQuestionsStatus: "idle",
  fetchFormQuestionsError: null,
  selectedFormQuestionStatus: "idle",
  selectedFormQuestionError: null,
  postFormQuestionStatus: "idle",
  postFormQuestionError: null,
  postFormQuestionImgStatus: "idle",
  postFormQuestionImgError: null,
  updateFormQuestionDetailStatus: "idle",
  updateFormQuestionDetailError: null,
});

export const fetchFormQuestions = createAsyncThunk(
  "formQuestion/fetchFormQuestions",
  async () => {
    try {
      const FormQuestionsData = await API.graphql({
        query: listFormQuestions,
        variables: {
          sortKey: "SortKey",
          sortDirection: "DESC",
        },
        authMode: "AWS_IAM",
      });
      return FormQuestionsData.data.listFormQuestions.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedFormQuestion = createAsyncThunk(
  "formQuestion/selectedFormQuestion",
  async (id) => {
    const response = await API.graphql({
      query: getFormQuestion,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getFormQuestion === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getFormQuestion;
  }
);

export const postFormQuestion = createAsyncThunk(
  "formQuestion/postFormQuestion",
  async ({ createFormQuestionInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createFormQuestion, { input: createFormQuestionInput })
      );
      return response.data.createFormQuestion;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateFormQuestionDetail = createAsyncThunk(
  "formQuestion/updateFormQuestionDetail",
  async (updateFormQuestionDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateFormQuestion, { input: updateFormQuestionDetail })
    );
    return response.data.updateFormQuestion;
  }
);

const formQuestionSlice = createSlice({
  name: "formQuestion",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchFormQuestions (pending, fulfilled, and rejected)
      .addCase(fetchFormQuestions.pending, (state, action) => {
        state.fetchFormQuestionsStatus = "loading";
      })
      .addCase(fetchFormQuestions.fulfilled, (state, action) => {
        state.fetchFormQuestionsStatus = "succeeded";
        formQuestionAdapter.removeAll(state);
        formQuestionAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchFormQuestions.rejected, (state, action) => {
        state.fetchFormQuestionsStatus = "failed";
        state.fetchFormQuestionsError = action.error.message;
      })
      // Cases for status of selectedFormQuestion (pending, fulfilled, and rejected)
      .addCase(selectedFormQuestion.pending, (state, action) => {
        state.selectedFormQuestionStatus = "loading";
      })
      .addCase(selectedFormQuestion.fulfilled, (state, action) => {
        state.selectedFormQuestionStatus = "succeeded";
        formQuestionAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedFormQuestion.rejected, (state, action) => {
        state.selectedFormQuestionStatus = "failed";
        state.selectedFormQuestionError = action.error.message;
      })
      // Cases for status of postFormQuestion (pending, fulfilled, and rejected)
      .addCase(postFormQuestion.pending, (state, action) => {
        state.postFormQuestionStatus = "loading";
      })
      .addCase(postFormQuestion.fulfilled, (state, action) => {
        state.postFormQuestionStatus = "succeeded";
        // state.formQuestions.unshift(action.payload.data.createFormQuestion);
        formQuestionAdapter.addOne(state, action.payload);
        // state.postFormQuestionStatus = "idle";
      })
      .addCase(postFormQuestion.rejected, (state, action) => {
        state.postFormQuestionStatus = "failed";
        state.postFormQuestionError = action.error.message;
      })
      // Cases for status of updateFormQuestion (pending, fulfilled, and rejected)
      .addCase(updateFormQuestionDetail.pending, (state, action) => {
        state.updateFormQuestionDetailStatus = "loading";
      })
      .addCase(updateFormQuestionDetail.fulfilled, (state, action) => {
        state.updateFormQuestionDetailStatus = "succeeded";
        // state.formQuestions.unshift(action.payload.data.createFormQuestion);
        formQuestionAdapter.upsertOne(state, action.payload);
        // state.updateFormQuestionStatus = "idle";
      })
      .addCase(updateFormQuestionDetail.rejected, (state, action) => {
        state.updateFormQuestionDetailStatus = "failed";
        state.updateFormQuestionDetailError = action.error.message;
      });
  },
});

export const { removeSelectedFormQuestion } = formQuestionSlice.actions;

export const {
  selectAll: selectAllFormQuestions,
  selectById: selectFormQuestionById,
  selectIds: selectFormQuestionIds,
} = formQuestionAdapter.getSelectors((state) => state.formQuestion);

export default formQuestionSlice.reducer;
