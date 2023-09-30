import React from 'react'
import Footer from './Footer'
import Navi from './Navi'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Navi />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
