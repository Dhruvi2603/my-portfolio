import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  return (
  <div style={{ backgroundColor: 'rgba(31, 26, 60, 0.963)' }}>
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <Projects />
     <Contact />
  </div>
  )
}

export default App
