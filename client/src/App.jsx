import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetail } from './component/productDetail';
import ViewCart from './component/viewCart';
import { CartProvider } from './component/cartContext'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductDetail />} />
          <Route path="/viewCart" element={<ViewCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
