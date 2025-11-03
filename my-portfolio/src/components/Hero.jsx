import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative min-h-[60vh] overflow-hidden sm:min-h-[100vh] flex flex-col items-center'>
     
  <div className='hidden md:block absolute right-2 top-28 transform rotate-45 z-0 rounded-3xl w-64 md:w-96 h-64 md:h-[550px] from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] bg-linear-to-r opacity-90'></div>

      <Navbar />

      <main id='home' className='flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-12 lg:px-24 py-8 md:py-16 z-10'>

        <section className='flex-1 md:pr-8 lg:pr-12 mt-8 md:mt-0 relative' data-aos='fade-up' data-aos-delay='500'>
          <div className='absolute -z-10 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-8'></div>
          <header>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3'>
              Rishi Rana
            </h1>
            <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-purple-300 mb-4'>
              Full Stack Developer
            </h2>
          </header>

          <p className='text-base sm:text-lg md:text-lg text-gray-200 mb-6 max-w-xl'>
            AI-focused Full Stack Developer building intelligent, responsive web applications using the MERN stack, Next.js, and Python — focused on clean UIs, scalable APIs, and data-driven features.
          </p>

          <div className='flex items-center space-x-4 mb-6'>
            <a href="#" aria-label='Linkedin'>
              <img src="/linkedin.png" alt="Linkedin" className='w-10 h-10 sm:w-12 sm:h-12' />
            </a>

            <a href="#" aria-label='Github'>
              <img src="/github.png" alt="Github" className='w-10 h-10 sm:w-12 sm:h-12' />
            </a>

            <a href="#" aria-label='Instagram'>
              <img src="/instagram.png" alt="Instagram" className='w-10 h-10 sm:w-12 sm:h-12 rounded-full' />
            </a>
          </div>

          <a href="/Rishi-Rana.pdf" download>
            <button className="inline-flex px-5 py-2 border-2 text-white focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-base sm:text-lg">
              Download Resume
            </button>
          </a>
        </section>

        <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-8 md:mt-0'>
          <img src="/img.png" alt="Hero Image" className='w-56 sm:w-80 md:w-[420px] h-auto object-cover rounded-lg max-w-full' />
        </figure>
      </main>
    </div>
  )
}

export default Hero
