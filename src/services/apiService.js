import axios from 'axios';

const API_BASE_URL = 'https://fake-store-api-2no73ornoa-uc.a.run.app/api';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product details for product ${productId}:`, error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
