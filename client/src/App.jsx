import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
// import RegisterForm from './components/Registration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />}/>
        <Route path="/Navbar" element={<Navbar />}/>
        <Route path="/Contact" element={<ContactUs />}/>

      

        

        
      </Routes>
    </Router>
  );
};

export default App;
