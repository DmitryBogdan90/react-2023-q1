import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('should call onSearch with query when form is submitted', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={onSearchMock} />);
    const input = getByPlaceholderText('Search');
    const button = getByText('Go');
    const query = 'test query';

    fireEvent.change(input, { target: { value: query } });
    fireEvent.click(button);

    expect(onSearchMock).toHaveBeenCalledWith(query);
  });
});
