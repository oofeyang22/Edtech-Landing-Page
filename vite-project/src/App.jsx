import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
/* In your main CSS file */
import '@fortawesome/fontawesome-free/css/all.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Hero from './components/Hero'
import Company from './components/Company';
import Categories from "./components/Categories"
import Courses from "./components/Courses"
import Tutors from "./components/Tutors"
import Carousel from "./components/Carousel"
import { images } from "./Data/Carousel.json"
import Footer from "./components/Footer"
//import Carousel from './components/Carousel'
function App() {
  //const [count, setCount] = useState(0)

  return (

    <Router>
      <Navbar />

      <Hero/>
      <Company/>
      <Categories/>
      <Courses/>
      <Tutors/>
      <Carousel data={images}/>
      <Footer/>

      
      <Routes>
        <Route path="/" exact component={<Home/>} />
        <Route path="/about" component={<About/>} />
      </Routes>
    </Router>
  )
}

export default App
