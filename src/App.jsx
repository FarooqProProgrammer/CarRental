import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cars from './components/Cars'
import About from './components/About'
import Cta from './components/Cta'
import CarsCollection from './components/CarsCollection'
import Footer from './components/Footer'
import "./App.css"
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cars />
      {/* <CarsCollection /> */}
      <About />
      <Contact />
      <Cta />
      <Footer />
    </>
  )
}
