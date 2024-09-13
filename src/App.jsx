import { useState } from 'react'
import Navbar from './component/NavBar/Navbar.jsx'
import Home from './component/Homepage/Home.jsx'
import Skill from './component/Skills/Skill.jsx'
import Project from './component/Project/Project.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Skill />
    <Project />
    <About />
    <Contact />
    </>
  )
}

export default App
