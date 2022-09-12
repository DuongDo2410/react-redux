import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhences = composeWithDevTools();
const store = createStore(rootReducer, composedEnhences);
export default store;
