import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
      <div className='md:h-[550px] h-[500px] w-[450px] bg-linear-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'>
      </div>
      <Navbar />
      <main id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14
       md:mt-0 z-10'>

        <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative' data-aos='fade-up' data-aos-delay='500'>
          <div className='absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12'></div>
          <header>
            <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
              Rishi Rana
            </h1>
            <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2'>
              FullStack Developer
            </h2>

          </header>
          <p className='text-base sm:text-lg md:text-lg text-gray-200 mb-6'>
            AI-focused Full Stack Developer skilled in building intelligent and responsive web applications using the MERN stack , Next.js , and Python.
          </p>
          <div className='flex items-center space-x-4 mb-6'>
            <a href="#">
              <img src="\linkedin.png" alt="Linkedin" className='w-11 h-11' />
            </a>

            <a href="#">
              <img src="\github.png" alt="Github" className='w-11 h-11' />
            </a>

            <a href="#">
              <img src="\instagram.png" alt="Instagram" className='w-10.5 h-10.5 rounded-full' />
            </a>
          </div>
          <a href="/Rishi-Rana.pdf" download >
            <button className="inline-flex px-6 py-2 border-2 text-white focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
              Download Resume
            </button>
          </a>
        </section>
        <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-0' >
          <img src="\img.png" alt="Hero Image" className='h-[300px] sm:h-[400px] md:h[485px] w-[250px] sm:w-[480px] object-cover rounded-lg' />
        </figure>
      </main>

    </div>
  )
}

export default Hero
