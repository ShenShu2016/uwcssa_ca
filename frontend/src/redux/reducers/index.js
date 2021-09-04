import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { authReducer } from "./authReducer";
import { newsReducer, selectedNewsReducer } from "./newsReducer";

export default combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  userAuth: authReducer,
  allNews: newsReducer,
  new: selectedNewsReducer,
});
