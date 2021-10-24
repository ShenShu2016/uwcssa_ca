import { ActionTypes } from "../constants/article-action-types";

const initialStateArticle = {
  articles: [],
  topics: [],
  types: [],
};

const initialStateSelectedArticle = {
  article: {},
  comments: [],
  commentsNextToken: "",
};

const initialStatePUDArticle = {
  postArticle: {},
  postImage: {},
  updateArticle: [],
  deleteArticle: [],
};

export const articleReducer = (
  state = initialStateArticle,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_ARTICLES:
      return { ...state, articles: payload };
    case ActionTypes.SET_TOPICS:
      return { ...state, topics: payload };
    case ActionTypes.SET_TYPES:
      return { ...state, types: payload };
    default:
      return state;
  }
};

export const selectedArticleReducer = (
  state = initialStateSelectedArticle,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_ARTICLE:
      return { ...state, article: payload };
    case ActionTypes.SELECTED_ARTICLE_COMMENTS:
      return {
        ...state,
        comments: payload.items,
        commentsNextToken: payload.nextToken,
      };
    case ActionTypes.ARTICLE_COMMENT_POST_SUCCESS:
      return { ...state, comments: [...payload, ...state.comments] };
    case ActionTypes.LOAD_MORE_ARTICLE_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...payload.items],
        commentsNextToken: payload.nextToken,
      };
    case ActionTypes.REMOVE_SELECTED_ARTICLE:
      return initialStateSelectedArticle;
    default:
      return state;
  }
};

export const pudArticleReducer = (
  state = initialStatePUDArticle,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.POST_ARTICLE_SUCCESS:
      return { ...state, postArticle: payload };
    case ActionTypes.POST_ARTICLE_FAIL:
      return { ...state, postArticle: payload };
    case ActionTypes.POST_ARTICLE_IMG_SUCCESS:
      return { ...state, postImage: payload };
    case ActionTypes.POST_ARTICLE_IMG_FAIL:
      return { ...state, postImage: payload };
    default:
      return state;
  }
};
