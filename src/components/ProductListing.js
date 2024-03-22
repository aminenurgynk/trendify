import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';
import { Grid } from '@mui/material';

const ProductListing = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products); 


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductComponent product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductListing