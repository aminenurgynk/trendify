// Footer.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Unit test for the Footer component
describe('Footer component', () => {
  it('displays the correct text', () => {
    render(<Footer />);
    const footerText = screen.getByText(/© 2024 Trendify. All rights reserved./i);
    expect(footerText).toBeInTheDocument();
  });
});

// Snapshot test for the Footer component
it('matches the snapshot', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
