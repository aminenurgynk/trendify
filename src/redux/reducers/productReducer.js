import { ActionTypes } from "../constants/actionTypes";

const intialState = {
  products: [],
  categories: [],
};

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
