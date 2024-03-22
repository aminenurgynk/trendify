import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = ({
    allProducts: productReducer,
})

export default reducers;