import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFoundPage from './pages/not-found-page/NotFoundPage';
import FormsPage from './pages/forms-page/FormsPage';
import Home from './pages/home-page/Home';
import About from './pages/about-page/About';
import Layout from './components/layout/Layout';
import { PATH } from './constants/global';

export default function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PATH.ABOUT} element={<About />} />
        <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={PATH.FORMS} element={<FormsPage />} />
      </Route>
    </Routes>
  );
}
