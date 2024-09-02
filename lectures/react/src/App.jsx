<<<<<<< HEAD
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import LandingPage from "./components/LanndingPage";
import PersonalInfoForm from "./components/formikForm";
// import { ThemeProvider } from "@emotion/react";
// import ThemeConsumer from "./components/ThemeConsumer";
import MultiStepForm from "./components/FormikForm/Index.jsx";
import TableWithLocalizationProvider from "./components/Table.jsx";

function App() {

  return (
    <React.Fragment>
      <Router>
        <Routes>
        <Route path="/counter" element={<Counter/>} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik" element={<PersonalInfoForm />} />
          <Route path="/multi-step" element={<MultiStepForm />} />
          <Route path="/table" element={<TableWithLocalizationProvider/>} />
          {/* <Route path="/dummy-data" element={<DummyDataComponent />} /> */}
          {/* <Route path="/imagecard" element={<ImageCard />} /> */}
          <Route path="/navBar" element={<ButtonAppBar />} />
          <Route path="/ProductCard" element={<ProductCard/>} />
          <Route path="/products/:id" element={<SingleProduct/>} />
=======

import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavPage from './NavPage';
import Registrationsecond from './Registrationsecond';
import RegistrationForm from './RegistrationFrom';
import DummyJson from './DummyJson';
import UseEffect from './UseEffect';
import Stepper from './MultiStepper';
import ProductDetail from './NewProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/products" element={<DummyJson />} />
          {/* Use the `element` prop instead of `component` */}
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/" element={<NavPage />} />
          <Route path="/login" element={<RegistrationForm />} />
          <Route path="/signup" element={<Registrationsecond />} />
>>>>>>> main

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
