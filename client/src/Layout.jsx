import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div
            style={{ minHeight:'80vh',padding:'10px', }}
            >
               
                <Outlet>

                </Outlet>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
