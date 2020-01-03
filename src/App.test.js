import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders start link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/start/i);
  expect(linkElement).toBeInTheDocument();
});
