
import './App.css'
import { BrowserRouter, Route, BrowserRouter as Router, Routes, } from 'react-router-dom';

//  import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Signup from './components/signup';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import ElectronicProducts from './components/electronicProducts';
import Counterr from './components/counterr';
import Login from './components/login';
import ProductDetail from './components/ProductDetail';
import MianClock from './components/PakistanClock/mianClock';
// import { Resturent } from './resturent/resturent';
// import MultistepForm from './components/multistepForm';
// import FormikAndYup from './component/formikandyup';
function App() {


  //   const student ={
  //     name :'ali',
  //     rollno:12,
  //   }
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Navbar />}>
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
<Route path='signup' element={<Signup />} />
<Route path='ElectronicProducts' element={<ElectronicProducts />} />
<Route path="product/:id" element={<ProductDetail />} />

<Route path='counter' element={<Counterr />} />
<Route path='mainClock' element={<MianClock/>} />



            </Route>



          {/* <Route path='/resturent/resturent' Component={Resturent}/> */}
          {/* <Route path='/multistepForm' Component={MultistepForm}/> */}
          {/* <Route path='/fomikandyup' Component={<FormikAndYup/>}/> */}






        </Routes>
      </BrowserRouter>






    </>
  )
}

export default App;
