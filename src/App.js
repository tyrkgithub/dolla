import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='app'>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prices" element={<Prices/>} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

    </div>
  </Router>    
  );
}

export default App;
