import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import ProductListing from '../ProductListing';
import renderer from 'react-test-renderer';

describe('ProductListing', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      allProducts: {
        products: [
          { id: 1, title: 'Product 1', price: '10.99', image: 'link_to_image_1' },
          { id: 2, title: 'Product 2', price: '29.99', image: 'link_to_image_2' },
          // Add more products as needed for the test
        ],
      },
    });
  });

  it('should display products', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductListing />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});



const mockStore = configureStore([]);

describe('ProductListing Snapshot', () => {
  it('should match the snapshot', () => {
    const store = mockStore({
      allProducts: {
        products: [
          { id: 1, title: 'Product 1', price: '10.99', image: 'link_to_image_1' },
          { id: 2, title: 'Product 2', price: '29.99', image: 'link_to_image_2' },
          // Add more products as needed for the snapshot
        ],
      },
    });

    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ProductListing />
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

