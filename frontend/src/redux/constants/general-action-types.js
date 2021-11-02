export const ActionTypes = {
  SET_USER_COUNTS: "general/get/totalUser", // 如果是api call 就加个 get/post/update/delete
  SET_URL_FROM: "general/setURLFrom",
  REMOVE_URL_FROM: "general/removeURLFrom",
  REMOVE_SELECTED_PROFILE: "general/removeSelectedProfile",

  POST_IMAGE_SUCCESS: "general/put/imageSuccess",
  POST_IMAGE_FAIL: "general/put/imageFail",

  POST_MULTIPLE_IMAGES_SUCCESS: "general/put/multipleImagesSuccess",
  POST_MULTIPLE_IMAGES_FAIL: "general/put/multipleImagesFail",
  REMOVE_MULTIPLE_IMAGEs: "general/removeMultipleImages",

  SET_LIKE: "general/put/likeSuccess",
  SET_DISLIKE: "general/put/disLikeSuccess",
};
