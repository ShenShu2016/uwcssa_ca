import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { newReducer, selectedNewReducer } from "./newReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  userAuth: authReducer,
  allNews: newReducer,
  new12: selectedNewReducer,
});
