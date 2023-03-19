import * as React from 'react';
import { Fragment } from 'react';

import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Fragment>
      <Header></Header>
      <Outlet />
    </Fragment>
  );
}

export default Layout;
