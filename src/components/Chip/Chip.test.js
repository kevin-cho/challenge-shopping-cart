import { render, screen } from '@testing-library/react';
import Chip from '.';

test('renders component with children', () => {
  render(<Chip>hello</Chip>);
  expect(screen.getByText('hello')).toBeInTheDocument();
});
