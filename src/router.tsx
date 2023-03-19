import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Card from './components/card/Card';

const Home = () => (
  <h1>
    Home <Card title="title" description="description" image="image"></Card>
  </h1>
);
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
