import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import Home from '.';

test('renders container', () => {
  renderWithProviders(<Home />);
  expect(screen.getByRole('combobox', { name: '' })).toBeInTheDocument();
});

test('render products', () => {
  const preloadedState = {
    products: {
      items: [
        { id: 1, name: 'product1', price: 10, category: 'books' },
        { id: 2, name: 'product2', price: 20, category: 'shoes' },
      ]
    }
  }
  renderWithProviders(<Home />, { preloadedState });
  expect(screen.getByText('product1')).toBeInTheDocument();
  expect(screen.getByText('product2')).toBeInTheDocument();
})
