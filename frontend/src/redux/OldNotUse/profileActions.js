// import {
//   createUserEducation,
//   createUserExperience,
//   updateUser,
//   updateUserEducation,
//   updateUserExperience,
// } from "../../graphql/mutations";

// import API from "@aws-amplify/api";
// import { ActionTypes } from "../constants/profile-action-types";
// import { getUser } from "../../graphql/queries";
// import { graphqlOperation } from "@aws-amplify/api-graphql";

// export const selectedProfile = (username) => async (dispatch) => {
//   try {
//     const response = await API.graphql({
//       query: getUser,
//       variables: { id: username },
//       authMode: "AWS_IAM",
//     });
//     dispatch({
//       type: ActionTypes.SELECTED_USER,
//       payload: response.data.getUser,
//     });
//   } catch (error) {
//     console.log("error on selecting User", error);
//   }
// };

// export const putUserProfile = (updateUserInput) => async (dispatch) => {
//   try {
//     const response = await API.graphql(
//       graphqlOperation(updateUser, {
//         input: updateUserInput,
//       })
//     );
//     dispatch({
//       type: ActionTypes.UPDATE_USER_INFO_SUCCESS,
//       payload: response.data.updateUser,
//     });
//   } catch (error) {
//     dispatch({
//       type: ActionTypes.UPDATE_USER_INFO_FAIL,
//       payload: error,
//     });
//     console.log("error on update User Info", error);
//   }
// };

// export const removeSelectedProfile = () => async (dispatch) => {
//   dispatch({
//     type: ActionTypes.REMOVE_SELECTED_PROFILE,
//   });
// };

// export const postUserEducation =
//   (createUserEducationInput) => async (dispatch) => {
//     try {
//       const response = await API.graphql(
//         graphqlOperation(createUserEducation, {
//           input: createUserEducationInput,
//         })
//       );
//       dispatch({
//         type: ActionTypes.POST_USER_EDUCATION_SUCCESS,
//         payload: response,
//       });
//       dispatch(
//         selectedProfile(response.data.createUserEducation.user.username)
//       );
//     } catch (error) {
//       console.log("error on posting User Education", error);
//       dispatch({
//         type: ActionTypes.POST_USER_EDUCATION_FAIL,
//         payload: error,
//       });
//     }
//   };

// export const putUserEducation =
//   (updateUserEducationInput) => async (dispatch) => {
//     try {
//       const response = await API.graphql(
//         graphqlOperation(updateUserEducation, {
//           input: updateUserEducationInput,
//         })
//       );
//       dispatch({
//         type: ActionTypes.UPDATE_USER_EDUCATION_SUCCESS,
//         payload: response.data.updateUserEducation,
//       });
//       dispatch(
//         selectedProfile(response.data.updateUserEducation.user.username)
//       );
//       //用来刷新页面的
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.UPDATE_USER_EDUCATION_FAIL,
//         payload: error,
//       });
//       console.log("error on update User Education", error);
//     }
//   };

// export const postUserExperience =
//   (createUserExperienceInput) => async (dispatch) => {
//     try {
//       const response = await API.graphql(
//         graphqlOperation(createUserExperience, {
//           input: createUserExperienceInput,
//         })
//       );
//       dispatch({
//         type: ActionTypes.POST_USER_EXPERIENCE_SUCCESS,
//         payload: response,
//       });
//       dispatch(
//         selectedProfile(response.data.createUserExperience.user.username)
//       );
//     } catch (error) {
//       console.log("error on posting User Experience", error);
//       dispatch({
//         type: ActionTypes.POST_USER_EXPERIENCE_FAIL,
//         payload: error,
//       });
//     }
//   };

// export const putUserExperience =
//   (updateUserExperienceInput) => async (dispatch) => {
//     try {
//       const response = await API.graphql(
//         graphqlOperation(updateUserExperience, {
//           input: updateUserExperienceInput,
//         })
//       );
//       dispatch({
//         type: ActionTypes.UPDATE_USER_EXPERIENCE_SUCCESS,
//         payload: response.data.updateUserExperience,
//       });
//       dispatch(
//         selectedProfile(response.data.updateUserExperience.user.username)
//       );
//       //用来刷新页面的
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.UPDATE_USER_EXPERIENCE_FAIL,
//         payload: error,
//       });
//       console.log("error on update User EXPERIENCE", error);
//     }
//   };
