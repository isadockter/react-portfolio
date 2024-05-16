import { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' scroll-smooth'>
      <Navbar />
      <div className="mx-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <About />
        <Skills />
        <Contact/>
        <Footer />
      </div>
    </div>
  )
}

export default App
