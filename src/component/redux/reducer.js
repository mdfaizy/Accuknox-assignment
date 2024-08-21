import { combineReducers } from "redux";
import catogerySliceReducer from "./catogerySlice";

const rootReducer = combineReducers({
  dashboard: catogerySliceReducer,
});

export default rootReducer;
