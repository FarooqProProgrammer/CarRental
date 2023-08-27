import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cars from './components/Cars'
import About from './components/About'
import Cta from './components/Cta'
import CarsCollection from './components/CarsCollection'
import Footer from './components/Footer'
import "./App.css"

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Cars />
      {/* <CarsCollection /> */}
      <About />
      <Cta />
      <Footer />
    </div>
  )
}
