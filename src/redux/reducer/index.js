import { combineReducers } from "redux";

import filtersReducer from "./filterReducer";
import todoListReducer from "./todoReducer";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
