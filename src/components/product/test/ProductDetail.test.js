import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDetail from '../ProductDetail';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

describe('ProductDetail', () => {
  const mockStore = configureStore();
  let store;

  it('renders product details', () => {
    store = mockStore({
      product: {
        title: 'Test Product',
        price: '100',
        image: 'test-image.jpg',
        description: 'Test Description',
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductDetail />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });
});


describe('ProductDetail Snapshot', () => {
  const mockStore = configureStore();
  let store;

  it('matches the snapshot', () => {
    store = mockStore({
      product: {
        title: 'Test Product',
        price: '100',
        image: 'test-image.jpg',
        description: 'Test Description',
      },
    });

    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ProductDetail />
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
