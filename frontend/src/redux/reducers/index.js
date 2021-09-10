import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { authReducer } from "./authReducer";
import { userReducer } from './userReducer'
export default combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  userAuth: authReducer,
  allUsers: userReducer,
});
