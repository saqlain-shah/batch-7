
import './App.css'
import { Routes, Route } from 'react-router-dom'
import  NavBar  from './container/Index.jsx'
import { SignInContainer } from './container/LoginForm'
import DummyJson from './container/DummyJson.jsx'
// import Table from './container/Table.jsx'
// import LoginPage from './container/Login.jsx'
function App() {
    return (
        <div>
                        <NavBar/>

            <Routes>
                <Route path="/Index" element={<NavBar/>} />
                <Route path="/products" element={<DummyJson />} />
                {/* <Route path="/Login" element={<LoginPage/>} /> */}
                <Route path="/LoginForm" element={<SignInContainer/>} />
                {/* <Route path="/Table" element={<Table/>} /> */}
            </Routes> 
          

        </div>
    )
}

export default App
