import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { newsReducer, selectedSingleNewsReducer } from "./newReducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  userAuth: authReducer,
  allUsers: userReducer,
  allProducts: productReducer,
  product: selectedProductReducer,
  allNews: newsReducer,
  singleNews: selectedSingleNewsReducer,
});
