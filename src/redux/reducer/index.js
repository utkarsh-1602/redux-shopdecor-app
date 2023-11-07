// Combine all reducers together

import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    allProducts: productReducer
});