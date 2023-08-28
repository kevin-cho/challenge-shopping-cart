import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import Cart from '.';

test('renders container', () => {
  renderWithProviders(<Cart />);
  expect(screen.getByRole('button', { name: 'ⓧ' })).toBeInTheDocument();
  expect(screen.getByText('The cart is empty')).toBeInTheDocument();
  expect(screen.getByText('Total: 0')).toBeInTheDocument();
});

test('renders cart with products', () => {
  const preloadedState = {
    cart: {
      items: [
        { id: 1, name: 'product1', price: 15, category: 'books' },
        { id: 1, name: 'product1', price: 15, category: 'books' },
        { id: 2, name: 'product2', price: 20, category: 'shoes' },
      ]
    }
  }
  renderWithProviders(<Cart />, { preloadedState })

  // Hide the empty cart label
  expect(screen.queryByText('The cart is empty')).not.toBeInTheDocument();

  // Products should be combined when multiple of the same are in the cart
  expect(screen.getAllByText('product1')).toHaveLength(1);
  expect(screen.getByText('15')).toBeInTheDocument();
  expect(screen.getByText('30')).toBeInTheDocument();

  expect(screen.getAllByText('product2')).toHaveLength(1);
  expect(screen.getAllByText('20')).toHaveLength(2);

  expect(screen.getByText('Total: 50')).toBeInTheDocument();
})
