import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import NavPage from './NavPage'
import Registrationsecond from './Registrationsecond'
import RegistrationForm from './RegistrationFrom'


function App() {
  return (
    <div>
    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path="/login" element={<RegistrationForm />} />
        <Route path="/signup" element={<Registrationsecond />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App
