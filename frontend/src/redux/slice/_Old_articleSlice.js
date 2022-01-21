import {
  articleCommentSortByArticleID,
  articleSortBySortKey,
  listTopics,
} from "../../graphql/queries";
import {
  createArticle,
  createArticleComment,
  createArticleSubComment,
  updateArticle,
} from "../../graphql/mutations";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import API from "@aws-amplify/api";
import { getArticle } from "../CustomQuery/ArticleQueries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const initialState = {
  articles: [],
  topics: [],
  types: [],
  selected: {
    article: { articleComments: { nextToken: null } },
  },
  mutation: {
    postArticle: {},
    updateArticle: {},
    deleteArticle: [],
  },
  //  Status: "idle",
  //  Error: null,
  fetchArticlesStatus: "idle",
  fetchArticlesError: null,
  selectedArticleStatus: "idle",
  selectedArticlesError: null,
  selectedArticleCommentsStatus: "idle",
  selectedArticleCommentsError: null,
  loadMoreArticleCommentsStatus: "idle",
  loadMoreArticleCommentsError: null,
  removeSelectedArticleStatus: "idle",
  removeSelectedArticleError: null,
  postArticleCommentStatus: "idle",
  postArticleCommentError: null,
  postArticleSubCommentStatus: "idle",
  postArticleSubCommentError: null,
  fetchTopicsStatus: "idle",
  fetchTopicsError: null,
  postArticleStatus: "idle",
  postArticleError: null,
  modifyArticleStatus: "idle",
  modifyArticleError: null,
};

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async () => {
    try {
      const articleData = await API.graphql({
        query: articleSortBySortKey,
        variables: {
          sortKey: "SortKey",
          sortDirection: "DESC",
          filter: { active: { eq: true } },
        },
        authMode: "AWS_IAM",
      });

      return articleData.data.articleSortBySortKey.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedArticle = createAsyncThunk(
  "article/selected/article",
  async ({ articleID }) => {
    const response = await API.graphql({
      query: getArticle,
      variables: { id: articleID, filter: { active: { eq: true } } },
      authMode: "AWS_IAM",
    });

    return response.data.getArticle;
  }
);

export const selectedArticleComments = createAsyncThunk(
  "article/selected/articleComments",
  async ({ articleID }) => {
    const articleCommentData = await API.graphql({
      query: articleCommentSortByArticleID,
      variables: {
        articleID: articleID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
        // limit: 10,
      },
      authMode: "AWS_IAM",
    });

    return articleCommentData.data.articleCommentSortByArticleID.items;
  }
);

export const loadMoreArticleComments = createAsyncThunk(
  "article/selected/loadMoreArticleComments",
  async ({ articleID, nextToken }) => {
    const articleCommentData = await API.graphql({
      query: articleCommentSortByArticleID,
      variables: {
        articleID: articleID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
        limit: 10,
        nextToken: nextToken,
      },
      authMode: "AWS_IAM",
    });
    return articleCommentData.data.articleCommentSortByArticleID;
  }
);

export const postArticleComment = createAsyncThunk(
  "article/postArticleComment",
  async ({ createArticleCommentInput }) => {
    console.log("createArticleCommentInput", createArticleCommentInput);
    const response = await API.graphql(
      graphqlOperation(createArticleComment, {
        input: createArticleCommentInput,
      })
    );
    return response.data.createArticleComment;
  }
);

export const postArticleSubComment = createAsyncThunk(
  "article/postArticleSubComment",
  async ({ createArticleSubCommentInput }) => {
    console.log("createArticleSubCommentInput", createArticleSubCommentInput);
    // console.log(createArticleSubCommentInput);
    const response = await API.graphql(
      graphqlOperation(createArticleSubComment, {
        input: createArticleSubCommentInput,
      })
    );
    return response.data.createArticleSubComment;
  }
);

export const fetchTopics = createAsyncThunk("article/fetchTopics", async () => {
  const topicData = await API.graphql({
    query: listTopics,
    authMode: "AWS_IAM",
  });
  return topicData.data.listTopics.items;
});

export const postArticle = createAsyncThunk(
  "article/postArticle",
  async ({ createArticleInput }) => {
    const response = await API.graphql(
      graphqlOperation(createArticle, { input: createArticleInput })
    );
    return response;
  }
);

export const modifyArticle = createAsyncThunk(
  "article/modifyArticle",
  async ({ updateArticleInput }) => {
    const response = await API.graphql(
      graphqlOperation(updateArticle, { input: updateArticleInput })
    );
    return response;
  }
);
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    //有API call 的不能放这里
    removeSelectedArticle(state, action) {
      state.selected = { article: { articleComments: { nextToken: null } } };
      console.log("remove selected removeSelectedArticle successfully!");
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchArticles (pending, fulfilled, and rejected)
      .addCase(fetchArticles.pending, (state, action) => {
        state.fetchArticlesStatus = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.fetchArticlesStatus = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.fetchArticlesStatus = "failed";
        state.fetchArticlesError = action.error.message;
      })
      // Cases for status of selectedArticles (pending, fulfilled, and rejected)
      .addCase(selectedArticle.pending, (state, action) => {
        state.selectedArticleStatus = "loading";
      })
      .addCase(selectedArticle.fulfilled, (state, action) => {
        state.selectedArticleStatus = "succeeded";
        if (action.payload !== null) {
          state.selected.article = action.payload;
        } else {
          state.selected.article = { active: false };
        }
      })
      .addCase(selectedArticle.rejected, (state, action) => {
        state.selectedArticleStatus = "failed";
        state.selectedArticlesError = action.error.message;
      })
      // Cases for status of selectedArticleComments (pending, fulfilled, and rejected)
      .addCase(selectedArticleComments.pending, (state, action) => {
        state.selectedArticleCommentsStatus = "loading";
      })
      .addCase(selectedArticleComments.fulfilled, (state, action) => {
        state.selectedArticleCommentsStatus = "succeeded";
        state.selected.comments = action.payload;
      })
      .addCase(selectedArticleComments.rejected, (state, action) => {
        state.selectedArticleCommentsStatus = "failed";
        state.selectedArticleCommentsError = action.error.message;
      })
      // Cases for status of postLike (pending, fulfilled, and rejected)
      .addCase(loadMoreArticleComments.pending, (state, action) => {
        state.loadMoreArticleCommentsStatus = "loading";
      })
      .addCase(loadMoreArticleComments.fulfilled, (state, action) => {
        state.loadMoreArticleCommentsStatus = "succeeded";
        //! need to do later
      })
      .addCase(loadMoreArticleComments.rejected, (state, action) => {
        state.loadMoreArticleCommentsStatus = "failed";
        state.loadMoreArticleCommentsError = action.error.message;
      })
      // Cases for status of postArticleComment (pending, fulfilled, and rejected)
      .addCase(postArticleComment.pending, (state, action) => {
        state.postArticleCommentStatus = "loading";
      })
      .addCase(postArticleComment.fulfilled, (state, action) => {
        state.postArticleCommentStatus = "succeeded";
        console.log(
          "postArticleComment",
          state.selected.article.articleComments.items
        );
        state.selected.article.articleComments.items.unshift(action.payload);
      })
      .addCase(postArticleComment.rejected, (state, action) => {
        state.postArticleCommentStatus = "failed";
        state.postArticleCommentError = action.error.message;
      })
      // Cases for status of postArticleSubComment (pending, fulfilled, and rejected)
      .addCase(postArticleSubComment.pending, (state, action) => {
        state.postArticleSubCommentStatus = "loading";
      })
      .addCase(postArticleSubComment.fulfilled, (state, action) => {
        state.postArticleSubCommentStatus = "succeeded";
        state.selected.article.articleComments.items[
          action.meta.arg.idx
        ].articleSubComments.items.unshift(action.payload);
      })
      .addCase(postArticleSubComment.rejected, (state, action) => {
        state.postArticleSubCommentStatus = "failed";
        state.postArticleSubCommentError = action.error.message;
      })
      // Cases for status of removeLike (pending, fulfilled, and rejected)
      .addCase(fetchTopics.pending, (state, action) => {
        state.fetchTopicsStatus = "loading";
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.fetchTopicsStatus = "succeeded";
        state.topics = action.payload;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.fetchTopicsStatus = "failed";
        state.fetchTopicsError = action.error.message;
      })
      // Cases for status of postArticle (pending, fulfilled, and rejected)
      .addCase(postArticle.pending, (state, action) => {
        state.postArticleStatus = "loading";
      })
      .addCase(postArticle.fulfilled, (state, action) => {
        state.postArticleStatus = "succeeded";
        state.mutation.postArticle = action.payload;
      })
      .addCase(postArticle.rejected, (state, action) => {
        state.postArticleStatus = "failed";
        state.postArticleCommentError = action.error.message;
      })
      // Cases for status of updateArticle (pending, fulfilled, and rejected)
      .addCase(modifyArticle.pending, (state, action) => {
        state.modifyArticleStatus = "loading";
      })
      .addCase(modifyArticle.fulfilled, (state, action) => {
        state.modifyArticleStatus = "succeeded";
        state.mutation.updateArticle = action.payload;
      })
      .addCase(modifyArticle.rejected, (state, action) => {
        state.modifyArticleStatus = "failed";
        state.modifyArticleError = action.error.message;
      });
  },
});
export const { removeSelectedArticle } = articleSlice.actions;

export default articleSlice.reducer;
