import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async (endpoint = `/products`) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    const originalProducts = response.data;
    let newId = originalProducts.length;

    const duplicatedProducts = originalProducts.map(product => {
      const newProduct = {...product, id: ++newId}; 
      return newProduct;
    });
    const combinedProducts = [...originalProducts, ...duplicatedProducts];
    return combinedProducts;
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
    const response = await axios.get(`${API_BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
