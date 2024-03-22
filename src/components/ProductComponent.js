import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const ProductComponent = ({ product }) => {
  return (
    <Card>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ${product.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View</Button>
    </CardActions>
  </Card>
  )
}

export default ProductComponent