import './App.css';
import Navbar from './components/Navbar';
// import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Faculty from './components/Faculty';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const color=rgba(24, 29, 56, .7);
  return (
<>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={< Faculty/>} />

          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
