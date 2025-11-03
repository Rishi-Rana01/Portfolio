import React from 'react'


const About = () => {
    return (
        <section id='about' className='min-h-screen flex items-center justify-center text-white px-4 sm:px-6'>
            <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
                <figure data-aos='fade-right' data-aos-delay='500' className='relative flex justify-center items-center'>
                    {/* decorative background - hidden on very small screens */}
                    <div className='hidden sm:block absolute right-5 -top-2 md:top-10 z-0 rounded-full bg-linear-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] w-48 md:w-72 h-48 md:h-72 transform rotate-12'></div>

                    {/* small overlay image */}
                    <img src='/img_about.png' alt='about small' className='absolute -top-6 left-6 sm:left-10 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg object-cover' />

                    {/* main image */}
                    <img src='/img.png' alt='Laptop' className='relative z-10 w-56 sm:w-64 md:w-72 lg:w-[420px] h-auto rounded-lg shadow-lg object-cover' />

                    {/* bottom overlay */}
                    <img src='/img_about.png' alt='about bottom' className='absolute bottom-0 right-6 sm:right-10 z-10 w-32 h-24 sm:w-36 sm:h-32 rounded-3xl shadow-lg object-cover' />
                </figure>

                <article data-aos='fade-left' data-aos-delay='500' className='text-center lg:text-left relative'>
                    <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
                    <header>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 relative z-10'>
                            About Me
                        </h1>
                    </header>
                    <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed relative z-10 max-w-xl'>
                        Hello, I'm Rishi Rana — an AI-focused Full Stack Developer experienced with the MERN stack and Python-based machine learning tools. I build scalable, maintainable web applications that combine clean UI, robust APIs, and intelligent data features.
                        My projects span end-to-end development: API design, database modeling, frontend UX, and deploying production-ready solutions.
                    </p>
                    <footer className='relative z-10'>
                        <button className='inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg'>
                            Learn More
                        </button>
                    </footer>
                </article>
            </div>

        </section>
    )
}

export default About
