import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

const Home = () => <h1>Home</h1>;
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
