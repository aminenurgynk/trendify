import { render, screen } from '@testing-library/react';
import About from './About'; // Update path if necessary

describe('About component', () => {
  it('should render the carousel with multiple slides', () => {
    render(<About />);
    const carousel = screen.getByRole('carousel'); // Look for element with role="carousel"
    expect(carousel).toBeInTheDocument();
  });

  it('should render the title "New Season Fashion" within slides', () => {
    render(<About />);
    const titles = screen.getAllByText(/New Season Fashion/i); // Look for all elements containing "New Season Fashion" (case-insensitive)
    expect(titles.length).toBeGreaterThanOrEqual(1); // Expect at least one title
  });

  // Add more tests for specific functionalities if needed
});

it('should render the About component correctly', () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});
