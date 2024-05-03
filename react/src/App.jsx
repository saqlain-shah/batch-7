// App.jsx
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import UserDataForm from './components/firstComponent.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import Table from './components/table.jsx';
import ResponsiveAppBar from './components/AppBar.jsx';
import Navbar from './components/LanndingPage.jsx';
import PersonalInfoForm from './components/formik.jsx';
import MultiStepForm from './components/Stepper.jsx';
import DummyDataComponent from './components/axios.jsx';

import SingleProductDetails from './components/SingleIdFetching.jsx';

const App = () => {
  return (
    
      <BrowserRouter>
     <Navbar />
      <Routes>
     
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/table' element={<Table />} />
        <Route path='/Home' element={<ResponsiveAppBar />} />
        <Route path='/formik' element={<PersonalInfoForm />} />
        <Route path='/stepper' element={<MultiStepForm />} />
        <Route path='/axios' element={<DummyDataComponent />} />
        <Route path="/product/:productId" element={<SingleProductDetails />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Appbar' element={<ResponsiveAppBar />} />
      </Routes>
      </BrowserRouter>
            

   
  );
};

export default App;
