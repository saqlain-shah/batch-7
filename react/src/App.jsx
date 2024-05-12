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
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik" element={<PersonalInfoForm />} />
          <Route path="/multi-step" element={<MultiStepForm />} />
          <Route path="/table" element={<TableWithLocalizationProvider/>} />

        </Routes>

      </Router>
    </React.Fragment>
  );
};

export default App;
