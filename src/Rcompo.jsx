import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Navbars from './components/Navbars';
import Contactdetail from './components/Contactdetail';

function Rcompo() {
  
  return (
    <div>
        <BrowserRouter>
          <Navbars/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project" element={<Project />} />
            <Route path="/contactdetail:name" element={<Contactdetail/> }/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Rcompo