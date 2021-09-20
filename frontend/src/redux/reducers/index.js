import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { newsReducer, selectedSingleNewsReducer } from "./newReducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import {
  newsCommentsReducer,
  selectedNewsCommReducer,
  newsCommPostReducer,
} from "./newComReducer";

const reducers = combineReducers({
  userAuth: authReducer,
  allUsers: userReducer,
  allProducts: productReducer,
  product: selectedProductReducer,
  allNews: newsReducer,
  singleNews: selectedSingleNewsReducer,
  allNewsComments: newsCommentsReducer,
  newsComment: selectedNewsCommReducer,
  newsCommentPost: newsCommPostReducer,
});
export default reducers;
