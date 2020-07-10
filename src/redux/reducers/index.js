import { combineReducers } from "redux";
import Carts from "./carts";

const myReducer = combineReducers({
  Carts: Carts,
});

export default myReducer;
