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
import Serum from './Pages/Serum';
import Serum1 from './Pages/Serum1';
import Foods from './Pages/Foods';
import Bubble from './Pages/Bubble';
import Acidairy from './Pages/Acidairy';
import EyeBro from './Pages/EyeBro';
import Cream from './Pages/Cream';
import Nature from './Pages/Nature';
import Set from './Pages/Set';
import Snail from './Pages/Snail';
import Sold from './Pages/Sold';
import Some from './Pages/Some';
import Toner from './Pages/Toner';
import Bention from './Pages/Bention';
import Cmc from './Pages/Cmc';
import Damaged from './Pages/Damaged';
import Cambination from './Pages/Cambination';
import Normal from './Pages/Normal';
import Oily from './Pages/Oily';
import Sensitive from './Pages/Sensitive';
import Dry from './Pages/Dry';
import Pimples from './Pages/Pimples';
import Brightening from './Pages/Brightening';
import Anti from './Pages/Anti';
import Blackheads from './Pages/Blackheads';
import Oil from './Pages/Oil';
import Sun from './Pages/Sun';
import Spot from './Pages/Spot';
import Dark from './Pages/Dark';
import Dehydaretions from './Pages/Dehydaretions';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ReturnPolicy from './Pages/ReturnPolicy';
import TermsConditions from './Pages/TermsConditions';
import TradeLicense from './Pages/TradeLicense';
import Moisturizer from './Pages/Moisturizer';
import Essence from './Pages/Essence';
import Wholesale from './Pages/Wholesale';
import Cleanser from './Pages/Cleanser';
import Sponsers from './Pages/Sponsers';

function App() {

  return (
    <>
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Skincare />} />
        <Route path="Skincare" element={<Skincare />} />
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
        <Route path="/Serum" element={<Serum/>} />
        <Route path="/Serum1" element={<Serum1/>} />
        <Route path="/Foods" element={<Foods/>} />
        <Route path="/Bubble" element={<Bubble/>} />
        <Route path="/Acidairy" element={<Acidairy/>} />
        <Route path="/EyeBro" element={<EyeBro/>} />
        <Route path="/Cream" element={<Cream/>} />
        <Route path="/Nature" element={<Nature/>} />
        <Route path="/Set" element={<Set/>} />
        <Route path="/Snail" element={<Snail/>} />
        <Route path="/Sold" element={<Sold/>} />
        <Route path="/Some" element={<Some/>} />
        <Route path="/Toner" element={<Toner/>} />
        <Route path="/Bention" element={<Bention/>} />
        <Route path="/Damaged" element={<Damaged/>} />
        <Route path="/Cmc" element={<Cmc/>} />
        <Route path="/Cambination" element={<Cambination/>} />
        <Route path="/Normal" element={<Normal/>} />
        <Route path="/Oily" element={<Oily/>} />
        <Route path="/Sensitive" element={<Sensitive/>} />
        <Route path="/Dry" element={< Dry/>} />
        <Route path="/Pimples" element={<Pimples/>} />
        <Route path="/Brightening" element={< Brightening/>} />
        <Route path="/Anti" element={<Anti/>} />
        <Route path="/Blackheads" element={<Blackheads/>} />
        <Route path="/Oil" element={< Oil/>} />
        <Route path="/Sun" element={< Sun/>} />
        <Route path="/Spot" element={<Spot/>} />
        <Route path="/Dark" element={<Dark/>} />
        <Route path="/Dehydaretions" element={<Dehydaretions/>} />   
        <Route path="/About" element={<About/>} />   
        <Route path="/ContactUs" element={<ContactUs/>} />   
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />   
        <Route path="/ReturnPolicy" element={<ReturnPolicy/>} />   
        <Route path="/TermsConditions" element={<TermsConditions/>} />  
        <Route path="/TradeLicense" element={< TradeLicense/>} />   
        <Route path="/Moisturizer" element={< Moisturizer/>} />   
        <Route path="/Cleanser" element={< Cleanser/>} />   
        <Route path="/Essence" element={< Essence/>} />   
        <Route path="/Wholesale" element={< Wholesale/>} />   
        <Route path="/Sponsers" element={< Sponsers/>} />   



 

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
