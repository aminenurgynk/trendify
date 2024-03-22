import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductComponent = ({ product }) => {
  return (
    <Card sx={{
      maxWidth: 345,
      m: 2, 
      boxShadow: 3, 
      display: "flex",
      flexDirection: "column",
    }}>
      <Box sx={{ position: 'relative', paddingTop: '100%', height: 0 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", paddingBottom: "16px" }}>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
};

export default ProductComponent;
