import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CategoryBar from './CategoryBar';
import { Provider } from 'react-redux';
import store from '../../redux/store'; 
import { fetchCategories, fetchProducts } from '../../redux/actions/productAction';

import renderer from 'react-test-renderer';

jest.mock('../../redux/actions/productAction'); // Mock productAction

test('renders All button and category buttons', () => {
  render(
    <Provider store={store}>
      <CategoryBar />
    </Provider>
  );

  const allButton = screen.getByRole('button', { name: /All/i });
  const categoryButtons = screen.getAllByRole('button', { name: /category/i });

  expect(allButton).toBeInTheDocument();
  expect(categoryButtons).toHaveLength(2); // Adjust based on expected categories
});

test('dispatches actions on button clicks', () => {
  const dispatchMock = jest.fn();
  fetchCategories.mockReturnValue(dispatchMock);
  fetchProducts.mockReturnValue(dispatchMock);

  render(
    <Provider store={store}>
      <CategoryBar />
    </Provider>
  );

  const allButton = screen.getByRole('button', { name: /All/i });
  const categoryButton = screen.getByRole('button', { name: /category 1/i }); // Assuming a category named "category 1"

  userEvent.click(allButton);
  expect(fetchProducts).toHaveBeenCalledTimes(1);

  userEvent.click(categoryButton);
  expect(fetchProducts).toHaveBeenCalledTimes(2);
  expect(fetchProducts).toHaveBeenCalledWith('category 1');
});


test('renders correctly', () => {
  const tree = renderer.create(<CategoryBar categories={['category 1', 'category 2']} />).toJSON();
  expect(tree).toMatchSnapshot();
});
