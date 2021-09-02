import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  userAuth: authReducer,
});
