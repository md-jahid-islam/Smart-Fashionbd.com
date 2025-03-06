import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './Components/layoouts/Layout';
import Skincare from './Pages/Skincare';
import Brand from './Pages/Brand';
import MakeUp from './Pages/MakeUp';
import BeautyTools from './Pages/BeautyTools';
import Faragrance from './Pages/Faragrance';
import Food from './Pages/Food';
import Sale from './Pages/Sale';
import SpecialOffer from './Pages/SpecialOffer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Card from './Pages/Card';
function App() {

  return (
    <>
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Skincare />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/MakeUp" element={<MakeUp />} />
        <Route path="/BeautyTools" element={<BeautyTools />} />
        <Route path="/Faragrance" element={<Faragrance />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/SpecialOffer" element={<SpecialOffer />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
