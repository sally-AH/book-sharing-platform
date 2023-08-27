import React from 'react'
import Header from '../common/Header'
import { Routes, Route } from "react-router-dom";
import Home from '../home/Home'
import Footer from '../common/Footer'

const Pages = () => {
  return (
    <>
        <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </div>
    </>
  )
}

export default Pages
