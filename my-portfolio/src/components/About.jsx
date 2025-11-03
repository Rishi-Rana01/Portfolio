import React from 'react'


const About = () => {
    return (
        <section id='about' className='min-h-screen  flex items-center justify-center text-white px-4 sm:px-6'>
            <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
                <figure data-aos='fade-right' data-aos-delay='500' className='flex flex-wrap justify-center gap-4 relative'>
                    <div className='h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-linear-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform
                    rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full'></div>
                    <img src="\img_about.png" alt="about"
                        className='absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg' />
                    <img src="\img.png" alt="Laptop"
                        className='relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg ' />
                    <img src="\img_about.png" alt="About"
                        className='absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-30 h-24 sw:w-32 sm:h-32 rounded-3xl shadow-lg' />

                </figure>
                <article data-aos='fade-left' data-aos-delay='500' className='text-center lg:text-left relative'>
                    <div className='absolute z-0 w-40 h-40 sw:w-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
                    <header>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative z-10'>
                            About Me
                        </h1>
                    </header>
                    <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed relative z-10'>
                        Hello, I'm Rishi Rana. I am an AI-focused Full Stack Developer with hands-on experience in MERN stack technologies and a growing proficiency in AI and Machine Learning using Python frameworks.
                        My goal is to build intelligent, scalable, and responsive web applications that effectively integrate AI capabilities.
                        I am passionate about turning complex problems into clean, efficient solutions. My project work demonstrates my ability to manage the full development lifecycle, from API design to a polished user interface.
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
