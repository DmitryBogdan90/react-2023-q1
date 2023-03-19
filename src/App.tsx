import React, { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const Header = () => <header>Header</header>;

const App = () => {
  return (
    <Fragment>
      <Header />
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
