import React from 'react'
import Header from '../common/Header'
import { Routes, Route } from "react-router-dom";
import Home from '../home/Home'
import Footer from '../common/Footer'
import MainHome from './index/Home';
const Pages = () => {
  return (
    <>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<MainHome />} />
          </Routes>
          <Footer/>
        </div>
    </>
  )
}

export default Pages
