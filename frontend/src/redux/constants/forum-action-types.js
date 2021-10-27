export const ActionTypes = {
//forumTopic
  SET_FORUMTOPICS: "forumTopics/setForumTopics",
  SELECTED_FORUMTOPIC: "forumTopic/selectedForumTopic",
  REMOVE_SELECTED_FORUMTOPIC: "forumTopic/removeSelectedForumTopic",
//forumSubTopic
  SET_FORUMSUBTOPICS: "forumSubTopics/setForumSubTopics",
  SELECTED_FORUMSUBTOPIC: "forumSubTopic/selectedForumSubTopic",
  REMOVE_SELECTED_FORUMSUBTOPIC: "forumSubTopic/removeSelectedForumSubTopic",
  SELECTED_FORUMSUBTOPIC_POSTS: "forumSubTopic/selectedForumSubTopicPosts",
  LOAD_MORE_FORUMSUBTOPIC_POSTS: "forumSubTopic/loadMorePosts",
//forumPost
  SET_FORUMPOSTS: "forumPosts/setForumPosts",
  POST_FORUMPOST_SUCCESS: "forumPosts/postSuccess",
  POST_FORUMPOST_FAIL: "forumPosts/postFail",
  POST_FORUMPOST_IMG_SUCCESS: "forumPosts/postImgSuccess",
  POST_FORUMPOST_IMG_FAIL: "forumPosts/postImgFail",

  SELECTED_FORUMPOST: "forumPost/selectedForumPost",
  REMOVE_SELECTED_FORUMPOST: "forumPost/removeSelectedForumPost",
  SELECTED_FORUMPOST_COMMENTS: "forumPost/selectedForumPostComments",
  LOAD_MORE_FORUMPOST_COMMENTS: "forumPost/loadMoreComments",

//forumPostComment
  SET_FORUMPOSTCOMMENTS: "forumPostComments/setForumPostComments",
  POST_FORUMPOST_COMMENT_SUCCESS: "forumPostComments/postSuccess",
  POST_FORUMPOST_COMMENT_FAIL: "forumPostComments/postFail",
  
  SELECTED_FORUMPOST_COMMENT: "forumPostComment/selectedForumPostComment",
  REMOVE_SELECTED_FORUMPOST_COMMENT: "forumPostComment/removeSelectForumPostComment",
  SELECTED_FORUMPOST_COMMENT_SUBCOMMENTS: "forumPostComment/selectedSubComments",
  LOAD_MORE_FORUMPOST_COMMENT_SUBCOMMENTS: "forumPostComment/loadMoreSubComments",

//forumPostCommentSubComment
  SET_FORUMPOSTSUBCOMMENTS: "forumPostSubComments/setForumPostSubComments",
  POST_FORUMPOST_SUBCOMMENT_SUCCESS: "forumPostSubComments/postSuccess",
  POST_FORUMPOST_SUBCOMMENT_FAIL: "forumPostSubComments/postFail",

  
};
