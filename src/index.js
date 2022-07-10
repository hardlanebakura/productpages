import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { ProductList, Product } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path = "/" element = { <ProductList /> }></Route>
        <Route path = "/add-product" element = { <Product /> }></Route>
      </Routes>
    </Router>
);


