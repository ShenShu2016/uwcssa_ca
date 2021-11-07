import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import {
  createForumPost,
  createForumPostComment,
  createForumPostSubComment,
} from "../../graphql/mutations";
import {
  forumPostCommentSortByForumPostID,
  forumPostSortByForumSubTopicID,
  forumPostSubCommentSortByForumPostCommentID,
  getForumPost,
  getForumPostComment,
  getForumSubTopic,
  getForumTopic,
  listForumPosts,
  listForumSubTopics,
  listForumTopics,
} from "../../graphql/queries";

const initialState = {
  forumTopics: [],
  forumSubTopics: [],
  forumPosts: [],
  selected: {
    forumTopic: {},
    forumSubTopic: { posts: { nextToken: null } },
    forumPost: { comments: { nextToken: null } },
    forumPostComment: { subComments: { nextToken: null } },
  },
  // selectedForumTopic: {},
  // selectedForumSubTopic: {
  //   forumSubTopic: {},
  //   posts: [],
  //   postsNextToken: "",
  // },
  // selectedForumPost: {
  //   forumPost: {},
  //   comments: [],
  //   commentsNextToken: "",
  // },
  // selectedForumPostComment: {
  //   forumPostComment: {},
  //   subComments: [],
  //   subCommentsNextToken: "",
  // },
  //forumTopic
  fetchForumTopicsStatus: "idle",
  fetchForumTopicsError: null,
  selectedForumTopicStatus: "idle",
  selectedForumTopicError: null,
  //forumSubTopic
  fetchForumSubTopicsStatus: "idle",
  fetchForumSubTopicsError: null,
  selectedForumSubTopicStatus: "idle",
  selectedForumSubTopicError: null,
  selectedForumSubTopicPostsStatus: "idle",
  selectedForumSubTopicPostsError: null,
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
      variables: { id: forumTopicID },
      authMode: "AWS_IAM",
    });
    return response.data.getForumTopic;
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
    return response.data.getForumSubTopic;
  }
);
export const selectedForumSubTopicPosts = createAsyncThunk(
  "forum/selectedForumSubTopicPosts",
  async ({ forumSubTopicID }) => {
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
    return forumSubTopicPostData.data.ForumPostSortByForumSubTopicID;
  }
);

//forumPost
export const fetchForumPosts = createAsyncThunk(
  "forum/fetchForumPosts",
  async () => {
    const forumPostData = await API.graphql({
      query: listForumPosts,
      authMode: "AWS_IAM",
    });
    return forumPostData.data.listForumPosts.items;
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
    return response.data.getForumPost;
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
    return forumPostCommentsData.data.ForumPostCommentSortByForumPostID;
  }
);

//forumPostComment
export const postForumPostComment = createAsyncThunk(
  "forum/postForumPostComment",
  async (createForumPostCommentInput) => {
    const response = await API.graphql(
      graphqlOperation(createForumPostComment, {
        input: createForumPostCommentInput,
      })
    );
    return { result: true, response };
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
      .ForumPostSubCommentSortByForumPostCommentID;
  }
);
export const postForumPostSubComment = createAsyncThunk(
  "forum/postForumPostSubComment",
  async (createForumPostSubCommentInput) => {
    const response = await API.graphql(
      graphqlOperation(createForumPostSubComment, {
        input: createForumPostSubCommentInput,
      })
    );
    return { result: true, response };
  }
);

const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    removeSelectedForumPost(state, action) {
      state.selected = { forumPost: { comments: { nextToken: null } } };
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
      //fetchForumSubTopics
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
        state.selected.forumSubTopic.posts = action.payload;
      })
      .addCase(selectedForumSubTopicPosts.rejected, (state, action) => {
        state.selectedForumSubTopicPostsStatus = "failed";
        state.selectedForumSubTopicPostsError = action.error.message;
      })
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
      });
  },
});
export const { removeSelectedForumPost } = forumSlice.actions;
export default forumSlice.reducer;
