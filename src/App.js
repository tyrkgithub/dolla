import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar"
import Home from './pages/home';
import Pricing from './pages/pricing';
import Booking from './pages/booking';
import Footer from './components/footer/footer';


function App() {
  return (
    <Router>
    <div className='app'>
      <Navbar />
      
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      

      <Footer/>

    </div>
  </Router>    
  );
}

export default App;
