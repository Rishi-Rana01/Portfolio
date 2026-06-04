import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#09090b] ">
      <Hero />
      <div className="section-divider mt-10 gap-5" />
      <About />
      <div className="section-divider mt-10 gap-5 " />
      <Skills />
      <div className="section-divider mt-10 gap-5" />
      <Projects />
      <div className="section-divider mt-10 gap-5" />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
