import React from 'react'
import NavBar from './navBar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Layout = () => {
    return (
        <div style={{display:'flex', flexDirection:"column"}}>
            <div>
                <NavBar />
            </div>
            <div style={{ }}>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout