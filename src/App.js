import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from './pages/Profile';
import Payment from "./pages/PaymentPage";



const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>



  </div>;
};

export default App;
