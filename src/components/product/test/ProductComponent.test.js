import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import ProductComponent from '../ProductComponent';

describe('ProductComponent', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    price: 100,
    image: 'test-image.jpg',
  };

  it('renders the product title and price', () => {
    render(<ProductComponent product={product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });
});


describe('ProductComponent Snapshot', () => {
  it('renders correctly', () => {
    const product = {
      id: 1,
      title: 'Test Product',
      price: 100,
      image: 'test-image.jpg',
    };

    const tree = renderer.create(<ProductComponent product={product} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
