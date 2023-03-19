import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  test('renders the correct text', () => {
    const { getByText } = render(<About />);
    expect(getByText('This app is created by Dmitry Bogdan')).toBeInTheDocument();
  });
});
