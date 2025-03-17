import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router'
import FooterComponents from '../Skincare/FooterComponents'
import SocialComponents from '../Social/SocialComponents'

 const Layout = () => {
 return (
    <>
    <Navbar/>
    <Outlet/>
    <SocialComponents/>
    <FooterComponents/>
    </>
  )
 }

 export default Layout