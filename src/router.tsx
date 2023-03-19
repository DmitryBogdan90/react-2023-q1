import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './components/home-page/Home';

const NotFound = () => <h1>Error</h1>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
