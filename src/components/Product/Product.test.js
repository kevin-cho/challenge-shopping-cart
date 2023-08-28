import { render, screen } from '@testing-library/react';
import Product from '.';
import userEvent from '@testing-library/user-event';

const renderComponent = (props = {}) =>
  render(<Product name="laptop" price={999} {...props} />);

test('renders component with required fields', () => {
  renderComponent();

  expect(screen.getByText('laptop')).toBeInTheDocument();
  expect(screen.getByText('999')).toBeInTheDocument();
});

test('renders with category chip and add button when props provided', () => {
  const mockAdd = jest.fn();

  renderComponent({
    category: 'electronics',
    onAdd: mockAdd,
  });

  const addButton = screen.getByRole('button', { name: '+' });
  expect(screen.getByText('electronics')).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();

  userEvent.click(addButton);
  expect(mockAdd).toHaveBeenCalledTimes(1);
})

test('renders without category chip and add button when props not provided', () => {
  const mockAdd = jest.fn();

  renderComponent();

  expect(screen.queryByText('electronics')).not.toBeInTheDocument();
  expect(mockAdd).toHaveBeenCalledTimes(0);
})
