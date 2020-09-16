import { combineReducers } from "redux";
import { todoReducer } from "./reducer/todoReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
});
