import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from '../layout/BaseLayout';
import Home from './Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
