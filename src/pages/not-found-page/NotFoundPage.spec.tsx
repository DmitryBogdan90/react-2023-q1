import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  test('renders the correct text', () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText('Page Not Found')).toBeInTheDocument();
    expect(getByText('Sorry, the page you are looking for does not exist.')).toBeInTheDocument();
  });
});
