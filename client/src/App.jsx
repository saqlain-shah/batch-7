import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetail } from './component/productDetail';
import ViewCart from './component/viewCart'; 

const App = () => {
  return (
    <Router>
      <Routes>
      {/* <ProductDetail /> */}
        <Route path="/" element={<ProductDetail />} />
        <Route path="/viewCart" element={<ViewCart />} />
      </Routes>
    </Router>
  );
};

export default App;
