import React from 'react';

import Button from '../button/Button';
import SearchBar from '../search-bar/SearchBar';
import { PAGE, PATH } from '../../constants/global';
import './Header.css';

type HeaderProps = {
  title?: string;
};

class Header extends React.Component<HeaderProps> {
  handleSearch = (query: string) => {
    alert(`search for: ${query}`);
  };

  render() {
    return (
      <div className="header">
        <SearchBar onSearch={this.handleSearch}></SearchBar>
        <nav className="header__navigation">
          <ul>
            <li>
              <Button link={PATH.HOME} text={PAGE.HOME}></Button>
            </li>
            <li>
              <Button link={PATH.ABOUT} text={PAGE.ABOUT}></Button>
            </li>
            <li>
              <Button link={PATH.FORMS} text={PAGE.FORMS}></Button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
