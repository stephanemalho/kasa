import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home/Home';
import House from '../components/pages/House/House';
import About from '../components/pages/About/About';
import NotFound from '../components/pages/NotFound/NotFound';

const Path = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/house/:id" element={<House />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
}

export default Path