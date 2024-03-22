import { ActionTypes } from "../constants/actionTypes";
import * as apiService from '../../services/apiService';


export const fetchProducts = (category = '') => async (dispatch) => {
  try {
    const endpoint = category ? `/products/category/${category}` : '/products';
    const products = await apiService.fetchProducts(endpoint);
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

export const fetchCategories = () => async (dispatch) => {
  try {
    const categories = await apiService.fetchCategories();
    dispatch(setCategories(categories));
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

