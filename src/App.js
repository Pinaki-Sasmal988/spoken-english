import './App.css';
import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
// import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Faculty from './components/Faculty';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallary from './components/Gallary';

function App() {
  // const color=rgba(24, 29, 56, .7);
  useEffect(()=>{

  },[]);
  return (
<>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={< Faculty/>} />
          <Route path="/gallary" element={< Gallary/>} />

          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
