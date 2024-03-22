import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products); 


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
    {products.map((product) => (
      <ProductComponent key={product.id} product={product} />
    ))}
  </div>
  )
}

export default ProductListing