import React from 'react'
import Frontend from '/Frontend.png'
import backend from '/backend.png'
import database from '/database.png'
import Ai from '/Ai.png'

const skillsData = [
  { 
    id: 1, 
    image: Frontend, 
    title: 'Frontend', 
    description: '🎨 Crafting beautiful UIs with React & Next.js • Modern styling with Tailwind & Bootstrap • Responsive & Interactive Web Apps'
  },
  { 
    id: 2, 
    image: backend, 
    title: 'Backend', 
    description: '⚡ Scalable Node.js & Express APIs • Python/Django Solutions • RESTful Architecture • Microservices'
  },
  { 
    id: 3, 
    image: database, 
    title: 'Database', 
    description: '🔐 NoSQL expertise with MongoDB • Real-time data with Firebase • Efficient Schema Design • Data Security'
  },
  { 
    id: 4, 
    image: Ai, 
    title: 'AI', 
    description: '🤖 AI/ML Integration • Data Analysis with Pandas & NumPy • Smart Solutions • Generative AI Implementation'
  },
]

const SkillBox = ({ image, title, description }) => (
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg text-center hover:bg-purple-800 transition-all duration-300'>
    <figure className='flex justify-center mb-4'>
      <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
    </figure>
    <header>
      <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
    </header>
    <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
  </article>
)
const Skills = () => {
  return (
    <section className='relative min-h-screen overflow-hidden flex-col items-center justify-center text-white px-4 py-10'>
      <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>
      <img src="\lap.png" alt="left Pic" className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70 ' />

      <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
        <header>
          <h1 className='text-3xl sm:text-4xl font-bold'>
            My Experties <br /> and <span className='text-purple-400'>Skills</span>
          </h1>
          <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
            I am a skilled Full Stack Developer with a strong, modern-day focus on integrating artificial intelligence. 
            My expertise lies in building responsive, scalable frontends using React, Next.js, and Tailwind CSS, paired with robust backends in Node.js, Express.js, and Python/Django. 
            I am proficient in the full MERN stack, RESTful API development, and database management with MongoDB. 
            My growing proficiency in AI, Generative AI, and machine learning frameworks allows me to build intelligent, data-driven applications from concept to deployment.
          </p>
        </header>
        <section data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4'>
          {skillsData.map((skill) => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} description={skill.description} />
          ))}

        </section>
      </div>
      <img src="\lap.png" alt="Right Pic" className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70 ' />

    </section>
  )
}

export default Skills
