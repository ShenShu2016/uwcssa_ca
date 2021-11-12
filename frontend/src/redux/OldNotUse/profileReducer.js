// import { ActionTypes } from "../constants/profile-action-types";

// const initialState = {
//   id: "",
//   username: "",
//   email: "",
//   owner: "",
//   firstName: "",
//   lastName: "",
//   uWindsorEmail: "",
//   intro: "",
//   major: "",
//   avatarImgS3Key: "",
//   backGroundImgS3Key: "",
//   linkedIn: "",
//   github: "",
//   createdAt: "",
//   badges: [],
//   userEducations: { items: [] },
//   userExperiences: { items: [] },
//   mutation: {
//     postEducation: {},
//     updateEducation: {},
//     postExperience: {},
//     updateExperience: {},
//   },
// };

// export const profileReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SELECTED_USER:
//       return { ...state, ...payload };
//     case ActionTypes.UPDATE_USER_INFO_SUCCESS:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PROFILE:
//       return { ...initialState, ...payload };
//     case ActionTypes.POST_USER_EDUCATION_SUCCESS:
//     case ActionTypes.POST_USER_EDUCATION_FAIL:
//       return {
//         ...state,
//         mutation: { ...state.mutation, postEducation: payload },
//       };
//     case ActionTypes.UPDATE_USER_EDUCATION_SUCCESS:
//     case ActionTypes.UPDATE_USER_EDUCATION__FAIL:
//       return {
//         ...state,
//         mutation: { ...state.mutation, updateEducation: payload },
//       };
//     case ActionTypes.POST_USER_EXPERIENCE_SUCCESS:
//     case ActionTypes.POST_USER_EXPERIENCE_FAIL:
//       return {
//         ...state,
//         mutation: { ...state.mutation, postExperience: payload },
//       };
//     case ActionTypes.UPDATE_USER_EXPERIENCE_SUCCESS:
//     case ActionTypes.UPDATE_USER_EXPERIENCE__FAIL:
//       return {
//         ...state,
//         mutation: { ...state.mutation, updateExperience: payload },
//       };
//     default:
//       return state;
//   }
// };
