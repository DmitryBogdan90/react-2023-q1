import React, { Component, ChangeEvent, FormEvent } from 'react';

import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface SearchBarState {
  query: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ query: event.target.value });
  }

  handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.onSearch(this.state.query);
    this.setState({ query: '' });
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default SearchBar;
