import React, { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import SearchBar from './components/search-bar/SearchBar';

const Header = () => (
  <header>
    Header{' '}
    <SearchBar
      onSearch={() => {
        console.log('search');
      }}
    ></SearchBar>
  </header>
);

const App = () => {
  return (
    <Fragment>
      <Header />
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
