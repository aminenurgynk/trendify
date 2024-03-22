import { ActionTypes } from "../constants/actionTypes";
import * as apiService from '../../services/apiService';


export const fetchProducts = () => async (dispatch) => {
  try {
    const products = await apiService.fetchProducts();
    dispatch(setProducts(products));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
