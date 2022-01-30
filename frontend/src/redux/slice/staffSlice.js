import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import API from "@aws-amplify/api";
import { eventSortBySortKey } from "../CustomQuery/StaffQueries";

const initialState = {
  events: [],
  topics: [],
  types: [],
  //  Status: "idle",
  //  Error: null,
  fetchEvents_StaffStatus: "idle",
  fetchEvents_StaffError: null,
  //   selectedArticleStatus: "idle",
  //   selectedArticlesError: null,
  //   selectedArticleCommentsStatus: "idle",
  //   selectedArticleCommentsError: null,
  //   loadMoreArticleCommentsStatus: "idle",
  //   loadMoreArticleCommentsError: null,
  //   removeSelectedArticleStatus: "idle",
  //   removeSelectedArticleError: null,
  //   postArticleCommentStatus: "idle",
  //   postArticleCommentError: null,
  //   postArticleSubCommentStatus: "idle",
  //   postArticleSubCommentError: null,
  //   fetchTopicsStatus: "idle",
  //   fetchTopicsError: null,
  //   postArticleStatus: "idle",
  //   postArticleError: null,
};

export const fetchEvents_Staff = createAsyncThunk(
  "staff/fetchEvents_Staff",
  async () => {
    try {
      const eventData = await API.graphql({
        query: eventSortBySortKey,
        variables: {
          sortKey: "SortKey",
          sortDirection: "DESC",
          // filter: { active: { eq: true } },
        },
        // authMode: "AWS_IAM",
      });

      return eventData.data.eventSortBySortKey.items;
    } catch (error) {
      console.log(error);
    }
  }
);

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    //有API call 的不能放这里
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchEvents_Staff (pending, fulfilled, and rejected)
      .addCase(fetchEvents_Staff.pending, (state, action) => {
        state.fetchEvents_StaffStatus = "loading";
      })
      .addCase(fetchEvents_Staff.fulfilled, (state, action) => {
        state.fetchEvents_StaffStatus = "succeeded";
        state.events = action.payload;
      })
      .addCase(fetchEvents_Staff.rejected, (state, action) => {
        state.fetchEvents_StaffStatus = "failed";
        state.fetchEvents_StaffError = action.error.message;
      });
    // // Cases for status of selectedArticles (pending, fulfilled, and rejected)
    // .addCase(selectedArticle.pending, (state, action) => {
    //   state.selectedArticleStatus = "loading";
    // })
    // .addCase(selectedArticle.fulfilled, (state, action) => {
    //   state.selectedArticleStatus = "succeeded";
    //   state.selected.article = action.payload;
    // })
    // .addCase(selectedArticle.rejected, (state, action) => {
    //   state.selectedArticleStatus = "failed";
    //   state.selectedArticlesError = action.error.message;
    // })
    // // Cases for status of selectedArticleComments (pending, fulfilled, and rejected)
    // .addCase(selectedArticleComments.pending, (state, action) => {
    //   state.selectedArticleCommentsStatus = "loading";
    // })
    // .addCase(selectedArticleComments.fulfilled, (state, action) => {
    //   state.selectedArticleCommentsStatus = "succeeded";
    //   state.selected.comments = action.payload;
    // })
    // .addCase(selectedArticleComments.rejected, (state, action) => {
    //   state.selectedArticleCommentsStatus = "failed";
    //   state.selectedArticleCommentsError = action.error.message;
    // })
    // // Cases for status of postLike (pending, fulfilled, and rejected)
    // .addCase(loadMoreArticleComments.pending, (state, action) => {
    //   state.loadMoreArticleCommentsStatus = "loading";
    // })
    // .addCase(loadMoreArticleComments.fulfilled, (state, action) => {
    //   state.loadMoreArticleCommentsStatus = "succeeded";
    //   //! need to do later
    // })
    // .addCase(loadMoreArticleComments.rejected, (state, action) => {
    //   state.loadMoreArticleCommentsStatus = "failed";
    //   state.loadMoreArticleCommentsError = action.error.message;
    // })
    // // Cases for status of postArticleComment (pending, fulfilled, and rejected)
    // .addCase(postArticleComment.pending, (state, action) => {
    //   state.postArticleCommentStatus = "loading";
    // })
    // .addCase(postArticleComment.fulfilled, (state, action) => {
    //   state.postArticleCommentStatus = "succeeded";
    //   console.log(
    //     "postArticleComment",
    //     state.selected.article.articleComments.items
    //   );
    //   state.selected.article.articleComments.items.unshift(action.payload);
    // })
    // .addCase(postArticleComment.rejected, (state, action) => {
    //   state.postArticleCommentStatus = "failed";
    //   state.postArticleCommentError = action.error.message;
    // })
    // // Cases for status of postArticleSubComment (pending, fulfilled, and rejected)
    // .addCase(postArticleSubComment.pending, (state, action) => {
    //   state.postArticleSubCommentStatus = "loading";
    // })
    // .addCase(postArticleSubComment.fulfilled, (state, action) => {
    //   state.postArticleSubCommentStatus = "succeeded";
    //   state.selected.article.articleComments.items[
    //     action.meta.arg.idx
    //   ].articleSubComments.items.unshift(action.payload);
    // })
    // .addCase(postArticleSubComment.rejected, (state, action) => {
    //   state.postArticleSubCommentStatus = "failed";
    //   state.postArticleSubCommentError = action.error.message;
    // })
    // // Cases for status of removeLike (pending, fulfilled, and rejected)
    // .addCase(fetchTopics.pending, (state, action) => {
    //   state.fetchArticlesStatus = "loading";
    // })
    // .addCase(fetchTopics.fulfilled, (state, action) => {
    //   state.fetchArticlesStatus = "succeeded";
    //   state.topics = action.payload;
    // })
    // .addCase(fetchTopics.rejected, (state, action) => {
    //   state.fetchArticlesStatus = "failed";
    //   state.fetchTopicsError = action.error.message;
    // })
    // // Cases for status of postArticle (pending, fulfilled, and rejected)
    // .addCase(postArticle.pending, (state, action) => {
    //   state.postArticleStatus = "loading";
    // })
    // .addCase(postArticle.fulfilled, (state, action) => {
    //   state.postArticleStatus = "succeeded";
    //   state.mutation.postArticle = action.payload;
    // })
    // .addCase(postArticle.rejected, (state, action) => {
    //   state.postArticleStatus = "failed";
    //   state.postArticleCommentError = action.error.message;
    // });
  },
});

export default staffSlice.reducer;
