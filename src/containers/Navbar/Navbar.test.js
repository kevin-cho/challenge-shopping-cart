import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import Navbar from '.';

test('renders container', () => {
  renderWithProviders(<Navbar />);
  expect(screen.getByText('(0) cart')).toBeInTheDocument();
});

test('renders cart quantity', () => {
  const preloadedState = {
    cart: {
      items: [
        { id: 1, name: 'product1', price: 15, category: 'books' },
        { id: 1, name: 'product1', price: 15, category: 'books' },
        { id: 2, name: 'product2', price: 20, category: 'shoes' },
      ]
    }
  }
  renderWithProviders(<Navbar />, { preloadedState });
  expect(screen.getByText('(3) cart')).toBeInTheDocument();
});
