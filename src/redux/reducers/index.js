import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const reducers = ({
    allProducts: productReducer,
})