import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import LandingPage from "./components/LanndingPage";
import PersonalInfoForm from "./components/formikForm";
// import  DummyDataComponent from"./components/myaxios.jsx";
// import ImageCard from"./components/axios.jsx";
import  Counter from"./components/axios.jsx";
import ProductCard from "./components/ProductCard";
import SingleProduct from "./components/SingleProduct.jsx";
// import { ThemeProvider } from "@emotion/react";
// import ThemeConsumer from "./components/ThemeConsumer";
import MultiStepForm from "./components/Index";
import TableWithLocalizationProvider from "./components/Table.jsx";
import { Axios } from "axios";
import ButtonAppBar from "./components/navBar.jsx";

function App() {

  return (
    <React.Fragment>
      <Router>
        <ButtonAppBar/>
        <Routes>
        <Route path="/counter" element={<Counter/>} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik" element={<PersonalInfoForm />} />
          <Route path="/multi-step" element={<MultiStepForm />} />
          <Route path="/table" element={<TableWithLocalizationProvider/>} />
          {/* <Route path="/dummy-data" element={<DummyDataComponent />} /> */}
          {/* <Route path="/imagecard" element={<ImageCard />} /> */}
          <Route path="/navBar" element={<ButtonAppBar />} />
          <Route path="/ProductCard" element={<ProductCard/>} />
          <Route path="/products/:id" element={<SingleProduct/>} />

        </Routes>

      </Router>
    </React.Fragment>
  );
}

export default App;
