// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Home  from './pages/home'
import AboutPage from './pages/about';
import ApexServices from './pages/services';
import ApexProject from './pages/projects';
import ContactApex from './pages/contact';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactApex />} />
          <Route path="/services" element={<ApexServices />} />
          <Route path="/projects" element={<ApexProject />} />
          

        </Routes>
      </Router>
    </>
  )
}

export default App;
