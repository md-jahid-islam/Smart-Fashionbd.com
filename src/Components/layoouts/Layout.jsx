import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router'
import FooterComponents from '../Skincare/FooterComponents'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <FooterComponents/>

    </>
  )
}

export default Layout