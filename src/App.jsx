import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <About />
        <Reviews />
        <Location />
        <Footer />
    </main>
  )
}

export default App
