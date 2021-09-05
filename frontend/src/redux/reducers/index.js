import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { authReducer } from "./authReducer";
import { newReducer, selectedNewReducer } from "./newReducer";

export default combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  userAuth: authReducer,
  allNews: newReducer,
  new12: selectedNewReducer,
});
