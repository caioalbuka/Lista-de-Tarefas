import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Details from '../Pages/Details/Details';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Details />} path="/details/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
