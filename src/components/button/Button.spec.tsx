import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from './Button';

describe('Button component', () => {
  it('renders with text and link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Button link="/" text="Home" />
      </MemoryRouter>
    );
    expect(getByText('Home')).toBeInTheDocument();
  });
});
