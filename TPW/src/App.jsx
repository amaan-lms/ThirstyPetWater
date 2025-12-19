import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./components/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";



function App() {

  return (
    <Router>
      <Navbar />
     
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Products" element={<Products />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
