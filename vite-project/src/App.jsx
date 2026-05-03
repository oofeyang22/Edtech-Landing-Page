import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import '@fortawesome/fontawesome-free/css/all.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import Company from './components/Company';
import Categories from "./components/Categories"
import Courses from "./components/Courses"
import Tutors from "./components/Tutors"
import Carousel from "./components/Carousel"
import { images } from "./Data/Carousel.json"
import Footer from "./components/Footer"

import Cookie from './components/Cookie'
import PrivacyPolicy from './components/Privacy';



function App() {


  return (
    <Router>
      <Navbar />
      

      <Routes>

        <Route path="/" element={
          <>
            <Hero/>
            <Company/>
            <Categories/>
            <Courses/>
            <Tutors/>
            <Carousel data={images}/>
          </>
        } />
        

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      

      <Footer/>
      <Cookie />
    </Router>
  )
}

export default App
