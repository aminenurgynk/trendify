import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productAction";
import ProductComponent from "./ProductComponent";
import { Container, Grid, useTheme } from "@mui/material";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div style={{ ...theme.mixins.toolbar }} />
      <Container maxWidth={`lg`}>
      <Grid container spacing={2} sx={{ mt: theme.spacing(2) }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`${product.id}-${index}`}>
            <ProductComponent product={product} />
          </Grid>
        ))}
      </Grid>
      </Container>
    </>
  );
};

export default ProductListing;
