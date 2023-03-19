import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './components/home-page/Home';
import NotFoundPage from './components/not-found-page/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
