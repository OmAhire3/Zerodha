import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/Signup.js';
import AboutPage from "./Landing_page/about/AboutPage.js";
import PricingPage from "./Landing_page/pricing/PricingPage.js"
import ProductPage from "./Landing_page/products/ProductsPage.js"
import SupportPage from "./Landing_page/support/SupportPage.js"
import Navbar from './Landing_page/Navbar.js';
import Footer from "./Landing_page/Footer.js"
import NotFound from './Landing_page/NotFound.js';
import Login from './Landing_page/Login.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <Navbar/>  
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/support" element={<SupportPage/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/login" element={<Login />} />
      </Routes>  
    <Footer/>
  </BrowserRouter>
);

