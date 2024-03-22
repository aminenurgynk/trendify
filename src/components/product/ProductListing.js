import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productAction";
import ProductComponent from "./ProductComponent";
import { Container, Grid, useTheme } from "@mui/material";
import { Pagination } from 'antd'; 

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(30);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ ...theme.mixins.toolbar }} />
      <Container maxWidth={`lg`}>
        <Grid container spacing={2} sx={{ mt: theme.spacing(2) }}>
          {currentProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={`${product.id}-${index}`}>
              <ProductComponent product={product} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          current={currentPage}
          onChange={paginate}
          total={products.length}
          pageSize={productsPerPage}
          showSizeChanger={false} // if you do not want to allow changing number of items per page
        />
      </Container>
    </>
  );
};

export default ProductListing;
