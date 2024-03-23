import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../../redux/actions/productAction';
import { Container } from '@mui/system';
import { Rating, Typography } from '@mui/material';

function ProductDetail() {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProductDetail(productId));
  }, [productId, dispatch]);

  if (!productDetail) {
    return <p>Product not found</p>;
  }

  return (
    <Container>
      <Typography variant="h3" component="h1">{productDetail.title}</Typography>
      <Typography variant="body1">{productDetail.description}</Typography>
      <Rating name="read-only" value={productDetail.rating} readOnly />
      
      </Container>


  );
}

export default ProductDetail;
