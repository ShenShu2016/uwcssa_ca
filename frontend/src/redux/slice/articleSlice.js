import {
  articleSortBySortKey,
  getArticle,
} from "../CustomQuery/ArticleQueries";
import { createArticle, updateArticle } from "../../graphql/mutations";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const articleAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = articleAdapter.getInitialState({
  fetchArticlesStatus: "idle",
  fetchArticlesError: null,
  selectedArticleStatus: "idle",
  selectedArticleError: null,
  postArticleStatus: "idle",
  postArticleError: null,
  postArticleImgStatus: "idle",
  postArticleImgError: null,
  updateArticleDetailStatus: "idle",
  updateArticleDetailError: null,
});

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async () => {
    try {
      const ArticlesData = await API.graphql({
        query: articleSortBySortKey,
        variables: {
          sortKey: "SortKey",
          sortDirection: "DESC",
        },
        authMode: "AWS_IAM",
      });
      return ArticlesData.data.articleSortBySortKey.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedArticle = createAsyncThunk(
  "article/selectedArticle",
  async (id) => {
    const response = await API.graphql({
      query: getArticle,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getArticle === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getArticle;
  }
);

export const postArticle = createAsyncThunk(
  "article/postArticle",
  async ({ createArticleInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createArticle, { input: createArticleInput })
      );
      return response.data.createArticle;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateArticleDetail = createAsyncThunk(
  "article/updateArticleDetail",
  async ({ updateArticleInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateArticle, { input: updateArticleInput })
      );
      return response.data.updateArticle;
    } catch (error) {
      console.log(error);
    }
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchArticles (pending, fulfilled, and rejected)
      .addCase(fetchArticles.pending, (state, action) => {
        state.fetchArticlesStatus = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.fetchArticlesStatus = "succeeded";
        articleAdapter.removeAll(state);
        articleAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.fetchArticlesStatus = "failed";
        state.fetchArticlesError = action.error.message;
      })
      // Cases for status of selectedArticle (pending, fulfilled, and rejected)
      .addCase(selectedArticle.pending, (state, action) => {
        state.selectedArticleStatus = "loading";
      })
      .addCase(selectedArticle.fulfilled, (state, action) => {
        state.selectedArticleStatus = "succeeded";
        articleAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedArticle.rejected, (state, action) => {
        state.selectedArticleStatus = "failed";
        state.selectedArticleError = action.error.message;
      })
      // Cases for status of postArticle (pending, fulfilled, and rejected)
      .addCase(postArticle.pending, (state, action) => {
        state.postArticleStatus = "loading";
      })
      .addCase(postArticle.fulfilled, (state, action) => {
        state.postArticleStatus = "succeeded";
        // state.articles.unshift(action.payload.data.createArticle);
        articleAdapter.addOne(state, action.payload);
        // state.postArticleStatus = "idle";
      })
      .addCase(postArticle.rejected, (state, action) => {
        state.postArticleStatus = "failed";
        state.postArticleError = action.error.message;
      })
      // Cases for status of updateArticle (pending, fulfilled, and rejected)
      .addCase(updateArticleDetail.pending, (state, action) => {
        state.updateArticleDetailStatus = "loading";
      })
      .addCase(updateArticleDetail.fulfilled, (state, action) => {
        state.updateArticleDetailStatus = "succeeded";
        //state.articles.unshift(action.payload.data.createArticle);
        //articleAdapter.upsertOne(state, action.payload);
        // state.updateArticleStatus = "idle";
      })
      .addCase(updateArticleDetail.rejected, (state, action) => {
        state.updateArticleDetailStatus = "failed";
        state.updateArticleDetailError = action.error.message;
      });
  },
});

export const { removeSelectedArticle } = articleSlice.actions;

export const {
  selectAll: selectAllArticles,
  selectById: selectArticleById,
  selectIds: selectArticleIds,
} = articleAdapter.getSelectors((state) => state.article);

export default articleSlice.reducer;
