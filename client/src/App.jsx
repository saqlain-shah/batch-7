import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetail } from './component/productDetail';
import ViewCart from './component/viewCart';
import About from './component/aboutUs';
import { CartProvider } from './component/cartContext'; 
import LandingPage from './component/LandingPage';
import Login from './component/Login';
import Register from "./component/Register";
import NavBar from './component/navBar';
import ThankYouMessage from './component/ThankYouMessage';
import ShippingDetails from './component/ShippingDetails';
import ProductList from './component/ProductList';
import Footer from './component/footer';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/viewCart" element={<ViewCart />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<ShippingDetails />} />
          <Route path="/thankyou" element={<ThankYouMessage />} />
          <Route path="/product-List" element={<ProductList />} />
          <Route path="/contact" element={<ProductList />} />

        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
};

export default App;
