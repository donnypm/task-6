import { combineReducers } from "redux";
import productReducer from "../reducers/productReducers";

export default combineReducers({
  Products: productReducer,
});
