import { combineReducers } from "redux";
import counter from "../components/counterSlice";
import todo from "./todoModule";

const rootReducer = combineReducers({
  counter,
  todo,
});

export default rootReducer;
