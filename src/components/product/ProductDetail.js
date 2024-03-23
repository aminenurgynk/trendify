import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../../redux/actions/productAction';
import { Container, Card, CardMedia, CardContent, Typography, Rating, Box } from '@mui/material';
import './ProductDetail.css';

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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', sm: 360 }, height: { xs: 300, sm: 'auto' } }}
          image={productDetail.image}
          alt={productDetail.title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productDetail.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {productDetail.description}
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              ${productDetail.price}
            </Typography>
            <Rating name="read-only" value="2.5" precision={0.5} readOnly />
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
}

export default ProductDetail;
