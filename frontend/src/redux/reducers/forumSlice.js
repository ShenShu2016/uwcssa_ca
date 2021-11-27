import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createForumPost,
  createForumPostComment,
  createForumPostSubComment,
} from "../../graphql/mutations";
import {
  forumPostCommentSortByForumPostID,
  forumPostSortByForumPostLastReplyAt,
  forumPostSortByForumSubTopicID,
  // forumPostSortBySortKey,
  forumPostSubCommentSortByForumPostCommentID,
  getForumPostComment,
  getForumSubTopic,
  listForumSubTopics,
} from "../../graphql/queries";
import {
  getForumPost,
  getForumTopic,
  // listForumPosts,
  forumPostSortBySortKey,
  listForumTopics,
} from "../CustomQuery/ForumQueries";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const initialState = {
  forumTopics: [],
  forumSubTopics: [],
  forumPosts: [],
  selected: {
    forumTopic: {},
    forumSubTopic: {},
    forumSubTopicPosts: {},
    forumSubTopicPostsLastReply: {},
    forumPost: { forumPostComments: { nextToken: null } },
  },

  //forumTopic
  fetchForumTopicsStatus: "idle",
  fetchForumTopicsError: null,
  selectedForumTopicStatus: "idle",
  selectedForumTopicError: null,
  selectedForumTopicDetailStatus: "idle",
  selectedForumTopicDetailError: null,
  //forumSubTopic
  fetchForumSubTopicsStatus: "idle",
  fetchForumSubTopicsError: null,
  selectedForumSubTopicStatus: "idle",
  selectedForumSubTopicError: null,
  selectedForumSubTopicPostsStatus: "idle",
  selectedForumSubTopicPostsError: null,
  selectedForumSubTopicPostsLastReplyStatus: "idle",
  selectedForumSubTopicPostsLastReplyError: null,

  //forumPost
  postForumPostStatus: "idle",
  postForumPostError: null,
  fetchForumPostsStatus: "idle",
  fetchForumPostsError: null,
  selectedForumPostStatus: "idle",
  selectedForumPostError: null,
  selectedForumPostCommentsStatus: "idle",
  selectedForumPostCommentsError: null,
  //forumPostComment
  selectedForumPostCommentStatus: "idle",
  selectedForumPostCommentError: null,
  postForumPostCommentStatus: "idle",
  postForumPostCommentError: null,
  //forumPostSubComment
  postForumPostSubCommentStatus: "idle",
  postForumPostSubCommentError: null,
};
//forumTopic
export const fetchForumTopics = createAsyncThunk(
  "forum/fetchForumTopics",
  async () => {
    const forumTopicData = await API.graphql({
      query: listForumTopics,
      authMode: "AWS_IAM",
    });
    return forumTopicData.data.listForumTopics.items;
  }
);
export const selectedForumTopic = createAsyncThunk(
  "forum/selectedForumTopic",
  async (forumTopicID) => {
    const response = await API.graphql({
      query: getForumTopic,
      variables: { id: forumTopicID, filter: { active: { eq: true } } },
      authMode: "AWS_IAM",
    });
    if (response.data.getForumTopic === null) {
      return { id: forumTopicID, description: "not-found" };
    } else {
      return response.data.getForumTopic;
    }
  }
);
//forumSubTopic
export const fetchForumSubTopics = createAsyncThunk(
  "forum/fetchForumSubTopics",
  async () => {
    const forumSubTopicData = await API.graphql({
      query: listForumSubTopics,
      authMode: "AWS_IAM",
    });
    return forumSubTopicData.data.listForumSubTopics.items;
  }
);
export const selectedForumSubTopic = createAsyncThunk(
  "forum/selectedForumSubTopic",
  async (forumSubTopicID) => {
    const response = await API.graphql({
      query: getForumSubTopic,
      variables: { id: forumSubTopicID },
      authMode: "AWS_IAM",
    });
    if (response.data.getForumSubTopic === null) {
      return { id: forumSubTopicID, description: "not-found" };
    } else {
      return response.data.getForumSubTopic;
    }
  }
);
export const selectedForumSubTopicPosts = createAsyncThunk(
  "forum/selectedForumSubTopicPosts",
  async (forumSubTopicID) => {
    const forumSubTopicPostData = await API.graphql({
      query: forumPostSortByForumSubTopicID,
      variables: {
        forumSubTopicID: forumSubTopicID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
        // limit: 4,
      },
      authMode: "AWS_IAM",
    });
    return forumSubTopicPostData.data.forumPostSortByForumSubTopicID;
  }
);
export const selectedForumSubTopicPostsLastReply = createAsyncThunk(
  "forum/selectedForumSubTopicPostsLastReply",
  async (forumSubTopicID) => {
    const forumSubTopicPostData = await API.graphql({
      query: forumPostSortByForumPostLastReplyAt, //这个我改成初始的了，你的那个好像有点问题你可以看看
      variables: {
        forumSubTopicID: forumSubTopicID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
        // limit: 4,
      },
      authMode: "AWS_IAM",
    });
    return forumSubTopicPostData.data.forumPostSortByForumPostLastReplyAt;
  }
);
//forumPost
export const fetchForumPosts = createAsyncThunk(
  "forum/fetchForumPosts",
  async () => {
    const forumPostData = await API.graphql({
      query: forumPostSortBySortKey,
      variables: {
        sortKey:"SortKey",
        sortDirection: "DESC",
        filter:{active:{eq:true}},
        limit:5,
      },
      authMode: "AWS_IAM",
    });
    return forumPostData.data.forumPostSortBySortKey.items;
  }
);

export const postForumPost = createAsyncThunk(
  "forum/postForumPost",
  async (createForumPostInput) => {
    const response = await API.graphql(
      graphqlOperation(createForumPost, { input: createForumPostInput })
    );
    return { result: true, response };
  }
);
export const selectedForumPost = createAsyncThunk(
  "forum/selectedForumPost",
  async (forumPostID) => {
    const response = await API.graphql({
      query: getForumPost,
      variables: { id: forumPostID, filter: { active: { eq: true } } },
      authMode: "AWS_IAM",
    });
    if (response.data.getForumPost === null) {
      return { id: forumPostID, description: "not-found" };
    } else {
      return response.data.getForumPost;
    }
  }
);
export const selectedForumPostComments = createAsyncThunk(
  "forum/selectedForumPostComments",
  async ({ forumPostID }) => {
    const forumPostCommentsData = await API.graphql({
      query: forumPostCommentSortByForumPostID,
      variables: {
        forumPostID: forumPostID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
        // limit: 4,
      },
      authMode: "AWS_IAM",
    });
    return forumPostCommentsData.data.forumPostCommentSortByForumPostID;
  }
);

//forumPostComment
export const postForumPostComment = createAsyncThunk(
  "forum/postForumPostComment",
  async (createForumPostCommentInput) => {
    console.log(createForumPostCommentInput);
    const response = await API.graphql(
      graphqlOperation(createForumPostComment, {
        input: createForumPostCommentInput,
      })
    );
    // console.log(response.data.createForumPostComment)
    return response.data.createForumPostComment;
  }
);

export const selectedForumPostComment = createAsyncThunk(
  "forum/selectedForumPostComment",
  async (forumPostCommentID) => {
    const response = await API.graphql({
      query: getForumPostComment,
      variables: { id: forumPostCommentID, filter: { active: { eq: true } } },
      authMode: "AWS_IAM",
    });
    return response.data.getForumPostComment;
  }
);
export const selectedForumPostCommentSubComments = createAsyncThunk(
  "forum/selectedForumPostCommentSubComments",
  async ({ forumPostCommentID }) => {
    const forumPostCommentData = await API.graphql({
      query: forumPostSubCommentSortByForumPostCommentID,
      variables: {
        forumPostCommentID: forumPostCommentID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
        // limit: 4,
      },
      authMode: "AWS_IAM",
    });
    return forumPostCommentData.data
      .forumPostSubCommentSortByForumPostCommentID;
  }
);
export const postForumPostSubComment = createAsyncThunk(
  "forum/postForumPostSubComment",
  async ({ createForumPostSubCommentInput }) => {
    console.log(createForumPostSubCommentInput);
    const response = await API.graphql(
      graphqlOperation(createForumPostSubComment, {
        input: createForumPostSubCommentInput,
      })
    );

    return response.data.createForumPostSubComment;
  }
);

const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    removeSelectedForumTopic(state, action) {
      state.selected = {
        forumTopic: {},
        forumSubTopic: {},
        forumSubTopicPosts: {},
        forumSubTopicPostsLastReply: {},
        forumPost: { forumPostComments: { nextToken: null } },
      };
    },
    removeSelectedForumSubTopic(state, action) {
      state.selected = {
        forumTopic: {},
        forumSubTopic: {},
        forumSubTopicPosts: {},
        forumSubTopicPostsLastReply: {},
        forumPost: { forumPostComments: { nextToken: null } },
      };
    },
    removeSelectedForumPost(state, action) {
      state.selected = {
        forumTopic: {},
        forumSubTopic: {},
        forumSubTopicPosts: {},
        forumSubTopicPostsLastReply: {},
        forumPost: { forumPostComments: { nextToken: null } },
      };
    },
  },
  extraReducers(builder) {
    builder
      //fetchForumTopics
      .addCase(fetchForumTopics.pending, (state, action) => {
        state.fetchForumTopicsStatus = "loading";
      })
      .addCase(fetchForumTopics.fulfilled, (state, action) => {
        state.fetchForumTopicsStatus = "succeeded";
        state.forumTopics = action.payload;
      })
      .addCase(fetchForumTopics.rejected, (state, action) => {
        state.fetchForumTopicsStatus = "failed";
        state.fetchForumTopicsError = action.error.message;
      })
      //selectedForumTopic
      .addCase(selectedForumTopic.pending, (state, action) => {
        state.selectedForumTopicStatus = "loading";
      })
      .addCase(selectedForumTopic.fulfilled, (state, action) => {
        state.selectedForumTopicStatus = "succeeded";
        state.selected.forumTopic = action.payload;
      })
      .addCase(selectedForumTopic.rejected, (state, action) => {
        state.selectedForumTopicStatus = "failed";
        state.selectedForumTopicError = action.error.message;
      })
      .addCase(fetchForumSubTopics.pending, (state, action) => {
        state.fetchForumSubTopicsStatus = "loading";
      })
      .addCase(fetchForumSubTopics.fulfilled, (state, action) => {
        state.fetchForumSubTopicsStatus = "succeeded";
        state.forumSubTopics = action.payload;
      })
      .addCase(fetchForumSubTopics.rejected, (state, action) => {
        state.fetchForumSubTopicsStatus = "failed";
        state.fetchForumSubTopicsError = action.error.message;
      })
      //selectedForumSubTopic
      .addCase(selectedForumSubTopic.pending, (state, action) => {
        state.selectedForumSubTopicStatus = "loading";
      })
      .addCase(selectedForumSubTopic.fulfilled, (state, action) => {
        state.selectedForumSubTopicStatus = "succeeded";
        state.selected.forumSubTopic = action.payload;
      })
      .addCase(selectedForumSubTopic.rejected, (state, action) => {
        state.selectedForumSubTopicStatus = "failed";
        state.selectedForumSubTopicError = action.error.message;
      })
      //selectedForumSubTopicPosts
      .addCase(selectedForumSubTopicPosts.pending, (state, action) => {
        state.selectedForumSubTopicPostsStatus = "loading";
      })
      .addCase(selectedForumSubTopicPosts.fulfilled, (state, action) => {
        state.selectedForumSubTopicPostsStatus = "succeeded";
        state.selected.forumSubTopicPosts = action.payload;
      })
      .addCase(selectedForumSubTopicPosts.rejected, (state, action) => {
        state.selectedForumSubTopicPostsStatus = "failed";
        state.selectedForumSubTopicPostsError = action.error.message;
      })
      //selectedForumSubTopicPostsLastReply
      .addCase(selectedForumSubTopicPostsLastReply.pending, (state, action) => {
        state.selectedForumSubTopicPostsLastReplyStatus = "loading";
      })
      .addCase(
        selectedForumSubTopicPostsLastReply.fulfilled,
        (state, action) => {
          state.selectedForumSubTopicPostsLastReplyStatus = "succeeded";
          state.selected.forumSubTopicPostsLastReply = action.payload;
        }
      )
      .addCase(
        selectedForumSubTopicPostsLastReply.rejected,
        (state, action) => {
          state.selectedForumSubTopicPostsLastReplyStatus = "failed";
          state.selectedForumSubTopicPostsLastReplyError = action.error.message;
        }
      )
      //fetchForumPosts
      .addCase(fetchForumPosts.pending, (state, action) => {
        state.fetchForumPostsStatus = "loading";
      })
      .addCase(fetchForumPosts.fulfilled, (state, action) => {
        state.fetchForumPostsStatus = "succeeded";
        state.forumPosts = action.payload;
      })
      .addCase(fetchForumPosts.rejected, (state, action) => {
        state.fetchForumPostsStatus = "failed";
        state.fetchForumPostsError = action.error.message;
      })
      //selectedForumPost
      .addCase(selectedForumPost.pending, (state, action) => {
        state.selectedForumPostStatus = "loading";
      })
      .addCase(selectedForumPost.fulfilled, (state, action) => {
        state.selectedForumPostStatus = "succeeded";
        state.selected.forumPost = action.payload;
      })
      .addCase(selectedForumPost.rejected, (state, action) => {
        state.selectedForumPostStatus = "failed";
        state.selectedForumPostError = action.error.message;
      })
      //postForumPostComment
      .addCase(postForumPostComment.pending, (state, action) => {
        state.postForumPostCommentStatus = "loading";
      })
      .addCase(postForumPostComment.fulfilled, (state, action) => {
        state.postForumPostCommentStatus = "succeeded";
        console.log(
          "postArticleComment",
          state.selected.forumPost.forumPostComments.items
        );
        state.selected.forumPost.forumPostComments.items.unshift(
          action.payload
        );
      })
      .addCase(postForumPostComment.rejected, (state, action) => {
        state.postForumPostCommentStatus = "failed";
        state.postForumPostCommentError = action.error.message;
      })
      //postForumPostSubComment
      .addCase(postForumPostSubComment.pending, (state, action) => {
        state.postForumPostSubCommentStatus = "loading";
      })
      .addCase(postForumPostSubComment.fulfilled, (state, action) => {
        state.postForumPostSubCommentStatus = "succeeded";
        state.selected.forumPost.forumPostComments.items[
          action.meta.arg.idx
        ].forumPostSubComments.items.unshift(action.payload);
      })
      .addCase(postForumPostSubComment.rejected, (state, action) => {
        state.postForumPostSubCommentStatus = "failed";
        state.postForumPostSubCommentError = action.error.message;
      });
  },
});
export const {
  removeSelectedForumTopic,
  removeSelectedForumSubTopic,
  removeSelectedForumPost,
} = forumSlice.actions;
export default forumSlice.reducer;
