import { combineReducers } from "redux";
import addItems from "./addToCart";

export const rootReducer = combineReducers({
  addItems,
});
