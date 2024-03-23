// Navbar.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if the brand logo text "Trendify" is in the document
    expect(screen.getByText(/trendify/i)).toBeInTheDocument();

    // Check for navigation links
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/contacts/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
