import React from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes';
import FeaturedProject from './components/FeaturedProject';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import StartProject from './components/StartProject';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-screen bg-[#F1F1F1]  ">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <FeaturedProject />
        <Cards />
        <StartProject />
        <Footer />
      </div>
    </>
  )
}

export default App
