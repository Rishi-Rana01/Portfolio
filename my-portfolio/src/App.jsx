import { React, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (

    <main className='bg-gray-950'>
      <Hero />
      <About />
      <Skills />
      <Projects />

    </main>
  )
}

export default App
