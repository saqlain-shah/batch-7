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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
