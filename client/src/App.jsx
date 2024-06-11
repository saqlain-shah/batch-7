import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import ContactUs from './components/ContactUs';
import Layout from './Layout';
import Banner from './components/Banner';

const App = () => {
  return (

    <Router>
      
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<Layout />}>
        <Route path="" element={<Banner />} />
          <Route path="contact" element={<ContactUs />} />

        </Route>





      </Routes>
    </Router>
  );
};

export default App;
