import React from "react";
import { Rating, Typography } from "@mui/material";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Rating name="read-only" value={product.rating} readOnly />
    </div>
  );
};

export default ProductDetail;
