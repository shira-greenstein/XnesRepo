import customers from "./customers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  customers,
});

export default rootReducer;
