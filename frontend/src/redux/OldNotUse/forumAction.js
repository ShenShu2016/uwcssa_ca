// import {
//   createForumPost,
//   createForumPostComment,
//   createForumPostSubComment,
// } from "../../graphql/mutations";
// import {
//   forumPostCommentSortByForumPostID,
//   forumPostSortByForumSubTopicID,
//   forumPostSubCommentSortByForumPostCommentID,
//   getForumPost,
//   getForumPostComment,
//   getForumSubTopic,
//   getForumTopic,
//   listForumPosts,
//   listForumSubTopics,
//   listForumTopics,
// } from "../../graphql/queries";

// import API from "@aws-amplify/api";
// import { ActionTypes } from "./forum-action-types";
// import Storage from "@aws-amplify/storage";
// import { graphqlOperation } from "@aws-amplify/api-graphql";
// import { v4 as uuid } from "uuid";

// //ForumTopic
// export const setForumTopics = () => async (dispatch) => {
//   try {
//     const forumTopicData = await API.graphql({
//       query: listForumTopics,
//       authMode: "AWS_IAM",
//     });
//     console.log("forumTopicData", forumTopicData);
//     dispatch({
//       type: ActionTypes.SET_FORUMTOPICS,
//       payload: forumTopicData.data.listForumTopics.items,
//     });
//     // dispatch(setForumTopics());
//   } catch (error) {
//     console.log("error on fetching Forum Topics", error);
//   }
// };
// export const selectedForumTopic = (forumTopicID) => async (dispatch) => {
//   try {
//     const response = await API.graphql({
//       query: getForumTopic,
//       variables: { id: forumTopicID },
//       authMode: "AWS_IAM",
//     });
//     dispatch({
//       type: ActionTypes.SELECTED_FORUMTOPIC,
//       payload: response.data.getForumTopic,
//     });
//   } catch (error) {
//     console.log("error on selecting ForumTopic", error);
//   }
// };

// export const removeSelectedForumTopic = () => async (dispatch) => {
//   dispatch({
//     type: ActionTypes.REMOVE_SELECTED_FORUMTOPIC,
//   });
// };

// //ForumSubTopic
// export const setForumSubTopics = () => async (dispatch) => {
//   try {
//     const forumSubTopicData = await API.graphql({
//       query: listForumSubTopics,
//       authMode: "AWS_IAM",
//     });
//     console.log("forumSubTopicData", forumSubTopicData);
//     dispatch({
//       type: ActionTypes.SET_FORUMSUBTOPICS,
//       payload: forumSubTopicData.data.listForumSubTopics.items,
//     });
//   } catch (error) {
//     console.log("error on fetching Forum Sub Topics", error);
//   }
// };

// export const selectedForumSubTopic = (forumSubTopicID) => async (dispatch) => {
//   try {
//     const response = await API.graphql({
//       query: getForumSubTopic,
//       variables: { id: forumSubTopicID },
//       authMode: "AWS_IAM",
//     });
//     dispatch({
//       type: ActionTypes.SELECTED_FORUMSUBTOPIC,
//       payload: response.data.getForumSubTopic,
//     });
//   } catch (error) {
//     console.log("error on selecting ForumSubTopic", error);
//   }
// };
// export const removeSelectedForumSubTopic = () => async (dispatch) => {
//   dispatch({
//     type: ActionTypes.REMOVE_SELECTED_FORUMSUBTOPIC,
//   });
// };

// export const selectedForumSubTopicPosts =
//   (forumSubTopicID) => async (dispatch) => {
//     console.log("selectedForumSubTopicPosts,forumSubTopicID", forumSubTopicID);
//     try {
//       const forumSubTopicPostData = await API.graphql({
//         query: forumPostSortByForumSubTopicID,
//         variables: {
//           forumSubTopicID: forumSubTopicID,
//           sortDirection: "DESC",
//           filter: { active: { eq: true } },
//           // limit: 4,
//         },
//         authMode: "AWS_IAM",
//       });
//       console.log("forumSubTopicPostData", forumSubTopicPostData);
//       dispatch({
//         type: ActionTypes.SELECTED_FORUMSUBTOPIC_POSTS,
//         payload: forumSubTopicPostData.data.ForumPostSortByForumSubTopicID,
//       });
//     } catch (error) {
//       console.log("error on selectedforumSubTopicPosts", error);
//     }
//   };

// export const loadMoreForumSubTopicPosts =
//   (forumSubTopicID, nextToken) => async (dispatch) => {
//     try {
//       const forumSubTopicPostsData = await API.graphql({
//         query: forumPostSortByForumSubTopicID,
//         variables: {
//           forumSubTopicID: forumSubTopicID,
//           sortDirection: "DESC",
//           filter: { active: { eq: true } },
//           limit: 3,
//           nextToken: nextToken,
//         },
//         authMode: "AWS_IAM",
//       });
//       // console.log("More forumSubTopic Posts", forumSubTopicPostsData);
//       dispatch({
//         type: ActionTypes.LOAD_MORE_FORUMSUBTOPIC_POSTS,
//         payload: forumSubTopicPostsData.data.forumPostSortByForumSubTopicID,
//       });
//     } catch (error) {
//       console.log("error on Load more data", error);
//     }
//   };
// //ForumPost
// export const setForumPosts = () => async (dispatch) => {
//   try {
//     const forumPostData = await API.graphql({
//       query: listForumPosts,
//       authMode: "AWS_IAM",
//     });
//     dispatch({
//       type: ActionTypes.SET_FORUMPOSTS,
//       payload: forumPostData.data.listForumPosts.items,
//     });
//     console.log(forumPostData);
//   } catch (error) {
//     console.log("error on fetching ForumPost", error);
//   }
// };

// export const postForumPost = (createForumPostInput) => async (dispatch) => {
//   console.log(createForumPostInput);
//   try {
//     const response = await API.graphql(
//       graphqlOperation(createForumPost, { input: createForumPostInput })
//     );
//     dispatch({
//       type: ActionTypes.POST_FORUMPOST_SUCCESS,
//       payload: [response.data.createForumPost],
//     });
//     console.log(response);
//     return {
//       result: true,
//       response: response,
//     };
//   } catch (error) {
//     dispatch({
//       type: ActionTypes.POST_FORUMPOST_FAIL,
//       payload: error,
//     });
//     return {
//       result: false,
//       response: error,
//     };
//   }
// };
// export const postForumPostImg = (imgData) => async (dispatch) => {
//   try {
//     const response = await Storage.put(
//       `forumPost/${uuid()}${imgData.name}`,
//       imgData,
//       {
//         contentType: "image/*",
//       }
//     );
//     dispatch({
//       type: ActionTypes.POST_FORUMPOST_IMG_SUCCESS,
//       payload: response,
//     });
//     return response;
//   } catch (error) {
//     dispatch({
//       type: ActionTypes.POST_FORUMPOST_IMG_FAIL,
//       payload: error,
//     });
//     console.log(error);
//   }
// };

// export const selectedForumPost = (forumPostID) => async (dispatch) => {
//   try {
//     // console.log(forumPostID);
//     const response = await API.graphql({
//       query: getForumPost,
//       variables: { id: forumPostID, filter: { active: { eq: true } } },
//       authMode: "AWS_IAM",
//     });
//     dispatch({
//       type: ActionTypes.SELECTED_FORUMPOST,
//       payload: response.data.getForumPost,
//     });
//   } catch (error) {
//     console.log("error on selecting ForumPost", error);
//   }
// };

// export const removeSelectedForumPost = (forumPostId) => async (dispatch) => {
//   dispatch({
//     type: ActionTypes.REMOVE_SELECTED_FORUMPOST,
//   });
// };

// export const selectedForumPostComments = (forumPostID) => async (dispatch) => {
//   console.log("selectedForumPostComments,forumPostID", forumPostID);
//   try {
//     const forumPostCommentsData = await API.graphql({
//       query: forumPostCommentSortByForumPostID,
//       variables: {
//         forumPostID: forumPostID,
//         sortDirection: "DESC",
//         filter: { active: { eq: true } },
//         // limit: 4,
//       },
//       authMode: "AWS_IAM",
//     });
//     console.log("forumSubTopicPostData", forumPostCommentsData);
//     dispatch({
//       type: ActionTypes.SELECTED_FORUMPOST_COMMENTS,
//       payload: forumPostCommentsData.data.ForumPostCommentSortByForumPostID,
//     });
//   } catch (error) {
//     console.log("error on selectedForumPostComments", error);
//   }
// };
// export const loadMoreForumPostComments =
//   (forumPostID, nextToken) => async (dispatch) => {
//     try {
//       const forumPostCommentsData = await API.graphql({
//         query: forumPostCommentSortByForumPostID,
//         variables: {
//           forumPostID: forumPostID,
//           sortDirection: "DESC",
//           filter: { active: { eq: 1 } },
//           limit: 3,
//           nextToken: nextToken,
//         },
//         authMode: "AWS_IAM",
//       });
//       // console.log("More forumPost Comments", forumPostCommentsData);
//       dispatch({
//         type: ActionTypes.LOAD_MORE_FORUMPOST_COMMENTS,
//         payload: forumPostCommentsData.data.forumPostCommentSortByForumPostID,
//       });
//       return true;
//     } catch (error) {
//       console.log("error on Load more data", error);
//       return false;
//     }
//   };
// //ForumPostComment
// export const postForumPostComment =
//   (createForumPostCommentInput) => async (dispatch) => {
//     try {
//       const response = await API.graphql(
//         graphqlOperation(createForumPostComment, {
//           input: createForumPostCommentInput,
//         })
//       );

//       dispatch({
//         type: ActionTypes.POST_FORUMPOST_COMMENT_SUCCESS,
//         payload: [response.data.createForumPostComment],
//       });
//       dispatch(
//         selectedForumPostComments(createForumPostCommentInput.forumPostID)
//       );
//       return {
//         result: true,
//         response: response,
//       };
//     } catch (error) {
//       console.log("error on posting ForumPostComment", error);
//       dispatch({
//         type: ActionTypes.POST_FORUMPOST_COMMENT_FAIL,
//       });
//       return {
//         result: false,
//         error: error,
//       };
//     }
//   };

// export const selectedForumPostComment =
//   (forumPostCommentID) => async (dispatch) => {
//     try {
//       const response = await API.graphql({
//         query: getForumPostComment,
//         variables: { id: forumPostCommentID, filter: { active: { eq: true } } },
//         authMode: "AWS_IAM",
//       });
//       dispatch({
//         type: ActionTypes.SELECTED_FORUMPOST_COMMENT,
//         payload: response.data.getForumPostComment,
//       });
//     } catch (error) {
//       console.log("error on selecting ForumPostComment", error);
//     }
//   };
// export const removeSelectedForumPostComment =
//   (forumPostCommentID) => async (dispatch) => {
//     dispatch({
//       type: ActionTypes.REMOVE_SELECTED_FORUMPOST_COMMENT,
//     });
//   };

// export const selectedForumPostCommentSubComments =
//   (forumPostCommentID) => async (dispatch) => {
//     console.log("forumPostCommentID", forumPostCommentID);
//     try {
//       const forumPostCommentData = await API.graphql({
//         query: forumPostSubCommentSortByForumPostCommentID,
//         variables: {
//           forumPostCommentID: forumPostCommentID,
//           sortDirection: "DESC",
//           filter: { active: { eq: true } },
//           // limit: 4,
//         },
//         authMode: "AWS_IAM",
//       });
//       console.log("forumPostCommentData", forumPostCommentData);
//       dispatch({
//         type: ActionTypes.SELECTED_FORUMPOST_COMMENT_SUBCOMMENTS,
//         payload:
//           forumPostCommentData.data.ForumPostSubCommentSortByForumPostCommentID,
//       });
//     } catch (error) {
//       console.log("error on selectedForumPostCommentSubComments", error);
//     }
//   };
// export const loadMoreForumPostCommentSubComments =
//   (forumPostCommentID, nextToken) => async (dispatch) => {
//     try {
//       const forumSubTopicPostsData = await API.graphql({
//         query: forumPostSubCommentSortByForumPostCommentID,
//         variables: {
//           forumPostCommentID: forumPostCommentID,
//           sortDirection: "DESC",
//           // filter: { active: { eq: 1 } },
//           limit: 3,
//           nextToken: nextToken,
//         },
//         authMode: "AWS_IAM",
//       });
//       // console.log("More forumSubTopic Posts", forumSubTopicPostsData);
//       dispatch({
//         type: ActionTypes.LOAD_MORE_FORUMPOST_COMMENT_SUBCOMMENTS,
//         payload: forumSubTopicPostsData.data.forumPostSortByForumSubTopicID,
//       });
//       return true;
//     } catch (error) {
//       console.log("error on Load more data", error);
//       return false;
//     }
//   };

// //forumPostSubComment
// export const postForumPostSubComment =
//   (createForumPostSubCommentInput) => async (dispatch) => {
//     try {
//       const response = await API.graphql(
//         graphqlOperation(createForumPostSubComment, {
//           input: createForumPostSubCommentInput,
//         })
//       );

//       dispatch({
//         type: ActionTypes.POST_FORUMPOST_SUBCOMMENT_SUCCESS,
//         payload: response,
//       });

//       dispatch(
//         selectedForumPostComment(
//           createForumPostSubCommentInput.forumPostCommentID
//         )
//       );
//       return {
//         result: true,
//         response: response,
//       };
//     } catch (error) {
//       console.log("error on posting ForumPostSubComment", error);
//       dispatch({
//         type: ActionTypes.POST_FORUMPOST_SUBCOMMENT_FAIL,
//       });
//       return {
//         result: false,
//         error: error,
//       };
//     }
//   };

// //Delete the forum post SubComment
// // export const deleteForumPostSubComment =
// //   (deleteForumPostSubCommentInput) => async (dispatch) => {
// //     try {
// //       console.log(deleteForumPostSubCommentInput);
// //       const response = await API.graphql(
// //         graphqlOperation(deleteForumPostSubComment, {
// //           input: deleteForumPostSubCommentInput,
// //         })
// //       );
// //       dispatch({
// //         type: ActionTypes.REMOVE_FORUMPOST_SUBCOMMENT_SUCCESS,
// //         payload: response,
// //       });
// //       dispatch(
// //         selectedForumPostComment(
// //           deleteForumPostSubCommentInput.forumPostSubCommentForumPostCommentId
// //         )
// //       );
// //     } catch (error) {
// //       console.log("error on delete ForumPostSubComment", error);
// //       dispatch({
// //         type: ActionTypes.REMOVE_FORUMPOST_SUBCOMMENT_FAIL,
// //       });
// //     }
// //   };
