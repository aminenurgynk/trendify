// src/components/category/CategoryBar.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from '../../redux/actions/productAction';
import { ButtonGroup, Button, Container } from '@mui/material';

const CategoryBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.allProducts.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Container sx={{ my: 2 }}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => dispatch(fetchProducts())}>All</Button>
        {categories.map((category) => (
          <Button key={category} onClick={() => dispatch(fetchProducts(category))}>{category}</Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default CategoryBar;
